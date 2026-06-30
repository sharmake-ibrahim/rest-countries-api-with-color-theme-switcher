import type { VercelRequest, VercelResponse } from '@vercel/node';

const BASE = 'https://api.restcountries.com/countries/v5';
const API_KEY = process.env.REST_COUNTRIES_API_KEY!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return res.status(204).end();
  }

  try {
    const { searchParams } = new URL(req.url!, `http://${req.headers.host}`);

    const upstreamUrl = new URL(BASE);

    // Forward all client query params (e.g. region=Europe, limit=100)
    searchParams.forEach((value, key) => {
      upstreamUrl.searchParams.set(key, value);
    });

    // Auth via query param (not Bearer header)
    upstreamUrl.searchParams.set('api-key', API_KEY);

    // Drop heavy translations branch by default
    if (!upstreamUrl.searchParams.has('response_fields_omit')) {
      upstreamUrl.searchParams.set('response_fields_omit', 'names.translations,leaders');
    }

    // Max out page size on free plan
    if (!upstreamUrl.searchParams.has('limit')) {
      upstreamUrl.searchParams.set('limit', '100');
    }

    const response = await fetch(upstreamUrl.toString());

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const json = await response.json();

    // Unwrap to data.objects so the client gets a clean array
    const countries = json?.data?.objects ?? [];
    const meta = json?.data?.meta ?? {};

    res
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Cache-Control', 's-maxage=3600')
      .status(200)
      .json({ countries, meta });

  } catch (err) {
    res.status(500).json({ error: 'Proxy error', detail: String(err) });
  }
}