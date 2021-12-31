import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBJtC-gDdDxz6U5KTP7NKU5jV4HOK4zFF8',
  authDomain: 'rn-todo-app-d14b5.firebaseapp.com',
  projectId: 'rn-todo-app-d14b5',
  storageBucket: 'rn-todo-app-d14b5.appspot.com',
  messagingSenderId: '341792430970',
  appId: '1:341792430970:web:2f6cb0086bfc82a02654c3',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
