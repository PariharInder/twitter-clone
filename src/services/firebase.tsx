import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCSrK0x5_DJpVMwHv0cGCVPw-Nv2MFQY6s",
  authDomain: "twitter-clone-409af.firebaseapp.com",
  projectId: "twitter-clone-409af",
  storageBucket: "twitter-clone-409af.appspot.com",
  messagingSenderId: "870204940722",
  appId: "1:870204940722:web:1d4250336409aacc0284ab",
  measurementId: "G-Q3ZTG85CH1"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const analytics = getAnalytics(app)