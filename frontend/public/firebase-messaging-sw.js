importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "linkverse-c3911.firebaseapp.com",
  projectId: "linkverse-c3911",
  storageBucket: "linkverse-c3911.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  });
});