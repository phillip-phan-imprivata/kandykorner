import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { ProductTypeContext } from "./ProductTypeProvider"

export const ProductList = () => {
  const {products, getProducts, searchTerms} = useContext(ProductContext)
  const {productTypes, getProductTypes} = useContext(ProductTypeContext)

  const [filteredProducts, setFiltered] = useState([])

  useEffect(() => {
    getProductTypes()
    .then(getProducts)
  }, [])

  useEffect(() => {
    if (searchTerms !== ""){
      const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      setFiltered(products)
    }
  }, [searchTerms, products])

  return (
    <div className="products">
      {
        filteredProducts.map(product => {
          const matchingType = productTypes.find(pt => pt.id === product.typeId)
          return <ProductCard key={product.id} product={product} type={matchingType}/>
        })
      }
    </div>
  )
}