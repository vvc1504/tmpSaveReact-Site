import React, { useState, useEffect } from 'react'
import './Addproduct.css'
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Tour from 'reactour'
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
// import ProductDetails from './ProductDetails/ProductDetails';
function Addproduct() {
    const saveLocalStorage = JSON.parse(localStorage.getItem('productList'))


    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const [addProduct, setAddProduct] = useState('')
    const [addMrp, setAddMrp] = useState('')
    const [productList, setProductList] = useState(saveLocalStorage)
    const [isTourOpen, setIsTourOpen] = useState(false)

    const [editing, setEditing] = useState(null)
    const [editingTextName, setEditingTextName] = useState('')
    const [editingTextMrp, setEditingTextMrp] = useState('')

    // const [details, dsetDetails] = useState(undefined)
    useEffect(() => {
        localStorage.setItem('productList', JSON.stringify(productList))
    },[productList]);

    const showproduct = () => {

        // let product = { addProduct, addMrp }
        // productList.push(product)
        // setProductList([...productList])
        const newAdding = {
            id: new Date().getTime(),
            Name: addProduct,
            mrp: addMrp,
            completed: false,

        }
        setProductList([...productList].concat(newAdding))
        // setAdding('')
    }
    // const deleteProduct =(id)=>{
    //   const updatedproduct =[...productList].filter((productList)=>productList.id !== id)
    //   setProductList(updatedproduct)
    // }

    const steps = [
        {
            selector: '.form',
            content: <Trans>This is  add Product form</Trans>,
        },
        {
            selector: '.prds-field',
            content: <Trans>Here enter Product Name</Trans>,
        },
        {
            selector: '.mrp-field',
            content: <Trans>Here enter Product MRP</Trans>,
        },
        {
            selector: '.ap-submit-btn',
            content: <Trans>Enter above both and click here to submit</Trans>,
        },

    ]
    const closeTour = () => {
        setIsTourOpen(false)
    }


    function editadding(id) {
        const updatedAdd = [...productList].map((x) => {
            if (x.id === id) {
                x.Name = editingTextName
                x.mrp = editingTextMrp
            }
            return x
        })
        setProductList(updatedAdd)
        setEditing(null)
        setEditingTextName('')
        setEditingTextMrp('')
    }

    return (
        <div className='addproduct-form'>
            <Link
                style={{ marginLeft: '740px' }}
                onClick={() => setIsTourOpen(true)}><Trans>HELP Guide</Trans></Link>

            <h1><Trans>Addproduct</Trans></h1>
            <div className='form' >
                <Tour
                    steps={steps}
                    isOpen={isTourOpen}
                    onRequestClose={closeTour}
                />

                <form

                    action="/"
                    onSubmit={(e) => {
                        console.log(e.target.value)
                        showproduct()
                    }} >


                    <br></br>
                    <TextField
                        className='prds-field'
                        id="pname"
                        name='pname'
                        label={<Trans>ProductName</Trans>}
                        required='mandetory'
                        type="text"
                        variant="outlined"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setAddProduct(e.target.value)
                        }}
                        value={addProduct}
                    />
                    {/* <div >
                        <div>
                            <input 
                            id='prdsname' 
                            required='mandetory' 
                            type='text' 
                            placeholder='ProductName...'    
                            onChange={(e) => {
                                console.log(e.target.value)
                                setAddProduct(e.target.value)
                            }}
                            value={addProduct}
                            />
                            <fieldset className='ap-fieldset'>
                                <legend>
                                    <span className='ap-legend'>
                                        ProductName**(Required)</span>
                                </legend>
                            </fieldset>
                        </div>
                    </div> */}
                    <span></span>
                    <h1><span></span></h1>

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
                            setAddMrp(e.target.value)
                        }}
                        value={addMrp}
                    />
                    {/* <div >
                        <div>
                          <input 
                            className='mrp-field'
                            id="mrp"
                            name='mrp'
                            label="Mrp"
                            required='mandetory'
                            type="number"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                setAddMrp(e.target.value)
                            }}
                            value={addMrp}
                            />
                            <fieldset className='ap-fieldset'>
                                <legend>
                                    <span className='ap-legend'> Mrp*(Required)</span>
                                </legend>
                            </fieldset>
                        </div>
                    </div> */}

                    <button className='ap-submit-btn'
                        type='submit'
                        variant="outlined"
                        color="primary"
                        required
                        onClick={handleToggle}
                    ><Trans>Submit</Trans></button>
                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </form>
            </div>
                   
            {productList.map((x) => <div key={x.id}>


{editing === x.id ? (<div>
    {/* <input
        className='input-addproduct'
        type='text'
        onChange={(e) =>{ 
            console.log(e.target.value)
            setEditingTextName(e.target.value)}}
        value={editingTextName}
    /> */}

                    <TextField
                        className='prds-field'
                        id="pname"
                        name='pname'
                        label={<Trans>ProductName</Trans>}
                        PlaceHolder={x}
                        required='mandetory'
                        type="text"
                        variant="outlined"
                        onChange={(e) => {
                            setEditingTextName(e.target.value)
                        }}
                        value={editingTextName}
                    />
    {/* <input
        className='input-addproduct'
        type='number'
        onChange={(e) =>{ 
            console.log(e.target.value)
            setEditingTextMrp(e.target.value)}}
        value={editingTextMrp}
    /> */}

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
    </div>
    )
    :
    (<li>{x.Name}--{x.mrp}</li>)}

{/* <input
    type='checkbox'
    onChange={() => toggleComplete(x.id)}
    checked={x.completed} />
<button
    className='ap-submit-btn'
    onClick={() => deleteAdding(x.id)}
>Delete </button> */}

{editing === x.id ? (
    <div>
    <button
        className='ap-submit-btn'
        onClick={() => editadding(x.id)}
        
    >Save Edit</button>
    <button
    onClick={()=>editadding(x.text)}
    >cancel</button>
   </div> 
)
    :
    (
        <button
            className='ap-submit-btn'
            onClick={() => setEditing(x.id)}
        >Edit </button>
    )}



</div>)}

        </div>
    )
}

export default Addproduct;
