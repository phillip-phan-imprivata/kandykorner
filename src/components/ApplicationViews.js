import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { CustomerCandyProvider } from "./customerCandy/CustomerCandyProvider"
import { OrderList } from "./orders/OrderList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"

export const ApplicationViews = () => {
  return (
    <>
      <CustomerCandyProvider>
      <ProductTypeProvider>
      <ProductProvider>
        <Route exact path="/order">
            <OrderList />
        </Route>
      </ProductProvider>
      </ProductTypeProvider>
      </CustomerCandyProvider>

      <LocationProvider>
        <Route exact path="/locations">
            <LocationList />
        </Route>
      </LocationProvider>

      <CustomerCandyProvider>
      <ProductProvider>
      <ProductTypeProvider>
        <Route exact path="/products">
          <ProductList />
        </Route>
      </ProductTypeProvider>
      </ProductProvider>
      </CustomerCandyProvider>
      
      <EmployeeProvider>
      <LocationProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>

        <Route exact path="/employees/create">
          <EmployeeForm />
        </Route>
      </LocationProvider>
      </EmployeeProvider>

      <CustomerProvider>
      <CustomerCandyProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerCandyProvider>
      </CustomerProvider>
    </>
  )
}