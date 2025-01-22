import React, {useState} from 'react';
import { BrowserRouter,Routes, Route } from'react-router-dom';
import Navigation from './components/TopBar';
import Footer from './components/Footer';
// import {  } from './pages';
import { Home, Cart, Checkout, Account, Login, Register, Invoices, SelectAddress, MenuProducts, } from './pages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
            <Route path="/menu-products" element={<MenuProducts isLoggedIn={isLoggedIn}/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/account" element={<Account setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/selectaddress" element={<SelectAddress />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;