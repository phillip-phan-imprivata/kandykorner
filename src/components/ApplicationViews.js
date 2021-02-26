import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/locations">
        <LocationProvider>
          <LocationList />
        </LocationProvider>
      </Route>

      <Route exact path="/products">
        <ProductProvider>
          <ProductTypeProvider>
            <ProductList />
          </ProductTypeProvider>
        </ProductProvider>
      </Route>
    </>
  )
}