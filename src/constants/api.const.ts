export const ENDPOINT_URL = {
  GET: {
    getAllOrders: (host_id: string, limit: number, page: number) =>
      `/order/host/${host_id}?limit=${limit}&page=${page}`,
    getAllRooms: (host_id: string, limit: number, page: number) =>
      `/rooms/host/${host_id}?limit=${limit}&page=${page}`,
    getRoomsByID: (id: string) => `/rooms/${id}`,
  },
  POST: {
    login: '/auth/login',
  },
  PUT: {
    updateOrderStatus: '/order',
  },
};
