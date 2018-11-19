

import React, { Component } from "react";
import "./App.css";
import Notification from './Notification';
import type { NotificationType } from './constants';

type Props = {

}
class App extends Component<Props> {
  render() {
    const message : NotificationType = {
      type: "MESSAGE",
      title: "hi",
      description: "hi"
    }
    return (
      <div>
        <Notification notification={message} />
      </div>
    );
  }
}

export default App;
