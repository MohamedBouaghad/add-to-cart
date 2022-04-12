import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Cart from './components/Cart';


function App() {

  const [CartItems, setCartItems] = useState([]);

  const handleProducts = (product) => {
    const ProductExist = CartItems.find((item) => product.id === item.id);
    if(!ProductExist) {
      setCartItems([...CartItems, {...product, quantity: 1}]);
    }
  }
  
  const handleChange = (item, i) => {
    const index = CartItems.indexOf(item)
    const newItems = CartItems
    newItems[index].quantity = parseInt(newItems[index].quantity) + i;
    if(newItems[index].quantity === 0) {
      newItems[index].quantity = 1;
    }
    setCartItems([...newItems])
  }




  return (
    <div className="App">
      <Router>
        <Navbar size={CartItems.length} />
        <Routes>
          <Route exact path='/' element={<Main handleProducts={handleProducts} />} />
          <Route path='/cart' element={<Cart CartItems={CartItems} setCartItems={setCartItems} handleChange={handleChange} />} />
          <Route path='/home' element={<Main handleProducts={handleProducts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
