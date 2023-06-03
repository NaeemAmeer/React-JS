import React,{useState} from 'react'

function Testing() {
    const[data,setdata]=useState(0);
  return (
    <div>
      <p>Please click me {data} times </p>
      <button onClick={()=>setdata(data+1)}>click me </button>
    </div>
  )
}

export default Testing

