// @flow

import React, { Component } from "react";
import "./App.css";

type Status = 1 | 2;

type Props = {|
  status: Status
|};

class App extends Component<Props> {
  render() {
    const s2: Status = this.props.status;

    switch (s2) {
      case 1: {
        console.log(1);
        break;
      }
      case 3: {
        console.log(2);
        break;
      }
      default: {
        console.log(0);
        break;
      }
    }

    return null;
  }
}

export default App;
