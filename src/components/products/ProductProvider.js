import React, { createContext, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return fetch("http://localhost:8088/products")
      .then(res => res.json())
      .then(setProducts)
  }

  return (
    <ProductContext.Provider value={{
      products, getProducts
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}