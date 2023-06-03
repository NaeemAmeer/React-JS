import React, { useState } from 'react'

function Adddata(props) {
//for clearing forms
  const clear={
    id:null,
    name:'',
    email:'',
    phone:''
  }
//hooks for cateching the data
  const[user,setuser]=useState(clear);
  //function for taking data from forms
  const takedata=(event)=>{
     const{name,value}=event.target;
     setuser({...user,[name]:value})
  }
  return (
    <div>
       <h3 className='display-4 text-center'>Add Users Data</h3>
      <form onSubmit={(e)=>(
        e.preventDefault(),
        props.allnew(user),
        setuser(clear)

      )}>
        <div className='form-group'>
          <label>Name:</label>
          <input type="text" name='name' value={user.name} onChange={takedata} className='form-control'/>
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input type="email" name='email' value={user.email} onChange={takedata} className='form-control'/>
        </div>

        <div className='form-group'>
          <label>Phone:</label>
          <input type="phone" name='phone' value={user.phone} onChange={takedata} className='form-control'/>
        </div>
        <button className='btn btn-primary'>Submit Data</button>
      </form>
      
    </div>
  )
}

export default Adddata
