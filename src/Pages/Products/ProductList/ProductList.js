import React from 'react'
// import { Link } from 'react-router-dom'
// import ListItem from '@material-ui/core/ListItem';
// import { DataGrid } from '@material-ui/data-grid';

const  products= JSON.parse(localStorage.getItem('productList'))

function ProductList() {

    // const goProductDetails=()=>{
    //     <Link to='productdetails' >
    // </Link>
    // }

return(
    <div>
         <ul>
             { 
                products.map(x => {
                 return (
                     <div>
                  
                     <table className='table'>             
                          <button onClick={(e)=>{
                        console.log(e.target.value)
                    }}
                            style={{outline:'none',cursor:'pointer',padding:'6px 16px',textAlign:'start',width:'500px',display:'flex'}}>
                                <input style={{marginRight:'10px'}} type='checkbox'  />
                                <button style={{outline:'none',background:'none',border:'none',cursor:'pointer',width:'70px',textAlign:'start'}} >
                                    {x.addProduct}</button>  
                                <button style={{outline:'none',background:'none',border:'none',cursor:'pointer',width:'70px',marginLeft:'30px',textAlign:'start'}} > 
                                    {x.addMrp}</button>
                            </button>
                            </table> 
                  </div>
                  )     
                })
              }
         </ul>
    </div> 
)   
}  

export default ProductList;
