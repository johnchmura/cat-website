import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Helper function to check admin status 
const isAdmin = (user) => {
  // Example: Check against approved admin emails
  const adminEmails = ["admin@example.com", "owner@example.com"];
  return user && adminEmails.includes(user.email);
};

// Add cat with image and other details
export const addCat = async (catData) => {
  const user = auth.currentUser;
  
  if (!user || !isAdmin(user)) {
    throw new Error("Unauthorized: Only admins can add cats");
  }

  try {
    const docRef = await addDoc(collection(db, "cats"), {
      image: catData.image,
      name: catData.name,
      description: catData.description,
      price: catData.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding cat:", error);
    throw error;
  }
};

// Remove cat by ID
export const removeCat = async (catId) => {
  const user = auth.currentUser;
  
  if (!user || !isAdmin(user)) {
    throw new Error("Unauthorized: Only admins can remove cats");
  }

  try {
    await deleteDoc(doc(db, "cats", catId));
    return true;
  } catch (error) {
    console.error("Error removing cat:", error);
    throw error;
  }
};


// Adjust cat details by ID
export const adjustCat = async (catId, updatedData) => {
  const user = auth.currentUser;

  if (!user || !isAdmin(user)) {
    throw new Error("Unauthorized: Only admins can adjust cat details");
  }

  try {
    const catRef = doc(db, "cats", catId);
    await updateDoc(catRef, {
      ...updatedData,
      updatedAt: new Date(), // Track when the cat was last updated
    });
    return true;
  } catch (error) {
    console.error("Error adjusting cat:", error);
    throw error;
  }
};

export { app, db, auth };