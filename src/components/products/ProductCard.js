import React, { useContext } from "react"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"

export const ProductCard = (props) => {
  const {addCustomerCandy} = useContext(CustomerCandyContext)

  const handleAddOrder = (event) => {
    const newOrder = {
      productId: 0,
      customerId: 0
    }

    const [prefix, id] = event.target.id.split("--")

    newOrder.productId = parseInt(id)
    newOrder.customerId = parseInt(localStorage.kandy_customer)

    addCustomerCandy(newOrder)
  }

  return (
    <div className="product">
      <h3 className="product__name">{props.product.name}</h3>
      <div className="product__price">Price: ${props.product.price.toFixed(2)}</div>
      <div className="product__type">Type: {props.type.type}</div>
      <button className="btn" onClick={handleAddOrder} id={"btn--" + props.product.id}>Add to Order</button>
    </div>
  )
}