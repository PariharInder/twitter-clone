import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'

export const loginUsingEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: { user: any; }) => {
    const user = userCredential.user
    })
    .catch((error: { code: number; message: string }) => {
    const errorCode = error.code
    const errorMessage = error.message
  })
}