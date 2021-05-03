import React from 'react'
import{Link} from 'react-router-dom'
import * as GrIcons from 'react-icons/gr';

function AddproductNav() {
    return (
        <div>
            <Link  to='/addproduct'>
            <button className='addproduct-btn'><GrIcons.GrAdd className='symbol' /> ADDPRODUCT</button>
            </Link>
        </div>
    ) 
}

export default AddproductNav
