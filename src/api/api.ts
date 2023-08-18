import axios, { type AxiosResponse } from 'axios';

async function fetchHelper<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    if (response.data) {
      const data = response.data;
      return data;
    } else {
      throw new Error('Get Request failed');
    }
  } catch (error) {
    throw new Error('Request failed with message' + error);
  }
}

export default fetchHelper;