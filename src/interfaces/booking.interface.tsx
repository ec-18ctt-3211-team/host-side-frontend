export interface ICustomerInfo {
  customerID?: string;
  customer_name: string;
  phone_number: string;
  email: string;
  payment_method: string;
}

export interface IBookingInfo {
  totalAdults: number;
  totalKids: number;
  fromDate: Date;
  toDate: Date;
}
