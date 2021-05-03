import React, { useState } from 'react'
import ProductDetails from '../ProductDetails/ProductDetails'
import './ProductTable.css'
import { Trans } from 'react-i18next';
const products = JSON.parse(localStorage.getItem('productList'))

function ProductTableList() {
  const [details, setDetails] = useState(undefined)
  if (details === undefined) {
    return (
      <div id='tablelist' className='tablelist'>
        <br></br>
        <div>
          <h2><Trans>Product List</Trans></h2>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th><Trans>Product Name</Trans></th>
                <th><Trans>Mrp</Trans></th>

              </tr>
            </thead>

            <tbody>

              {
                products?.map(x => {

                  return (

                    <tr className='productlist-row'
                      onClick={(e) => {
                        setDetails(x)
                      }}
                    >
                      <td>{x.id}</td>
                      <td>
                        {x.Name}
                        {/* {x.addProduct} */}
                      </td>
                      <td>
                        {x.mrp}
                        {/* {x.addMrp} */}
                      </td>
                      




                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    )
  }
  else {
    return (
      <div>
        <br></br>
        <div className='tablelist'>
          <h2><Trans>Product List</Trans></h2>
          <br></br>
          <table>
            <thead>
              <tr>

                <th><Trans>Product Name</Trans></th>
                <th><Trans>Mrp</Trans></th>

              </tr>
            </thead>

            <tbody>

              {
                products?.map(x => {

                  return (

                    <tr className='productlist-row'
                      onClick={(e) => {
                        setDetails(x)
                        console.log(x)
                      }}
                    >

                      <td >{x.Name}</td>

                      <td>{x.mrp}</td>

                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>



        <br></br>
        <div className='prdsdetails'>
          <ProductDetails showDetails={details} onCancel={() => setDetails(undefined)} />
        </div>
      </div>
    )

  }
}

export default ProductTableList
