import './App.css';
import data from './apies';
import Header from './components/Header';
import MyCart from './components/MyCart';
import Products from './components/Products';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  const {products}=data;
  const [cart,setcart]=useState([]);

  const add=(Products)=>{
    const data=cart.find((x)=>x.id===Products.id)
    if(data){
      setcart(
        cart.map((x) => x.id===Products.id ?  {...data,qty: data.qty+1}:x) 
      );
   
    }
    else{ 
      setcart([...cart,{...Products,qty:1}]);
    }
  }

  const Remove=(Products)=>{
    const data=cart.find((b)=>b.id===Products.id)
    if(data.qty===1){
      setcart(cart.filter((c)=>c.id !== Products.id));
    }
    else{
      setcart(
        cart.map((d)=>d.id===Products.id? {...data,qty: data.qty-1}:d)
      );
  }
}

  return (
    
    <div>

 <Router>

 <Header  cartitems ={cart.length}/>
   <Routes>
  <Route path='/cart' element={<MyCart  cart={cart} add={add} Remove={Remove} />}></Route>
  <Route path='/' element={<Products product={products} add={add} /> } />
  <Route path='/back' element={<Products product={products} add={add} />} />

  <Route path='/back' element={<Products product={products} add={add} />}></Route>
  

   </Routes>

  </Router>
    </div>
  );
}

export default App;
