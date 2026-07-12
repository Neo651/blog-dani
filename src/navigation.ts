import { siteConfig } from '~/config/site';

export const headerData = {
  links: siteConfig.navigation.map(({ label, href }) => ({ text: label, href })),
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: siteConfig.social.links.filter(({ available }) => available),
  footNote: siteConfig.footer.message,
};
