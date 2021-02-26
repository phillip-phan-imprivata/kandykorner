export const ProductCard = (props) => (
  <div className="product">
    <h3 className="product__name">{props.product.name}</h3>
    <div className="product__price">Price: ${props.product.price.toFixed(2)}</div>
    <div className="product__type">Type: {props.type.type}</div>
  </div>
)