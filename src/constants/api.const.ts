export const ENDPOINT_URL = {
  GET: {
    getAllOrders: (host_id: string) => `/order/${host_id}`,
    getAllRooms: (host_id: string) => `/customer/${host_id}/rooms`,
    getRoomsByID: (id: string) => `/rooms/${id}`,
  },
  POST: {
    login: '/auth/login',
  },
  PUT: {
    updateOrderStatus: '/order',
  },
};
