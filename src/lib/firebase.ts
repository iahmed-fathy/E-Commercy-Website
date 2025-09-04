import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWDOrkXCKGVAYDQbwmLQaYquS-LJGpWcI",
  authDomain: "exclusive-website-4e822.firebaseapp.com",
  projectId: "project-784350270972",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { auth };
