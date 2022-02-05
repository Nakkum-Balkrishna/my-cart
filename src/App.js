import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import productItem from './Components/ProductItem';
import React, { useState } from 'react';
import AddItem from './Components/AddItem';


function App() {
  const ProductArr = [
    {
      price : 10,
      name : "IPhone 12",
      quantity : 0
    },
    {
      price : 20,
      name : "Redmi Note 5",
      quantity : 0
    },
    {
      price : 30,
      name : "Realme 12 pro max",
      quantity : 0
    }
  ];

  let [productList,setProductList] = useState(ProductArr);
  let [totalAmout,setTotalAmout] = useState(0);

  const incrementQuantity = (index) =>{
    let newProductList = [...productList];

    let newTotalAmout = totalAmout;

    newProductList[index].quantity++;

    newTotalAmout += newProductList[index].price;

    setProductList(newProductList);
    setTotalAmout(newTotalAmout);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmout = totalAmout;
    console.log(newProductList);
    if(newProductList[index].quantity>0)
    {
      newProductList[index].quantity--;
      newTotalAmout -= newProductList[index].price;
    }
    else{
      newProductList[index].quantity=0;
    }
    
    setProductList(newProductList);
    setTotalAmout(newTotalAmout);
  }

  const resetFun = () =>{
    let newProductList = [...productList];
    let newTotalAmout = totalAmout;
    newTotalAmout = 0;
    

    newProductList.map((item,pos)=>{
      item.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmout(newTotalAmout);
  }

  const removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmout = totalAmout;
    newTotalAmout -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmout(newTotalAmout);
  }

  const addItem = (name,price) =>{
    let newProductList = [...productList];
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    });
    setProductList(newProductList);
  }



  return (
    <div className="App">
     <Navbar />
     <AddItem addItem={addItem}/>
     <div className='mt-5'>
      <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
     </div>
     <Footer totalAmout={totalAmout} resetFun={resetFun}/>
    </div>
  );
}

export default App;
