// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAa8LXKN8QgoRXVTmR_cQZkEe7BymqS300",
        authDomain: "chatbot-1045c.firebaseapp.com",
        databaseURL: "https://chatbot-1045c-default-rtdb.firebaseio.com",
        projectId: "chatbot-1045c",
        storageBucket: "chatbot-1045c.appspot.com",
        messagingSenderId: "151170709025",
        appId: "1:151170709025:web:8b4f08786607dbf0ebd560",
        measurementId: "G-W1JHM13BMJ"
    }

    // Initialize Firebase
    return initializeApp(firebaseConfig)
}
