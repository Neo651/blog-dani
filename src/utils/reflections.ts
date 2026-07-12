export const formatReflectionDate = (value: string) =>
  new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Lima',
  }).format(new Date(value));

export const getReflectionExcerpt = (body: string, maximumLength = 150) => {
  const normalized = body.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maximumLength) return normalized;
  const candidate = normalized.slice(0, maximumLength);
  const lastSpace = candidate.lastIndexOf(' ');
  return `${candidate.slice(0, lastSpace > 80 ? lastSpace : maximumLength).trim()}…`;
};

/**
 * Calcula el tiempo desde el texto que realmente se renderiza. La referencia de 220 palabras por minuto evita que
 * un valor administrativo desactualizado distorsione la expectativa del lector sin introducir otra dependencia.
 */
export const calculateReadingMinutes = (body: string) => {
  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
};
