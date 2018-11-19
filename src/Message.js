

import React, { Component } from 'react';
import type { MessageType } from './constants';

type Props = {
  notification: MessageType, 
  isTest?: boolean,
}

class Test extends Component<Props> {
  
  render() {
    const { notification } = this.props;
    return (
      <div>
        {notification.title}
      </div>
    );
  }
}

export default Test;
