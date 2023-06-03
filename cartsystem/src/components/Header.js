import React from 'react'
import { Link } from 'react-router-dom'

const Header=(props)=> {
  return (
    <div className='col-12 bg-dark'>
  <nav classname="navbar navbar-light bg-dark">
    <Link className="navbar-brand" to="/cart">
     <button type="button" className="btn btn-primary">
      My Cart 
     <i class="fa-solid fa-cart-plus"></i>
     <span className="badge badge-light">{props.cartitems}</span>
     </button>
     </Link>
  </nav>
    </div>
  )
}

export default Header
