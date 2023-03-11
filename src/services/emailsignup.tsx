import { auth } from './firebase'
import { db } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, getDoc, collection } from 'firebase/firestore'

export const emailsignup = (email:string, password:string, username:string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
    const user = userCredential.user
    try{
        const userProfile = await addDoc(collection(db, 'profiles'), {
            id: username
        })
        console.log('works')
    }
    catch (e) {
        console.log(e)
    }
    })
    .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    })
}