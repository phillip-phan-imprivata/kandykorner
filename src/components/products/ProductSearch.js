import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"

export const ProductSearch = () => {
  const { setSearchTerms } = useContext(ProductContext)

  return (
    <>
      Product search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a product... " />
    </>
  )
}