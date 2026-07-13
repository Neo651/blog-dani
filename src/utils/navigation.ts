/*
====================================================
Utilidades de navegación pública

Responsabilidad
Resolver destinos y estado activo del menú desde una única configuración.

Qué produce
Una colección lista para renderizar en header o footer, con href contextual y `isCurrent`.

Datos que recibe
La navegación pública centralizada y el pathname SSR de la página actual.

Dependencias
Únicamente el tipo SiteConfig.

Qué no debe hacer
No manipula el DOM, no controla el scroll y no conoce componentes visuales.

Decisión de arquitectura
Header y footer deben interpretar las rutas de la misma manera. Centralizar esta regla evita que una superficie
conserve anclas antiguas o marque un estado activo distinto de la otra.

Autor: Daniel Montesinos
====================================================
*/

import type { SiteConfig } from '~/config/site';

export type ResolvedNavigationItem = SiteConfig['navigation'][number] & {
  resolvedHref: string;
  isCurrent: boolean;
};

const getCurrentNavigationPath = (currentPath: string) => {
  if (currentPath === '/') return '/';
  if (currentPath === '/reflexiones' || currentPath.startsWith('/reflexiones/')) return '/reflexiones';
  if (currentPath === '/sobre-mi') return '/sobre-mi';
  return null;
};

export const resolveSiteNavigation = (
  navigation: SiteConfig['navigation'],
  currentPath: string
): ResolvedNavigationItem[] => {
  const currentNavigationPath = getCurrentNavigationPath(currentPath);
  const isHome = currentPath === '/';

  return navigation.map((item) => ({
    ...item,
    resolvedHref: isHome ? item.homeHref : item.href,
    isCurrent: item.href === currentNavigationPath,
  }));
};
