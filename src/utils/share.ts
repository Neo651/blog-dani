/*
====================================================
Utilidades para compartir reflexiones

Responsabilidad
Centralizar el texto, las URLs sociales y el comportamiento nativo que comparten Home y la experiencia de lectura.

Por qué existe
Evita que cada tarjeta conozca las particularidades de WhatsApp, X, Clipboard API o Web Share API. Los componentes
solo deciden cómo presentar la acción; esta utilidad conserva un único contrato funcional y fácil de probar.

Qué no hace
No renderiza interfaz, no registra analítica, no consulta datos y no decide la jerarquía visual de cada página.

Cómo extenderlo
Un nuevo destino social debe agregarse a buildSocialShareDestinations. Una futura telemetría debería envolver estas
funciones desde una capa de producto, sin introducirla dentro de los componentes editoriales.

Autor: Daniel Montesinos
====================================================
*/

export interface ReflectionShareContent {
  title: string;
  quote: string;
  author: string;
  url: string;
}

export interface SocialShareDestination {
  label: 'WhatsApp' | 'LinkedIn' | 'Facebook' | 'X';
  href: string;
}

export type NativeShareResult = 'shared' | 'cancelled' | 'unsupported';

export const buildReflectionShareText = ({ quote, author }: Pick<ReflectionShareContent, 'quote' | 'author'>) =>
  `“${quote}”\n\n— ${author}`;

export const buildSocialShareDestinations = (content: ReflectionShareContent): SocialShareDestination[] => {
  const encodedUrl = encodeURIComponent(content.url);
  const encodedText = encodeURIComponent(buildReflectionShareText(content));
  const encodedWhatsAppMessage = encodeURIComponent(`${buildReflectionShareText(content)}\n\n${content.url}`);

  return [
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodedWhatsAppMessage}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: 'X', href: `https://x.com/intent/post?text=${encodedText}&url=${encodedUrl}` },
  ];
};

export const createReflectionShareUrl = ({
  slug,
  requestOrigin,
  productionOrigin,
  isProduction,
}: {
  slug: string;
  requestOrigin: string;
  productionOrigin: string;
  isProduction: boolean;
}) => new URL(`/reflexiones/${slug}`, isProduction ? productionOrigin : requestOrigin).toString();

export const canUseNativeShare = () => {
  const isTouchOrSmallViewport = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
  return isTouchOrSmallViewport && typeof navigator.share === 'function';
};

/**
 * La URL viaja en `url`, nunca repetida dentro de `text`. Algunos sistemas combinan ambos campos al presentar el
 * diálogo nativo; mantenerlos separados evita enlaces duplicados en el mensaje final.
 */
export const shareReflectionNatively = async (content: ReflectionShareContent): Promise<NativeShareResult> => {
  if (!canUseNativeShare()) return 'unsupported';

  try {
    await navigator.share({
      title: content.title,
      text: buildReflectionShareText(content),
      url: content.url,
    });
    return 'shared';
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return 'cancelled';
    throw error;
  }
};

export const copyShareUrl = async (url: string) => {
  if (!navigator.clipboard?.writeText) throw new Error('Clipboard API no disponible');
  await navigator.clipboard.writeText(url);
};

/**
 * El popover vive en el top layer para escapar del overflow de tarjetas e imágenes. La posición se calcula respecto
 * al botón y se limita al viewport; si no hay espacio debajo, se coloca arriba sin tapar la acción que lo abrió.
 */
export const positionSharePopover = (trigger: HTMLElement, popover: HTMLElement) => {
  const viewportPadding = 12;
  const anchorGap = 8;
  const triggerRect = trigger.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const maximumLeft = window.innerWidth - popoverRect.width - viewportPadding;
  const left = Math.min(Math.max(triggerRect.right - popoverRect.width, viewportPadding), maximumLeft);
  const fitsBelow = triggerRect.bottom + anchorGap + popoverRect.height <= window.innerHeight - viewportPadding;
  const top = fitsBelow
    ? triggerRect.bottom + anchorGap
    : Math.max(viewportPadding, triggerRect.top - popoverRect.height - anchorGap);

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
};
