// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
  query,
  where,
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
const auth = getAuth(app)

// This is for getting all vans
export async function getAllVans() {
  const vansCol = collection(db, "vans")
  const snapshot = await getDocs(vansCol)
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return vans
}

// This is for getting a single van by ID
export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const docSnap = await getDoc(docRef)
  return {
    ...docSnap.data(),
    id: docSnap.id,
  }
}

// This is for registering a new user without a document ID
export async function signUp({ username, email, password }) {
  const userData = {
    email: email,
    name: username,
    password: password,
  }
  // This is for registering a new user without a document ID
  //const docRef = await addDoc(collection(db, "users"), userData)

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user
    return user
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    throw new Error(`${errorMessage}`)
  }
}

// export async function signUp({ username, email, password }) {
//   const userData = {
//     email: email,
//     name: username,
//     password: password,
//   }
//   // This is for registering a new user without a document ID
//   //const docRef = await addDoc(collection(db, "users"), userData)

//   try {
//     const docRef = await addDoc(collection(db, "users"), userData)
//     return docRef.id
//   } catch (err) {
//     throw new Error("Error creating user")
//   }

//   // This is for registering a new user with a document ID
//   // try {
//   //   await setDoc(doc(db, "users", "140"), userData)
//   // } catch (err) {
//   //   throw new Error("Error creating user")
//   // }
// }

// This is for signing in a user
export async function signIn({ email, password }) {
  // query to get the user by email
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user
    return user
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    throw new Error(`${errorMessage}`)
  }
}

export async function getHostVans() {
  // query to get the vans by hostId
  const q = query(collection(db, "vans"), where("hostId", "==", "123"))
  try {
    // get the vans by hostId
    const querySnapshot = await getDocs(q)
    // check if the vans exist
    if (querySnapshot.empty) {
      throw new Error("No host vans found")
    } else {
      const vans = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      return vans
    }
  } catch (error) {
    throw new Error("Error signing in")
  }
}
