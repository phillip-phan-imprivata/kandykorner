import React from "react"

export const CustomerCard = (props) => {
  return (
    <tr>
      <td>{props.customer.name}</td>
      <td>{props.customerCandies.length}</td>
    </tr>
  )
}