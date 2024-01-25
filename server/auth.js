import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth();

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
