import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useProducts(page = 1, limit = 6) {
  return useQuery({
    queryKey: ['products', page],
    queryFn: async () => {
      const skip = (page - 1) * limit;
      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      return res.data;
    },
    keepPreviousData: true,
  });
}
