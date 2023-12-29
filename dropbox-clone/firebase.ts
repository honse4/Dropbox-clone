import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAXPVVJR_c0Qt--NgHrub0jRBa_daKTHqc",
    authDomain: "dropbox-clone-22ccd.firebaseapp.com",
    projectId: "dropbox-clone-22ccd",
    storageBucket: "dropbox-clone-22ccd.appspot.com",
    messagingSenderId: "275876310513",
    appId: "1:275876310513:web:1c340bdcbce1cc37392850"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db, storage};
