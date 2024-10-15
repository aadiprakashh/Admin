import React from "react";
import "./notifications.css"; // Ensure this file exists and is correctly linked
import userAvatar from "../assets/user.svg"; // Replace with your avatar image path
import notificationIcon from "../assets/bell.svg"; // Replace with a notification icon image path

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: "New order received for Product A",
      date: "2024-09-22",
      type: "order",
    },
    {
      id: 2,
      message: "Stock running low for Product B",
      date: "2024-09-21",
      type: "stock",
    },
    {
      id: 3,
      message: "Customer C left a review",
      date: "2024-09-20",
      type: "review",
    },
    {
      id: 4,
      message: "Product D price updated",
      date: "2024-09-19",
      type: "update",
    },
    {
      id: 5,
      message: "New message from Customer E",
      date: "2024-09-18",
      type: "message",
    },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <img
              src={notificationIcon}
              alt="Notification Icon"
              className="notification-icon"
            />
            <div className="notification-content">
              <p>{notification.message}</p>
              <small>{notification.date}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
