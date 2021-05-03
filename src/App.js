import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import Sale from './Pages/Sale';
import Purchase from './Pages/Purchase';
import Inventory from './Pages/Inventory';
import Report from './Pages/Report';
import Employee from './Pages/Employee';
import Profile from './Pages/Profile';
import Addproduct from './Pages/Products/Addproduct';
import ProductList from './Pages/Products/ProductList/ProductList';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/home' component={Home} />
          <Route path='/sale' component={Sale} />
          <Route path='/purchase' component={Purchase} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/report' component={Report} />
          <Route path='/employee' component={Employee} />
          <Route path='/profile' component={Profile} />
          <Route path='/addproduct' component={Addproduct}/>
          <Route path='/productlist' component={ProductList}/>
          <Route path='/productdetails' component={ProductDetails}/>
            
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;