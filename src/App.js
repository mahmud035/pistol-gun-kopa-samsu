import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleAddToCart = (gunData) => {
    // console.log(gunData);
    //* copy previous cart Array and added new gunData object
    const newCart = [...cart, gunData];
    setCart(newCart);
  };

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div className="App">
      <Navbar cart={cart}></Navbar>

      <div className="card-container">
        {guns.map((gun, index) => (
          <Card
            key={index}
            gunData={gun}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
