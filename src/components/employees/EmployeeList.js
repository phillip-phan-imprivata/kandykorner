import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export const EmployeeList = () => {
  const {employees, getEmployees} = useContext(EmployeeContext)
  const {locations, getLocations} = useContext(LocationContext)

  const history = useHistory()

  useEffect(() => {
    getLocations()
    .then(getEmployees)
  }, [])

  return (
    <>
    <h2 className="employees__title">Employees</h2>
    <button onClick={() => history.push("/employees/create")}>
      Add Employee
    </button>
    <section className="employees">
      {
        employees.map(employee => {
          const location = locations.find(l => l.id === employee.locationId)

          return <EmployeeCard key={employee.id} employee={employee} location={location} />
        })
      }
    </section>
    </>
  )
}