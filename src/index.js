import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
// import EditProduct from './Pages/Products/EditProduct/EditProduct';
// import i18n from './Pages/Products/i18n';
// import ProductTableList from './Pages/Products/ProductList/ProductTableList';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <EditProduct/> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 