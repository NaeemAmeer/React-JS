import React, { useState } from 'react'
import Adddata from './Components/Adddata'
import Alldata from './Components/Alldata'

function App() {

  const apies=[
  
  ]

  const[api,setapi]=useState(apies)
// for adding the data 
  const newdata=(person)=>{
    person.id=api.length+1;
    setapi([...api,person])

  }

  //for deleting the data 
  const delet=(id)=>{
    setapi(api.filter((any)=>any.id!==id))
  }

  return (
  <div className='container-fluid'>
    <div className='row'>
    <div className='container-fluid col-6'>
      
      <Adddata allnew={newdata}/>
      
    </div>

    <div className='container-fluid col-6'>
    <Alldata alluser={api} del={delet} />
    </div>

    </div>

  </div>
  )
}

export default App

