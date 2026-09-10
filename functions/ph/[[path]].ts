// PostHog reverse proxy — mirrors the app repo's functions/ph/[[path]].ts
// (GIDSLY-72) so the website's own PostHog project also goes through a
// same-origin path instead of *.posthog.com, which ad blockers commonly
// hard-block.
//
// Pattern follows PostHog's official Cloudflare Pages guide:
// https://posthog.com/docs/advanced/proxy/cloudflare

const POSTHOG_API_HOST    = 'https://eu.i.posthog.com';
const POSTHOG_ASSETS_HOST = 'https://eu-assets.i.posthog.com';

export const onRequest = async ({ request }: { request: Request }): Promise<Response> => {
  const url = new URL(request.url);

  // /ph/static/* → eu-assets host (PostHog serves JS/CSS from a CDN
  // subdomain; everything else goes to the API host).
  const isStatic = url.pathname.startsWith('/ph/static/');
  const upstream = isStatic ? POSTHOG_ASSETS_HOST : POSTHOG_API_HOST;

  // Strip the `/ph` prefix; keep the rest of the path + query string.
  const targetPath = url.pathname.replace(/^\/ph/, '') || '/';
  const target     = `${upstream}${targetPath}${url.search}`;

  const headers = new Headers(request.headers);
  headers.set('host', new URL(upstream).host);

  const upstreamReq = new Request(target, {
    method:   request.method,
    headers,
    body:     request.body,
    redirect: 'follow',
  });

  return fetch(upstreamReq);
};
