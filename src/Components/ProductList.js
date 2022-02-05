import react from "react";
import ProductItem from './ProductItem';

function ProductList(props){
    return (
        props.productList.length > 0 ? 
          props.productList.map((productItem,pos) => {
               return <ProductItem productItem={productItem} key={pos}  incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} index={pos}/>
    })
    :
    <h1 className="text-danger">Cart is Empty</h1>
)}

export default ProductList;