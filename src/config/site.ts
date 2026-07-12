import portrait from '~/assets/images/daniel-montesinos.jpg';

export const siteConfig = {
  brand: {
    name: 'Daniel Montesinos',
    shortName: 'Daniel',
    siteUrl: 'https://danielmontesinos.com',
    email: 'jmontesinosmata@gmail.com',
    tagline: 'Piensa mejor. Vive mejor.',
    description: 'Reflexiones para pensar con claridad, crecer con propósito y vivir mejor.',
  },
  navigation: [
    { label: 'Inicio', href: '/', homeHref: '#inicio' },
    { label: 'Reflexiones', href: '/reflexiones', homeHref: '#ultimas-reflexiones' },
    { label: 'Sobre mí', href: '/#sobre-daniel', homeHref: '#sobre-daniel' },
    { label: 'Contacto', href: '/#contacto', homeHref: '#contacto' },
  ],
  hero: {
    eyebrow: 'Un espacio para detenerte y pensar',
    title: 'Piensa mejor.\nVive mejor.',
    description:
      'Ideas honestas y prácticas para mirar la vida con más claridad, crecer con propósito y tomar mejores decisiones.',
    cta: { label: 'Comienza a leer', href: '#reflexion-destacada' },
    aboutCta: { label: 'Conóceme', href: '#sobre-daniel' },
  },
  about: {
    eyebrow: 'Sobre Daniel',
    title: 'También estoy aprendiendo.',
    paragraphs: [
      'No escribo porque tenga todas las respuestas. Escribo porque cuestionar, aprender y poner las ideas a prueba me ayuda a vivir con mayor claridad.',
      'Este espacio reúne reflexiones nacidas de experiencias, errores, libros y conversaciones. Las comparto con la esperanza de que alguna te ayude a mirar tu camino desde otra perspectiva.',
    ],
    image: portrait,
    imageAlt: 'Daniel Montesinos sonriendo, con traje azul, en un espacio de trabajo luminoso',
  },
  social: {
    eyebrow: 'Sigamos la conversación',
    title: 'Conecta conmigo',
    description: 'Las mejores ideas suelen continuar después de la lectura.',
    links: [
      {
        label: 'LinkedIn',
        icon: 'linkedin',
        description: 'Ideas sobre producto, liderazgo y aprendizaje.',
        href: 'https://www.linkedin.com/in/jesusmontesinoslinked',
        external: true,
        available: true,
        priority: true,
      },
      {
        label: 'Instagram',
        icon: 'instagram',
        description: 'Reflexiones breves y momentos del proceso.',
        href: '',
        external: true,
        available: false,
        priority: true,
      },
      {
        label: 'TikTok',
        icon: 'tiktok',
        description: 'Ideas cortas para detenerte y pensar.',
        href: '',
        external: true,
        available: false,
        priority: true,
      },
      {
        label: 'GitHub',
        icon: 'github',
        description: 'Proyectos y experimentos de producto.',
        href: '',
        external: true,
        available: false,
        priority: false,
      },
      {
        label: 'Correo',
        icon: 'email',
        description: 'Escríbeme y continuemos la conversación.',
        href: 'mailto:jmontesinosmata@gmail.com',
        external: false,
        available: true,
        priority: true,
      },
    ],
  },
  footer: {
    title: 'Gracias por detenerte un momento.',
    message: 'Ojalá alguna idea se quede contigo y te acompañe, con calma, mucho después de cerrar esta página.',
    signature: '— Daniel Montesinos',
  },
} as const;

export type SiteConfig = typeof siteConfig;
