import React,{useState} from 'react'
import './ProductDetails.css'
import{ Trans } from 'react-i18next';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
function ProductDetails(props) {
    // let history = useHistory();
    console.log(props)
    const products = JSON.parse(localStorage.getItem('productList'))

    
    const [editing, setEditing] = useState(null)
    const [editingTextName, setEditingTextName] = useState('')
    const [editingTextMrp, setEditingTextMrp] = useState('')

    function editadding(id) {
        const updatedAdd = [...products].map((x) => {
            if (x.id === id) {
                x.Name = editingTextName
                x.mrp = editingTextMrp
            }
            return x
        })
        // setProductList(updatedAdd)
        setEditing(null)
        setEditingTextName(props.showDetails?.Name)
        setEditingTextMrp('')
    }
// function handleClick() {
//         history.push("/addproduct");
//       }
    
    return (
        <div className='prds-details'>
            <fieldset><fieldset>
            <lable><Trans>ProductDetails</Trans></lable>
            </fieldset>
            <br></br>
            
              <div>
                {editing !== props.showDetails?.Name ?(
                                <div >
                                    {console.log(props.showDetails)}
                                <p><Trans>Product Name</Trans>:- {props.showDetails?.Name}</p>
                                <br></br>
                                <p><Trans>Product Mrp</Trans>:-  {props.showDetails?.mrp}</p>
                                <br></br>
                              </div>
                            ) :(
                            <form required='mandetory' >
                            
                            <TextField
                        className='prds-field'
                        id="pname"
                        name='pname'
                        label={<Trans>ProductName</Trans>}
                        // PlaceHolder={props.showDetails?.Name}
                        required='mandetory'
                        type="text"
                        variant="outlined"
                        onChange={(e) => {
                            setEditingTextName(e.target.value)
                        }}
                        value={editingTextName}
                    />
                      <h1><br/></h1>
                            <TextField
                        className='mrp-field'
                        id="mrp"
                        name='mrp'
                        label={<Trans>mrp</Trans>}
                        required='mandetory'
                        type="number"
                        variant="outlined"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setEditingTextMrp(e.target.value)
                        }}
                        value={editingTextMrp}
                    />
                            </form>)
                            
                            
                        }
                        

                        {editing === props.showDetails?.Name ? (
                        <div>
                        <button
                            className='ap-submit-btn'
                            required
                            onClick={() => editadding(props.showDetails?.Name)}
                            
                        >Save Edit</button>
                        {/* <button
                        onClick={(e)=>{
                            editadding(props.showDetails?.Name)
                            console.log(props.showDetails?.Name)
                        }}
                        >cancel</button> */}
                       </div> 
                    )
                        :
                        (
                            <button
                                className='ap-submit-btn'
                                onClick={(e) =>{
                                    setEditing(props.showDetails?.Name)
                                    console.log(props.showDetails?.Name)
                                }}
                            >Edit </button>
                        )}
                <button onClick={props.onCancel} ><Trans>cancel</Trans></button>
{/* <button onClick={handleClick}>edit</button> */}
                 </div>
                 

            </fieldset>
        </div>
    )
}

export default ProductDetails
