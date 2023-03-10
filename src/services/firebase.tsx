import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

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
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)