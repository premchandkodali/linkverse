import React from 'react';

const NotificationSection = ({ notification, sendNotification }) => (
  <div>
    <h2>FCM Real-Time Notifications</h2>
    {notification && (
      <div>
        <p><strong>{notification.title}</strong></p>
        <p>{notification.body}</p>
      </div>
    )}
    <button onClick={sendNotification}>Send Notification</button>
  </div>
);

export default NotificationSection;