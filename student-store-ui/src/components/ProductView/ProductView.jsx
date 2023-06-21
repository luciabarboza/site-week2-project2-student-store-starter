import react from "react"
import * as React from "react"
import {Link} from "react-router-dom"
import "./ProductView.css"

const ProductView = ({product, productid}) => {

    const {name, image, description, price} = product




    return(
        <div className= "product-view">
            <Link to={`/products/${productid}`}>
            
            <img id="product-image-grid" src={image} alt={name} />
            

            </Link>
            <h1>{name}</h1>
             <p>{price}</p>
             <p> {description}</p>
      {/* Other product card content */}
        </div>

            // <ProductCard currProduct = {product}>

            // <h1 className = "product-id"> Product # {props.productId}</h1>

            // </ProductCard> 

        // </div>
    );
}

export default ProductView;