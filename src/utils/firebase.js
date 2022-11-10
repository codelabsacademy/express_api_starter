import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { firebase_api_key,
        firebase_app_id,
        firebase_auth_domain,
        firebase_project_id,
        firebase_storage_bucket,
        firebase_messaging_sender_id,
        firebase_storage_reference
        } from "./config.js";


const firebaseConfig = {
  apiKey: firebase_api_key,
  authDomain: firebase_auth_domain,
  projectId: firebase_project_id,
  storageBucket: firebase_storage_bucket,
  messagingSenderId: firebase_messaging_sender_id,
  appId: firebase_app_id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app, firebase_storage_reference);
