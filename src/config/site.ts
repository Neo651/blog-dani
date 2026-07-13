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
    { label: 'Sobre mí', href: '/sobre-mi', homeHref: '/sobre-mi' },
    { label: 'Contacto', href: '/#contacto', homeHref: '#contacto' },
  ],
  hero: {
    eyebrow: 'Un espacio para detenerte y pensar',
    title: 'Piensa mejor.\nVive mejor.',
    description:
      'Ideas honestas y prácticas para mirar la vida con más claridad, crecer con propósito y tomar mejores decisiones.',
    cta: { label: 'Comienza a leer', href: '#reflexion-destacada' },
    aboutCta: { label: 'Conóceme', href: '/sobre-mi' },
  },
  about: {
    eyebrow: 'Sobre Daniel',
    title: 'También estoy aprendiendo.',
    paragraphs: [
      'No tengo todas las respuestas. Soy una persona que cuestiona, aprende y busca mejorar cada día. Escribir me ayuda a entender mejor lo que vivo y a tomar decisiones con más claridad.',
      'Muchas de estas ideas primero me ayudan a mí. Las comparto porque quizá alguna también pueda abrirte una pregunta o ayudarte a mirar tu camino desde otra perspectiva.',
    ],
    image: portrait,
    imageAlt: 'Daniel Montesinos sonriendo, con traje azul, en un espacio de trabajo luminoso',
    cta: { label: 'Conóceme', href: '/sobre-mi' },
  },
  personalBrand: {
    eyebrow: 'Una conversación, no una biografía',
    title: 'Sobre Daniel',
    introduction:
      'Escribo para comprender mejor lo que vivo y compartir las ideas que también me ayudan a crecer con más claridad.',
    purpose: {
      eyebrow: 'Por qué existe este espacio',
      title: 'Una pausa para pensar con calma.',
      paragraphs: [
        'Vivimos rodeados de respuestas rápidas. Este blog nace de una necesidad más sencilla: detenerme, hacer mejores preguntas y ordenar aquello que voy aprendiendo.',
        'No escribo para decirle a nadie cómo vivir. Comparto perspectivas que nacen de experiencias reales y que quizá puedan acompañar a otra persona en el momento adecuado.',
      ],
    },
    principles: {
      eyebrow: 'Principios personales',
      title: 'La forma en que intento acercarme a cada idea.',
      items: [
        {
          title: 'Curiosidad antes que certeza',
          description: 'Prefiero una pregunta honesta a una respuesta que pretende ser definitiva.',
        },
        {
          title: 'Claridad antes que ruido',
          description: 'Una idea sencilla y útil puede acompañarnos mucho más que una explicación complicada.',
        },
        {
          title: 'Progreso antes que perfección',
          description: 'Aprender también significa equivocarse, revisar lo que pensamos y volver a intentarlo.',
        },
      ],
    },
    origin: {
      eyebrow: 'Cómo nacen las reflexiones',
      title: 'Primero aparecen en la vida real.',
      paragraphs: [
        'Algunas nacen de una conversación. Otras, de un error, un libro, una decisión difícil o una pregunta que sigue dando vueltas después de varios días.',
        'Escribirlas es una forma de poner esas ideas a prueba. Si al compartirlas una reflexión abre una pregunta, cambia un pensamiento o ayuda a avanzar, entonces habrá valido la pena.',
      ],
    },
    ecosystem: {
      eyebrow: 'Un ecosistema que crecerá sin prisa',
      title: 'Cada canal tendrá un propósito.',
      description:
        'DanielMontesinos.com seguirá siendo el centro: el lugar para las reflexiones completas y la conversación con más profundidad.',
      channels: [
        { label: 'Blog', purpose: 'Reflexiones completas', status: 'Disponible' },
        { label: 'LinkedIn', purpose: 'Ideas profesionales y aprendizaje', status: 'Disponible' },
        { label: 'Instagram', purpose: 'Reflexiones breves', status: 'Próximamente' },
        { label: 'TikTok', purpose: 'Ideas cortas', status: 'Próximamente' },
        { label: 'Newsletter', purpose: 'Profundización', status: 'Futuro' },
        { label: 'Podcast', purpose: 'Conversaciones', status: 'Futuro' },
        { label: 'YouTube', purpose: 'Ideas en formato visual', status: 'Futuro' },
      ],
    },
    reflectionsCta: {
      eyebrow: 'La conversación continúa',
      title: 'Quizá una idea esté esperando el momento adecuado.',
      description: 'Explora las reflexiones con calma y comienza por aquella que hoy resuene contigo.',
      label: 'Descubrir reflexiones',
      href: '/reflexiones',
    },
    closing: {
      message:
        'Gracias por querer conocer a la persona detrás de estas palabras. Ojalá sigamos aprendiendo juntos, una reflexión a la vez.',
      signature: '— Daniel Montesinos',
    },
    seo: {
      title: 'Sobre mí',
      description:
        'Conoce a Daniel Montesinos, por qué escribe y cómo nacen sus reflexiones para pensar con claridad y vivir con mayor propósito.',
    },
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
