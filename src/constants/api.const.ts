export const emailValidRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;

export const ENDPOINT_URL = {
  GET: {
    getAllOrders: (host_id: string, limit: number, page: number) =>
      `/order/host/${host_id}?limit=${limit}&page=${page}`,
    getOrderByID: (id: string) => `/order/${id}`,
    getAllRooms: (host_id: string, limit: number, page: number) =>
      `/rooms/host/${host_id}?limit=${limit}&page=${page}`,
    getRoomByID: (id: string) => `/rooms/${id}`,
    getCustomerByID: (id: string) => `/customer/${id}`,
  },
  POST: {
    login: '/auth/login',
    createRoom: '/rooms',
  },
  PUT: {
    updateOrderStatus: '/order',
    updateRoom: (id: string) => `/rooms/${id}`,
    updateCustomerByID: (id: string) => `/customer/${id}`,
  },
  DELETE: {
    deleteRoom: (id: string) => `/rooms/${id}`,
  },
};
