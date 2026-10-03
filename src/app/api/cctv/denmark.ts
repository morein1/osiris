import type { CctvCamera } from './types';
import { fetchOpenWebcamsByCountry } from './open-webcams';

// ── Denmark public webcams ──
// Uses OSIRIS' public worldwide webcam dataset and filters
// specifically for cameras located in Denmark.
// No API key required.

export async function fetchDenmarkCameras(): Promise<CctvCamera[]> {
  const cameras = await fetchOpenWebcamsByCountry('DK');

  return cameras.map((camera) => ({
    ...camera,
    country: 'Denmark',
  }));
}
