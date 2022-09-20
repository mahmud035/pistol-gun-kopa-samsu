import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([]);
  // const [cart, setCart] = useState([]);
  console.log(guns);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="card-container">
        {guns.map((gun, index) => (
          <Card key={index} gunData={gun}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
