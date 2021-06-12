const BASE = '';

const get = async <T>(url: string, options = {}): Promise<T> => {
  try {
    const response = await fetch(`${BASE}${url}`, {
      ...options,
    });
    return response.json();
  } catch (error: any) {
    return error;
  }
};

const post =
  <R>(data: any) =>
  async (url: string, options = {}): Promise<R> => {
    try {
      const response = await fetch(`${BASE}${url}`, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error: any) {
      return error;
    }
  };

export const fetcher = {
  get,
  post,
};
