import React, { useState, useEffect } from 'react';
import CryptoItem from './CryptoItem';
import CryptoDetail from './CryptoDetail';
import './CryptoPage.css'; 
import { fetchCryptos } from '../services/api';

const CryptoList: React.FC = () => {
  const [cryptos, setCryptos] = useState<any[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<any | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const data = await fetchCryptos();
        setCryptos(data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    // Fetch data initially and then every minute
    fetchCryptoData();
    const intervalId = setInterval(fetchCryptoData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCryptoClick = (crypto: any) => {
    // Set the selected cryptocurrency when a crypto item is clicked
    setSelectedCrypto(crypto);
  };

  const handleCloseCryptoDetail = () => {
    // Clear the selected cryptocurrency when the close button is clicked
    setSelectedCrypto(null);
  };

  return (
    <div>
      <h1 className='crypto-mainhead'>Crypto Price Tracker</h1>
      <table className="crypto-list">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <CryptoItem
              key={crypto.id}
              name={crypto.name}
              symbol={crypto.symbol}
              price={crypto.current_price}
              onClick={() => handleCryptoClick(crypto)}
            />
          ))}
        </tbody>
      </table>

      {/* Display CryptoDetail when a cryptocurrency is selected */}
      {selectedCrypto && (
        <CryptoDetail
          crypto={{
            name: selectedCrypto.name,
            symbol: selectedCrypto.symbol,
            price: selectedCrypto.current_price,
            marketCap: selectedCrypto.market_cap,
            volume: selectedCrypto.total_volume,
          }}
          onClose={handleCloseCryptoDetail}
        />
      )}
    </div>
  );
};

export default CryptoList;
