export interface IMessage {
  id: string;
  message: string;
  name: string;
  room: string;
  sentAt: string;
}

export interface IJoinRoom {
  room: string;
}
