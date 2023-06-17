const ProductView = (props) => {
    return(
        <div className= "product-view">

            <h1 className = "product-id"> Product # {props.productId}</h1>

        </div>
    );
}

export default ProductView;