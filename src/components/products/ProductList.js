import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { ProductTypeContext } from "./ProductTypeProvider"

export const ProductList = () => {
  const {products, getProducts} = useContext(ProductContext)
  const {productTypes, getProductTypes} = useContext(ProductTypeContext)

  useEffect(() => {
    getProductTypes()
    getProducts()
  }, [])

  return (
    <div className="products">
      {
        products.map(product => {
          const matchingType = productTypes.find(pt => pt.id === product.typeId)
          return <ProductCard key={product.id} product={product} type={matchingType}/>
        })
      }
    </div>
  )
}