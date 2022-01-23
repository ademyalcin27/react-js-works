import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
import axios from 'axios';
const baseURL = 'http://localhost:8000';

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const {data} = await axios.get(`${baseURL}/products`);
      setProducts(data);
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProducts();
  },[]);

  const buyNow = async (productId) => {
    const res = await axios.get(`${baseURL}/order/${productId}`);

    console.log(res)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to online training center
        </p>
      </header>
      <Products products={products} buyNow={buyNow}/>
    </div>
  );
}

export default App;
