import React, { useContext, useEffect } from "react"
import { CustomerCard } from "./CustomerCard"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"

export const CustomerList = () => {
  const {customers, getCustomers} = useContext(CustomerContext)
  const {customerCandy, getCustomerCandy} = useContext(CustomerCandyContext)

  useEffect(() => {
    getCustomerCandy()
    .then(getCustomers)
  }, [])

  return (
    <div className="customers">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Candies Bought</th>
          </tr>
        </thead>
        <tbody>
      {
      customers.map(customer => {
        const matchingCustomerCandy = customerCandy.filter(cc => cc.customerId === customer.id)

        return <CustomerCard key={customer.id} customer={customer} customerCandies={matchingCustomerCandy} />
      })
      }
        </tbody>
      </table>
    </div>
  )
}
