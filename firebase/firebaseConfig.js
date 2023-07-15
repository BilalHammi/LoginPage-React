import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyByr_YDn7icFGbDdDsj2DtP5sevDRVbmWM",
    authDomain: "user-register-system-d8c37.firebaseapp.com",
    projectId: "user-register-system-d8c37",
    storageBucket: "user-register-system-d8c37.appspot.com",
    messagingSenderId: "424582141072",
    appId: "1:424582141072:web:a49a360f0af893cf613415"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app