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

  let matchingProducts = customerCandy.filter(cc => cc.customerId === parseInt(localStorage.kandy_customer))
  matchingProducts = matchingProducts.map(cc => {
    return products.find(product => product.id === cc.productId)
  })
  
  const handleMatchingProducts = (products) => {
    const productQuantities = []
    let id = 1

    products.map(product => {
      if (productQuantities.find(pq => pq.name === product.name) === undefined){
        const newProduct = {
          name: product.name,
          quantity: 1,
          price: product.price ,
          id: id
        }
        productQuantities.push(newProduct)
        id++
      } else {
        const pqIndex = productQuantities.indexOf(productQuantities.find(pq => pq.name === product.name))

        productQuantities[pqIndex].quantity = productQuantities[pqIndex].quantity + 1
      }
    })

    return productQuantities
  }
  
  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price/Unit</th>
          </tr>
        </thead>
        <tbody>
      {
        handleMatchingProducts(matchingProducts).map(product => {
          return <OrderCard key={product.id} product={product} />
        })
      }
        </tbody>
      </table>
    </div>
  )
}