import fetchHelper from '@/api/api';

import { type Products } from '@/types/types';

const url = import.meta.env.VITE_API_URL;

export async function fetchSmartphones(): Promise<Products> {
  try {
    const data = await fetchHelper<Products>(url);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error('Failed to fetch smartphone data:', errorMessage);
    throw error;
  }
}