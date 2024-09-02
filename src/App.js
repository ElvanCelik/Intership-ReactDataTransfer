import React, { useState } from "react";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";
import './styles/component.css';

function App() {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const solaKaydir = (item) => {
    setRightItems(rightItems.filter((i) => i !== item));
    setLeftItems([...leftItems, item]);
  };

  const sagaKaydir = (item) => {
    setLeftItems(leftItems.filter((i) => i !== item));
    setRightItems([...rightItems, item]);
  };

  const resetItems = () => {
    setLeftItems([]);
    setRightItems([]);
  };

  const solaEkle = () => {
    if (!isNaN(inputValue) && inputValue !== '') {
      setRightItems([...rightItems, parseInt(inputValue)]);
      setInputValue('');
    }
  };

  const sagaEkle = () => {
    if (!isNaN(inputValue) && inputValue !== '') {
      setLeftItems([...leftItems, parseInt(inputValue)]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1>Componentler arası veri transferi</h1>
      <div className="container">
        <LeftComponent items={leftItems} onMoveToRight={sagaKaydir} />
        <RightComponent items={rightItems} onMoveToLeft={solaKaydir} />
      </div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Bir Sayı Girin" 
        />
        <button onClick={solaEkle}>Sola Ekle</button>
        <button onClick={sagaEkle}>Sağa Ekle</button>
      </div>
      <button onClick={resetItems} className="reset-btn">Sıfırla</button>
    </div>
  );
}

export default App;
