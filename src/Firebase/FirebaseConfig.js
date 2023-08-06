import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDD0pGtRI2Rv-Nzvd8IN4RsF80XcIFSaFY",
  authDomain: "foodapp-6ffec.firebaseapp.com",
  projectId: "foodapp-6ffec",
  storageBucket: "foodapp-6ffec.appspot.com",
  messagingSenderId: "449973947139",
  appId: "1:449973947139:web:518b823db779d45267f736"
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage= getStorage(app);

export{ db, storage };