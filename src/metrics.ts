/**
 * Grab a list of domains using the banner
 */
export async function getDomains(metricsUrl: string) {
  if (!('fetch' in window)) return [];
  return fetch(metricsUrl, {
    mode: 'cors',
    cache: 'no-cache',
    method: 'GET',
  }).then((resp) => resp.json());
}
