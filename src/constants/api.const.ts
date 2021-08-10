const host_id = localStorage.getItem('userID');

export const ENDPOINT_URL = {
  GET: {
    getAllOrders: `/order/${host_id}`,
    getAllRooms: `/customer/${host_id}/rooms`,
    getRoomsByID: (id: string) => `/rooms/${id}`,
  },
  POST: {
    login: '/auth/login',
  },
  PUT: {
    updateOrderStatus: '/order',
  },
};
