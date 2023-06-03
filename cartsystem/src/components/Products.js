import React from 'react'

function Products(props) {
  const{product,add}=props;
  return (

    

    <div className='container-fluid'>
      <h3 className='text-center display-4'>Sintorius Mall</h3><hr />

      <div className='row'>
        {
          product.map((pro)=>(
            <div className='col-md-3 mb-4'>
            <div className="card" >
           <img src={pro.Image} className="card-img-top" style={{height:'300px'}} />
          <div className="card-body">
          <h5 className="card-title">{pro.name}</h5>
          <p className="card-text">
         {pro.price}
        </p>
         <button onClick={()=>add(pro)} className="btn btn-primary">Add to cart </button>
      </div>
        </div>
            </div>
          ))
        }

      </div>
      
    </div>
  )
}

export default Products
