import { getAuth } from 'firebase/auth';
import { collection, doc, getFirestore } from 'firebase/firestore';

import { app } from './app';

const auth = getAuth(app);
const db = getFirestore(app);

const trainersCollectionRef = collection(db, 'trainers');

export { trainersCollectionRef, auth, db };
