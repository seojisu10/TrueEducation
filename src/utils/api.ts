export const getApiBaseUrl = (): string => {
  const configured = (import.meta.env.VITE_API_BASE_URL || '').trim();
  return configured.replace(/\/$/, '');
};

export const apiFetch = (path: string, init: RequestInit = {}) => {
  const base = getApiBaseUrl();
  const url = `${base}${path}`;
  return fetch(url, init);
};
