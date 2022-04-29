import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';

import { firebaseConfig } from './config';

let app: FirebaseApp;

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export { app };
