import React from 'react';
import './CryptoPage.css'; 

interface CryptoDetailProps {
  crypto: {
    name: string;
    symbol: string;
    price: number;
    marketCap: number;
    volume: number;
  };
  onClose: () => void;
}

const CryptoDetail: React.FC<CryptoDetailProps> = ({
  crypto,
  onClose,
}) => {
  return (
    <div className="crypto-detail">
      <h2 className='crypto-heading'>{crypto.name} ({crypto.symbol})</h2>
      <p className='crypto-price'>Price: ${crypto.price.toFixed(2)}</p>
      <p><strong>Market Cap:</strong> ${crypto.marketCap.toFixed(2)}</p>
      <p><strong>24h Trading Volume:</strong> ${crypto.volume.toFixed(2)}</p>
      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  );
};

export default CryptoDetail;
