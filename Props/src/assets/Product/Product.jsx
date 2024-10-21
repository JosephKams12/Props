import "./Product.css"
const Product = (props) =>{
    return(
    <div>
        <img src={props.imageUrl} alt="" />
        <h2> {props.productName}</h2>
        <h3>{props.price}</h3>
        <h4>{props.description}</h4>

       <p>i love you</p>

    </div>
    )
}
export default Product