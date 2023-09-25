import React from 'react';
import './CryptoPage.css'; 

interface CryptoItemProps {
  name: string;
  symbol: string;
  price: number;
  onClick: () => void;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ name, symbol, price, onClick }) => {
  const getIcon = () => {
    switch (symbol.toLowerCase()) {
      case 'btc':
        return <img width="40px" height="40px"  src="https://cryptocompare.com/media/37746251/btc.png"/>;
      case 'eth':
        return <img width="40px" height="40px" src="https://cryptocompare.com/media/37746238/eth.png"/>;
      case 'usdt':
          return <img width="40px" height="40px" src="https://www.cryptocompare.com/media/37746338/usdt.png"/>;
      case 'xrp':
        return <img width="40px" height="40px" src="https://www.cryptocompare.com/media/38553096/xrp.png"/>;
      case 'apt':
        return <img  width="40px" height="40px" src="https://www.cryptocompare.com/media/43881360/apt.png"/>;
      default:
        return null;
    }
  };

  return (
    <tr onClick={onClick} className="crypto-item">
      <td className="crypto-logo">{getIcon()}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td className='crypto-price'>${price.toFixed(2)}</td>
    </tr>
  );
};

export default CryptoItem;
