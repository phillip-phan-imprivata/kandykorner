import React, { useContext, useEffect } from "react"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"
import { ProductContext } from "../products/ProductProvider"
import { OrderCard } from "./OrderCard"
import "./Order.css"

export const OrderList = () => {
  const {customerCandy, getCustomerCandy} = useContext(CustomerCandyContext)
  const {products, getProducts} = useContext(ProductContext)

  useEffect(() => {
    getProducts()
    .then(getCustomerCandy)
  }, [])

  const matchingProducts = customerCandy.filter(cc => cc.customerId === parseInt(localStorage.kandy_customer))
  
  const findProduct = (cc) => {
    let matchingProduct = products.find(product => product.id === cc.productId)
    return matchingProduct
  }

  let productQuantities = {}
  
  return (
    <div className="orders">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price/Unit</th>
        </tr>
      {
        matchingProducts.map(cc => {
          const product = findProduct(cc)
          return <OrderCard key={cc.id} product={product} />
        })
      }
      </table>
    </div>
  )
}