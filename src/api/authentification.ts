import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from '@/firebase';
import { SignInResponseType } from '@/types';
import { User } from 'firebase/auth';

export const signIn = async (): Promise<SignInResponseType> => {
  const result = await signInWithPopup();
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  // The signed-in user info.
  const user = result.user;

  return { status: 'success', user, token };
};

export const userSignOut = async (): Promise<void> => {
  try {
    return await signOut();
  } catch (error) {
    throw new Error('Something went wrong (userSignOut):' + error);
  }
};

export const isSignedIn = async (): Promise<Pick<SignInResponseType, 'status' | 'user'>> => {
  return new Promise((resolve, reject) => {
    try {
      onAuthStateChanged(async (user: User | null) => {
        if (user) {
          // user is signed in
          resolve({ status: 'success', user });
        } else {
          // user is signed out
          resolve({ status: 'failure', user: null });
        }
      });
    } catch (error) {
      reject('Something went wrong: ' + error);
    }
  });
};
