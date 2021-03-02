export const OrderCard = (props) => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.price.toFixed(2)}</td>
  </tr>
)