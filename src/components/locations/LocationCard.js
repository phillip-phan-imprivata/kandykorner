export const LocationCard = (props) => (
    <div className="location">
      <h3 className="location__address">{props.location.address}</h3>
      <div className="location__sqft">Area: {props.location.squareFootage} sq ft</div>
      <div className="location__handicap">Handicap Access: {props.location.handicapAccess.toString()}</div>
    </div>
  )