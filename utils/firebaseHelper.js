// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
    const firebaseConfig = {
        // Use Your firebase configuration
    }

    // Initialize Firebase
    return initializeApp(firebaseConfig)
}
