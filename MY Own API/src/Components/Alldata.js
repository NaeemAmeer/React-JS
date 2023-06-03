import React from 'react'

function Alldata(props) {
  return (
    <div>
        <h3 className='display-4 text-center'>All Users Data</h3>
        <table className='table table-bordered'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
          
          </tr>



        {
          props.alluser.length > 0 ?(
          props.alluser.map((used)=>(

         <tr>
          <td>{used.id}</td>
          <td>{used.name}</td>
          <td>{used.email}</td>
          <td>{used.phone}</td>
          <td><button onClick={()=>props.del(used.id)} className='btn btn-danger'>Delete</button></td>
         </tr>
          ))
          ):
          (
            <tr>
              <td colSpan={5}>No Users Found</td>
            </tr>
          )
          
}
      

        </table>
      
    </div>
  )
}

export default Alldata
