// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider as GoogleAuthProviderFirebase,
  signInWithPopup as signInWithPopupFirebase,
  signOut as signOutFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
  User,
  NextOrObserver,
} from 'firebase/auth';
import {
  child,
  getDatabase,
  ref,
  get as firebaseGet,
  push as firebasePush,
  update as firebaseUpdate,
  remove as firebaseRemove,
} from 'firebase/database';
import { IUpdates } from './types';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyAcUYIjmcRhh3gEc4TPwqiNdLfw75GIFv4',
  authDomain: 'airo-ed98a.firebaseapp.com',
  projectId: 'airo-ed98a',
  storageBucket: 'airo-ed98a.appspot.com',
  messagingSenderId: '779670409837',
  appId: '1:779670409837:web:03ee3231d67a94f47b2564',
  databaseURL: 'https://airo-ed98a-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Working with database
export const db = getDatabase();
export const dbRef = ref(db);

export const get = (path: string) => firebaseGet(child(dbRef, path));

export const push = (path: string) => firebasePush(child(dbRef, path));

export const remove = (path: string) => firebaseRemove(ref(db, path));

export function update<T>(updates: IUpdates<T>) {
  return firebaseUpdate(ref(db), updates);
}

// Working with authentication
export const auth = getAuth();
export const provider = new GoogleAuthProviderFirebase();

export const signInWithPopup = () => signInWithPopupFirebase(auth, provider);

export const GoogleAuthProvider = GoogleAuthProviderFirebase;

export const signOut = () => signOutFirebase(auth);

// eslint-disable-next-line no-unused-vars
export const onAuthStateChanged = (callback: NextOrObserver<User>) =>
  onAuthStateChangedFirebase(auth, callback);
