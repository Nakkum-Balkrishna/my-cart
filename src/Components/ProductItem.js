import react from 'react';

function productItem(props){
    
    return(
        <div className='row mt-3'>
            <div className='col-5'>
              <h3>{props.productItem.name}<span className="badge bg-secondary">${props.productItem.price}</span></h3>
            </div>
            <div className='col-3'>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={()=>{props.decrementQuantity(props.index)}}>-</button>
                    <button type="button" className="btn btn-warning">{props.productItem.quantity}</button>
                    <button type="button" className="btn btn-success" onClick={()=>{props.incrementQuantity(props.index)}}>+</button>
                </div>
            </div>

            <div className='col-2'>
                {props.productItem.price*props.productItem.quantity}

            </div>
             <button className='col-2 btn btn-danger' onClick={()=>{
                 props.removeItem(props.index)
             }}>Remove Item</button>
            
        </div>
    )
}

export default productItem;