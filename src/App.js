import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [totalAmount, setTotalAmount] = useState('');
  const [strikeLTP, setStrikeLTP] = useState('');
  const [lotSize, setLotSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [lotNumber, setLotNumber] = useState(0);
  const [marginUsed, setMarginUsed] = useState(0);

  useEffect(() => {
    if (totalAmount && strikeLTP && lotSize) {
      // Calculate the maximum number of lots that can be purchased
      const maxLotNumber = Math.floor(totalAmount / (strikeLTP * lotSize));
      // Calculate the quantity as lotNumber * lotSize
      const maxQuantity = maxLotNumber * lotSize;
      // Calculate the margin used
      const usedMargin = maxLotNumber * lotSize * strikeLTP;

      setLotNumber(maxLotNumber);
      setQuantity(maxQuantity);
      setMarginUsed(usedMargin);
    }
  }, [totalAmount, strikeLTP, lotSize]);

  return (
    <div className="calculator-container">
      <h1>SM Calculator</h1>

      <div className="input-container">
        <label>Total Amount</label>
        <input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />

        <label>Strike LTP</label>
        <input
          type="number"
          value={strikeLTP}
          onChange={(e) => setStrikeLTP(e.target.value)}
        />

        <label>Lot Size</label>
        <input
          type="number"
          value={lotSize}
          onChange={(e) => setLotSize(e.target.value)}
        />
      </div>

      <div className="results-container">
        <div className="result-box">
          <h3>Quantity</h3>
          <p>{quantity}</p>
        </div>

        <div className="result-box">
          <h3>Lot Number</h3>
          <p>{lotNumber}</p>
        </div>

        <div className="result-box">
          <h3>Margin Used</h3>
          <p>{marginUsed}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
