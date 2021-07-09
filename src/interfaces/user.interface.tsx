export interface IUserInfo {
  userID: string;
  username: string;
  phone_number: string;
  email: string;
}

export type OrderStatus = 'Waiting' | 'Accepted' | 'Done' | 'Denied';

export interface IBookingTable {
  orderID: string;
  roomID: string;
  order_status: OrderStatus;
}
