import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () => {
  const {addEmployee} = useContext(EmployeeContext)
  const {locations, getLocations} = useContext(LocationContext)

  const history = useHistory()

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0,
    manager: false,
    fullTime: false,
    hourlyRate: 0
  })

  useEffect(() => {
    getLocations()
  }, [])

  const handleControlledInputChange = (event) => {
    const newEmployee = {...employee}

    let setValue = event.target.value

    if (event.target.id.includes("Id")){
      setValue = parseInt(setValue)
    }

    if (event.target.type === "radio"){
      newEmployee[event.target.className] = (setValue === "true")
    } else {
      newEmployee[event.target.id] = setValue
    }

    setEmployee(newEmployee)
  }

  const handleSaveEmployee = (event) => {
    event.preventDefault()

    if (employee.locationId === 0){
      window.alert("You must choose a location!")
    } else {
      addEmployee(employee)
      .then(history.push("/employees"))
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">Employee Form</h2>
      <fieldset className="form-group">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus placeholder="Name..."></input>
      </fieldset>
      <fieldset className="form-group">
        <select defaultValue={employee.location} id="locationId" name="locationId" onChange={handleControlledInputChange}>
          <option value="0">Choose a location...</option>
          {locations.map(location => (
            <option key={location.id} value={location.id}>
              {location.address}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="manager">Manager: </label>
        <input type="radio" name="manager" className="manager" value="true" onChange={handleControlledInputChange} />
        <label htmlFor="true">Yes</label>
        <input type="radio" name="manager" className="manager" value="false" onChange={handleControlledInputChange} />
        <label htmlFor="false">No</label>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="fullTime">Full-Time: </label>
        <input type="radio" name="fullTime" className="fullTime" value="true" onChange={handleControlledInputChange} />
        <label htmlFor="true">Yes</label>
        <input type="radio" name="fullTime" className="fullTime" value="false" onChange={handleControlledInputChange} />
        <label htmlFor="false">No</label>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="hourlyRate">Hourly Rate: </label>
        <input type="number" id="hourlyRate" onChange={handleControlledInputChange} required></input>
      </fieldset>
      <button className="btn" onClick={handleSaveEmployee}>
        Save Employee
      </button>
    </form>
  )
}