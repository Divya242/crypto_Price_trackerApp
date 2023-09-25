import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const fetchCryptos = async () => {
  try {
    const response = await api.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum,tether,ripple,aptos',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
