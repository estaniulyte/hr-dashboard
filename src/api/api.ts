import axios, { type AxiosResponse } from 'axios';

interface ApiResponse<T> {
  status: string;
  data: T;
}

async function fetchHelper<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axios.get(url);
    if (response.data) {
      const data = response.data;
      return data;
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    throw new Error('Request failed');
  }
}

export default fetchHelper;