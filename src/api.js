// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3RVX4z9gMSBH0_I4-jmNIKh47oihaQ9M",
  authDomain: "vanlife-5c90a.firebaseapp.com",
  projectId: "vanlife-5c90a",
  storageBucket: "vanlife-5c90a.firebasestorage.app",
  messagingSenderId: "10779121089",
  appId: "1:10779121089:web:6de72c8993ee71ef0d4b40",
  measurementId: "G-24ZXDJCC85",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export async function getAllVans() {
  const vansCol = collection(db, "vans")
  const snapshot = await getDocs(vansCol)
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const docSnap = await getDoc(docRef)
  return {
    ...docSnap.data(),
    id: docSnap.id,
  }
}
