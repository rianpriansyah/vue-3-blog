import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1bHYx5GMn1ndgOD6eBsoVhwdd6I-Ae0M",
  authDomain: "vueblog-6946b.firebaseapp.com",
  projectId: "vueblog-6946b",
  storageBucket: "vueblog-6946b.appspot.com",
  messagingSenderId: "95636916797",
  appId: "1:95636916797:web:53e66d672e6c36fda8b854",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
