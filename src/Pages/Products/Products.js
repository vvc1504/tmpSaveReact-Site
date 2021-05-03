import React,{useState} from 'react';
import{Link} from 'react-router-dom'
import * as GrIcons from 'react-icons/gr';
import ProductTableList from './ProductList/ProductTableList';
import './Products.css'
import { Divider } from '@material-ui/core';
import i18n from './i18n';
import Tour from 'reactour';
import{ Trans } from 'react-i18next';

function Products() {
  const [isTourOpen,setIsTourOpen]=useState(false)
  const closeTour=()=> {
    setIsTourOpen(false)
  }
  const step1 = [
    {
      selector: '.menu-bars',
      content: <Trans>This is menu Bar</Trans>,
      
    },
    {
      selector: '.addproduct-btn',
      content: <Trans>This will redirect to add Product form</Trans>,
    },
    {
      selector: '.tablelist',
      content: <Trans>This is Product List</Trans>,
    },
    {
      selector: '.prdsdetails',
      content: <Trans>This is Product Details</Trans>,
    },
    
    
  ]
  return (
    <div
     className='productpage-box'
     >
<Link id='tour-link'  to='/' style={{marginLeft:'800px', color:'GrayText'}} onClick={()=>{setIsTourOpen(true)
      }}><Trans>HELP Guide</Trans></Link>
      <Tour 
      steps={step1} 
      isOpen={isTourOpen}
      onRequestClose={closeTour}
     />
    
      <Link  to='/addproduct'>
            <button 
            title="Add Product"
            id= 'add-product' 
            className='addproduct-btn'
            
            ><GrIcons.GrAdd className='symbol' />
            <Trans>ADDPRODUCT</Trans>
    </button>
            </Link>
           <div
            // className='tablelist'
            > 
         <ProductTableList />
         </div>
         <br/>
         <Divider></Divider>
         <br/>
         
<br></br>

    
    </div>
  );
}

export default Products; 