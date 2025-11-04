// Firebase Configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTqIrGxUOisJYkPiLC5Eiy1axEJen7Ex4",
  authDomain: "rdk2-d3433.firebaseapp.com",
  projectId: "rdk2-d3433",
  storageBucket: "rdk2-d3433.firebasestorage.app",
  messagingSenderId: "1003084773155",
  appId: "1:1003084773155:web:56b91e8d44af747dbf3e96",
  measurementId: "G-94BCBEJHQY"
};

// Initialize Firebase (using compat SDK for compatibility with existing code)
// NOTE: We use compat SDK because HTML files load firebase-app-compat.js scripts
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
// Note: This connects to the default database (default)
// If you need a named database, you'll need to use Admin SDK server-side
const db = firebase.firestore();

// Optional: Enable offline persistence using new API (FirestoreSettings.cache)
// Note: Persistence is enabled by default in newer SDK versions
// If you need to configure it, use FirestoreSettings instead of enablePersistence()

// Make db globally accessible
if (typeof window !== 'undefined') {
    window.db = db;
}

// Initialize Firebase Storage (if available)
let storage = null;
try {
    // Check if firebase.storage exists and is callable
    if (firebase && firebase.storage && typeof firebase.storage === 'function') {
        storage = firebase.storage();
        console.log('✅ Firebase Storage initialized successfully');
    } else {
        console.warn('⚠️ Firebase Storage not loaded. Storage features will be unavailable.');
        console.warn('Make sure firebase-storage-compat.js is loaded before firebase-config.js');
    }
} catch (error) {
    console.error('❌ Error initializing Firebase Storage:', error);
    console.warn('⚠️ Storage features will be unavailable.');
}

// Make storage globally accessible
if (typeof window !== 'undefined') {
    window.storage = storage;
    // Also try to access from firebase app directly as fallback
    if (!window.storage && firebase && firebase.apps && firebase.apps.length > 0) {
        try {
            window.storage = firebase.storage();
            console.log('✅ Firebase Storage initialized via fallback');
        } catch (e) {
            console.warn('⚠️ Could not initialize storage via fallback:', e);
        }
    }
}


// Production-ready Firebase configuration
// All Firebase services are properly initialized and configured
