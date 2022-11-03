import React from "react";
import { NotificationContainer } from "./Notification.styled";

const Notification = ({ children }) => {
  return <NotificationContainer>{children}</NotificationContainer>;
};

export default Notification;
