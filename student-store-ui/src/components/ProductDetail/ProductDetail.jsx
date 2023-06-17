import React from "react";
import { useParams } from "react-router-dom";



const ProductDetail = (props) => {
    return(

        <div className = "product-detail">
            {props.handleAddItemToCart}
            {props.handleRemoveItemtoCart}

        </div>

    );
};

export default ProductDetail;