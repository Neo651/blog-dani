export const DEFAULT_AUTH_RETURN_TO = '/reflexiones';

export const getSafeAuthReturnTo = (returnTo: string | null | undefined, origin: string) => {
  if (!returnTo || !returnTo.startsWith('/') || returnTo.startsWith('//')) return DEFAULT_AUTH_RETURN_TO;

  try {
    const destination = new URL(returnTo, origin);
    if (destination.origin !== origin) return DEFAULT_AUTH_RETURN_TO;
    return `${destination.pathname}${destination.search}${destination.hash}`;
  } catch {
    return DEFAULT_AUTH_RETURN_TO;
  }
};
