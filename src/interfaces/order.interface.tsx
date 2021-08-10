export const OrderStatusLabels = {
  pending: { label: 'pending', color: 'text-gray' },
  accepted: { label: 'accepted', color: 'text-success' },
  rejected: { label: 'rejected', color: 'text-error' },
};

export type OrderStatus = 'pending' | 'accepted' | 'rejected';

export interface IOrder {
  status: OrderStatus;
  deleted_at: string | null;
  _id: string;
  room_id: string;
  host_id: string;
  customer_name: string;
  customer_phone: string;
  email: string;
  num_adult: number;
  num_kid: number;
  created_at: string;
  day_start: string;
  day_end: string;
  __v: number;
}
