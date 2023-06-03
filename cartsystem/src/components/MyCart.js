import React from 'react'
import Products from './Products';
import { Link } from 'react-router-dom';

function MyCart(props) {
  const{cart,add,Remove}=props;

  const itemPrice=cart.reduce((a,b) => a + b.qty * b.price,0);

  const texes=itemPrice > 3000 || itemPrice<=0 ? 0 : 200;

  const Total=itemPrice + texes;

  return (
    <div className='container'>
      <h1 className='text-center display-3'>My Cart</h1>
      <table className='table table-bordered'>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Add</th>
          <th>Quantity</th>
          <th>Remove</th>
          <th>Image</th>
        </tr>
        {
          cart.map((item)=>(
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><button className='btn btn-primary' onClick={()=>add(item)}>+</button></td>
              <td>{item.qty}</td>
              <td><button className='btn btn-primary' onClick={()=>Remove(item)}>-</button></td>
              <td><img src={item.Image} style={{height:'100px',width:'100px'}} /></td>
            </tr>
          ))
        }

      </table>

      <p className='lead'>Actual Price :  Rs. <b>{itemPrice}</b></p>
      <p className='lead'>Delivery Charges :Rs.<b> {texes} </b></p>
      <p className='lead'>Total Price : Rs. <b> {Total}</b></p>

     <Link to="/back">
     <button className='btn btn-secondary'>Back</button>
     </Link>
      
    </div>

    
  )
}

export default MyCart

