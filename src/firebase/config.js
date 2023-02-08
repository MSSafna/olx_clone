import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// const firebaseConfig = {
//     apiKey: "AIzaSyCzpfdNQ-Ah0jZP7CytnyhbnO1-XV9vPrU",
//     authDomain: "myproject-c82f6.firebaseapp.com",
//     projectId: "myproject-c82f6",
//     storageBucket: "myproject-c82f6.appspot.com",
//     messagingSenderId: "911597553650",
//     appId: "1:911597553650:web:538328efaf142873254d6b",
//     measurementId: "G-N4NKG1Y4HC"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyBJrt_2z3Qq5LbJqWeiGeunsXZ_0VMXqCE",
  authDomain: "reactolx-90e10.firebaseapp.com",
  projectId: "reactolx-90e10",
  storageBucket: "reactolx-90e10.appspot.com",
  messagingSenderId: "798039956155",
  appId: "1:798039956155:web:0d837d162a3db6f281e79e",
  measurementId: "G-ETZQ2ZH3SG"
};
  export default firebase.initializeApp(firebaseConfig)