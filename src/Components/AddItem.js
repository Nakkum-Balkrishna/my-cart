import react,{Component} from "react";

class AddItem extends Component{
    constructor(props){
        super(props);
            this.state={
                productName : "",
                productPrice : 0
            }
    }
    render()
    {
        return(
            
                 <form className="row mb-5 mt-5 mx-3" onSubmit={(e)=>{
                     e.preventDefault();
                     this.props.addItem(this.state.productName,Number(this.state.productPrice))
                     }} >
                    <div className="mb-3 col-4 ">

                    <input type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="name" 
                    name="productName" 
                    placeholder="Enter Product Name"
                    onChange={(e)=>{
                        this.setState({productName:e.currentTarget.value})
                    }}
                    value={this.state.productName}
                    
                    />
                    </div>
                    <div className=" col-3 ">
                        
                    <input type="text" 
                    className="form-control" 
                    id="price" 
                    name="productPrice" 
                    placeholder="Enter Product Price"
                    onChange={(e)=>{
                        this.setState({productPrice : Number(e.currentTarget.value)})
                    }}
                    value={this.state.productPrice}

                    />
                    </div>
                    <button type="submit" className="col-3  btn btn-primary">Add Item</button>
                </form>
            
        )
    }
}

export default AddItem;