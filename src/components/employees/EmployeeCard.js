import React from "react"

export const EmployeeCard = (props) => {
  return (
    <div className="employee">
      <div className="employee__name">{props.employee.name}</div>
      <div className="employee__location">{props.location.address}</div>
      <div className="employee__manager">{props.employee.manager ? "Manager" : "Staff"}</div>
      <div className="employee__fullTime">{props.employee.fullTime ? "Full-time" : "Part-time"}</div>
      <div className="employee__rate">{parseInt(props.employee.hourlyRate).toFixed(2)}</div>
    </div>
  )
}