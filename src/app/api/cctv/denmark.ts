import type { CctvCamera } from './types';

// ── Denmark public webcams ──
// Curated public webcam pages published by ports/marinas in Denmark.
// These entries intentionally use external_url where the provider embeds the
// camera on its own page rather than exposing a stable public stream URL.

const DENMARK_CAMERAS: CctvCamera[] = [
  {
    id: 'dk-hirtshals-port',
    lat: 57.592222,
    lng: 9.969167,
    name: 'Hirtshals Havn – Webcams',
    city: 'Hirtshals',
    country: 'Denmark',
    external_url: 'https://portofhirtshals.dk/da/aktuelt/webcams/',
    source: 'Port of Hirtshals',
  },
  {
    id: 'dk-skagen-port',
    lat: 57.716944,
    lng: 10.584167,
    name: 'Skagen Havn – Webcam',
    city: 'Skagen',
    country: 'Denmark',
    external_url: 'https://www.skagenhavn.dk/dk/havneudvidelsen/webcam',
    source: 'Skagen Havn',
  },
  {
    id: 'dk-augustenborg-yachthavn',
    lat: 54.941944,
    lng: 9.871528,
    name: 'Augustenborg Yachthavn – Webcam',
    city: 'Augustenborg',
    country: 'Denmark',
    external_url: 'https://ayh.dk/webcam/',
    source: 'Augustenborg Yachthavn',
  },
  {
    id: 'dk-anholt-port',
    lat: 56.715556,
    lng: 11.514167,
    name: 'Anholt Havn – Live Webcam',
    city: 'Anholt',
    country: 'Denmark',
    external_url: 'https://anholthavn.dk/faciliteter/',
    source: 'Anholt Havn',
  },
  {
    id: 'dk-udbyhoj-marina',
    lat: 56.611528,
    lng: 10.306194,
    name: 'Udbyhøj Lystbådehavn – Webcam',
    city: 'Udbyhøj',
    country: 'Denmark',
    external_url: 'https://udbyhojlystbaadehavn.randers.dk/',
    source: 'Udbyhøj Lystbådehavn',
  },
];

export async function fetchDenmarkCameras(): Promise<CctvCamera[]> {
  return DENMARK_CAMERAS;
}
