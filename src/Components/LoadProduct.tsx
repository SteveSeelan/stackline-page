import { useEffect, useState } from 'react';
// import axios from 'axios'; If using api call instead of json file
import { Product } from '../types';
import stackline_frontend_assessment_data_2021 from '../data/stackline_frontend_assessment_data_2021.json';

const useLoadProduct = (url: string) => {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get<Product>(url); Using Json file instead of this api call
        const response = stackline_frontend_assessment_data_2021;
        setData(response[0]); // response.data if using api call
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useLoadProduct;