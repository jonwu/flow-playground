// @flow


export type KEYS = 'MESSAGE' | 'ALERT';

export type MessageType = {|
  type: 'MESSAGE',
  title: string,
  description: string
|};

export type AlertType = {|
  type: 'ALERT',
  title: string,
  level: number
|};

// export type NotificationType = KEYS & MessageType | AlertType;
export type NotificationType = {
  type: 'MESSAGE' | 'ALERT',
}
