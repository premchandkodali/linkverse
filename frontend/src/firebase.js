import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "your-api-key", // Replace with your actual API key
  authDomain: "linkverse-c3911.firebaseapp.com",
  projectId: "linkverse-c3911",
  storageBucket: "linkverse-c3911.appspot.com",
  messagingSenderId: "your-sender-id", // Replace with your actual sender ID
  appId: "your-app-id", // Replace with your actual app ID
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const database = getDatabase(app);

// Request permission for notifications
export const requestForToken = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "your-vapid-key" }); // Replace with your actual VAPID key
    console.log("FCM Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting FCM token:", error);
    return null;
  }
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export default messaging;
