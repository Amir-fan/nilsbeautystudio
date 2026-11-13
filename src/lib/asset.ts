/**
 * Helper to resolve public assets correctly with Vite's BASE_URL
 * Ensures seamless operation on GitHub Pages (subpath /nilsbeautystudio/) and local dev
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${cleanPath}`;
}

