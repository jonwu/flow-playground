

import React, { Component } from "react";
import "./App.css";
import Message from "./Message";
import type { NotificationType, MessageType } from "./constants";

type Props = {
  notification: NotificationType
};

class App extends Component<Props> {
  render() {
    const { notification } = this.props;
    switch (notification.type) {
      case "MESSAGE":
        return <Message notification={notification} />;
      default:
        return null;
    }
  }
}

export default App;
