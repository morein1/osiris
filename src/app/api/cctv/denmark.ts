import type { CctvCamera } from './types';

// ── Denmark: curated public webcams ──────────────────────────────────────────
// These cameras are intentionally published by their operators for public use.
// Sources were re-verified in October 2026.
//
// A number of older Danish public webcam installations still expose plain HTTP
// JPG snapshots. CameraViewer routes those through /api/cctv/proxy so an HTTPS
// OSIRIS deployment can render them without mixed-content errors.

const DENMARK_CAMERAS: CctvCamera[] = [
  // Skagen Lystbådehavn — four official public occupancy webcams.
  // Official harbour position: 57°43.0'N 10°35.5'E.
  {
    id: 'dk-skagen-marina-1',
    lat: 57.716667, lng: 10.591667,
    name: 'Skagen Lystbådehavn — Webcam 1',
    city: 'Skagen', country: 'Denmark',
    feed_url: 'http://87.56.55.165:8080/snapshot.cgi',
    stream_type: 'jpg',
    external_url: 'https://skagenlystbaadehavn.frederikshavn.dk/webcams',
    source: 'Skagen Lystbådehavn',
  },
  {
    id: 'dk-skagen-marina-2',
    lat: 57.716667, lng: 10.591667,
    name: 'Skagen Lystbådehavn — Webcam 2',
    city: 'Skagen', country: 'Denmark',
    feed_url: 'http://87.56.55.165:8081/snapshot.cgi',
    stream_type: 'jpg',
    external_url: 'https://skagenlystbaadehavn.frederikshavn.dk/webcams',
    source: 'Skagen Lystbådehavn',
  },
  {
    id: 'dk-skagen-marina-3',
    lat: 57.716667, lng: 10.591667,
    name: 'Skagen Lystbådehavn — Webcam 3',
    city: 'Skagen', country: 'Denmark',
    feed_url: 'http://87.56.55.165:8088/snapshot.cgi',
    stream_type: 'jpg',
    external_url: 'https://skagenlystbaadehavn.frederikshavn.dk/webcams',
    source: 'Skagen Lystbådehavn',
  },
  {
    id: 'dk-skagen-marina-4',
    lat: 57.716667, lng: 10.591667,
    name: 'Skagen Lystbådehavn — Webcam 4',
    city: 'Skagen', country: 'Denmark',
    feed_url: 'http://87.56.55.165:8090/snapshot.cgi',
    stream_type: 'jpg',
    external_url: 'https://skagenlystbaadehavn.frederikshavn.dk/webcams',
    source: 'Skagen Lystbådehavn',
  },

  // Nordsjællands Svæveflyveklub, Gørløse Flyveplads (EKGL).
  {
    id: 'dk-gorlose-glider-1',
    lat: 55.885000, lng: 12.229167,
    name: 'Gørløse Flyveplads — Forplads',
    city: 'Gørløse', country: 'Denmark',
    feed_url: 'http://glider.dk/sites/all/modules/customNSFmodules/webcam_image.php?cam=1&sz=s&d=0',
    stream_type: 'jpg',
    external_url: 'http://glider.dk/webcam',
    source: 'Nordsjællands Svæveflyveklub',
  },
  {
    id: 'dk-gorlose-glider-2',
    lat: 55.885000, lng: 12.229167,
    name: 'Gørløse Flyveplads — Bane 28',
    city: 'Gørløse', country: 'Denmark',
    feed_url: 'http://glider.dk/sites/all/modules/customNSFmodules/webcam_image.php?cam=2&sz=s&d=0',
    stream_type: 'jpg',
    external_url: 'http://glider.dk/webcam',
    source: 'Nordsjællands Svæveflyveklub',
  },
  {
    id: 'dk-gorlose-glider-3',
    lat: 55.885000, lng: 12.229167,
    name: 'Gørløse Flyveplads — Bane 10',
    city: 'Gørløse', country: 'Denmark',
    feed_url: 'http://glider.dk/sites/all/modules/customNSFmodules/webcam_image.php?cam=3&sz=s&d=0',
    stream_type: 'jpg',
    external_url: 'http://glider.dk/webcam',
    source: 'Nordsjællands Svæveflyveklub',
  },

  // Lemvig Flyveplads (EKLV).
  {
    id: 'dk-lemvig-airfield-1',
    lat: 56.503056, lng: 8.311667,
    name: 'Lemvig Flyveplads — Webcam 1',
    city: 'Lemvig', country: 'Denmark',
    feed_url: 'http://lemvig.com/webcam1/img.jpg',
    stream_type: 'jpg',
    external_url: 'http://eklv.dk/ptz%20kamera.html',
    source: 'Lemvig Flyveklub',
  },
  {
    id: 'dk-lemvig-airfield-2',
    lat: 56.503056, lng: 8.311667,
    name: 'Lemvig Flyveplads — Webcam 2',
    city: 'Lemvig', country: 'Denmark',
    feed_url: 'http://lemvig.com/webcam/img.jpg',
    stream_type: 'jpg',
    external_url: 'http://eklv.dk/ptz%20kamera.html',
    source: 'Lemvig Flyveklub',
  },

  // Svebølle Motocross Klub — three distinct public JPG channels.
  {
    id: 'dk-svebolle-mx-1',
    lat: 55.667194, lng: 11.305500,
    name: 'Svebølle Motocross — Kamera 1',
    city: 'Svebølle', country: 'Denmark',
    feed_url: 'https://smck.dk/webcam/ch01.jpg',
    stream_type: 'jpg',
    external_url: 'https://smck.dk/webcam',
    source: 'Svebølle Motocross Klub',
  },
  {
    id: 'dk-svebolle-mx-2',
    lat: 55.667194, lng: 11.305500,
    name: 'Svebølle Motocross — Kamera 2',
    city: 'Svebølle', country: 'Denmark',
    feed_url: 'https://smck.dk/webcam/ch02.jpg',
    stream_type: 'jpg',
    external_url: 'https://smck.dk/webcam',
    source: 'Svebølle Motocross Klub',
  },
  {
    id: 'dk-svebolle-mx-3',
    lat: 55.667194, lng: 11.305500,
    name: 'Svebølle Motocross — Kamera 3',
    city: 'Svebølle', country: 'Denmark',
    feed_url: 'https://smck.dk/webcam/ch03.jpg',
    stream_type: 'jpg',
    external_url: 'https://smck.dk/webcam',
    source: 'Svebølle Motocross Klub',
  },

  // APM Terminals Aarhus — two public live gate images.
  {
    id: 'dk-apm-aarhus-gate-1',
    lat: 56.156930, lng: 10.246820,
    name: 'APM Terminals Aarhus — Gate Area',
    city: 'Aarhus', country: 'Denmark',
    feed_url: 'https://cms-cd.apmterminals.com/apm/api/v1/gatecameras/gate-camera?id=4dbc015c-4147-4b95-b5c1-e2b3901f0478',
    stream_type: 'jpg',
    external_url: 'https://www.apmterminals.com/en/aarhus/e-tools/gate-status',
    source: 'APM Terminals Aarhus',
  },
  {
    id: 'dk-apm-aarhus-gate-2',
    lat: 56.156930, lng: 10.246820,
    name: 'APM Terminals Aarhus — Marshal Entry',
    city: 'Aarhus', country: 'Denmark',
    feed_url: 'https://cms-cd.apmterminals.com/apm/api/v1/gatecameras/gate-camera?id=66d905c7-873d-4eed-b8d6-31375f508873',
    stream_type: 'jpg',
    external_url: 'https://www.apmterminals.com/en/aarhus/e-tools/gate-status',
    source: 'APM Terminals Aarhus',
  },
];

export async function fetchDenmarkCameras(): Promise<CctvCamera[]> {
  return DENMARK_CAMERAS;
}
