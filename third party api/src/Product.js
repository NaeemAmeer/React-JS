import React,{useState,useEffect} from 'react'

function Product() {
    const[data,setdata]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/users').then((response)=>response.json())
        .then((any)=>{
            setdata(any);
        }).catch(()=>{
            console.log("Error");
        })
    })
  return (
    <div className='container'>
     <table className='table table-bordered'>
        <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th colSpan={2}>Name</th>
            <th >Phone</th>
            <th colSpan={3}>Address</th>
        </tr>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>First name</th>
            <th>last name</th>
            <th></th>
            <th>City</th>
            <th>Street</th>
            <th>Number</th>
        </tr>
        {
     data.map((pro) => (
        <tr>
            <td>{pro.id}</td>
            <td>{pro.email}</td>
            <td>{pro.username}</td>
            <td>{pro.password}</td>
            <td>{pro.name.firstname}</td>
            <td>{pro.name.lastname}</td>
            <td>{pro.phone}</td>
            <td>{pro.address.city}</td>
            <td>{pro.address.street}</td>
            <td>{pro.address.number}</td>
        </tr>

     ))
}

     </table>
      
    </div>
  )
}

export default Product
