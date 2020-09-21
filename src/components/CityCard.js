import React from 'react'
import moment from 'moment';

function CityCard(props) {
  const {lastUpdated,
    city,
    location,
    country,
    countsByMeasurement,
    id,
    removeItem
  } = props;

  // Conver UTC time convert
  const converDateTime = (timestamp) => {
    return moment().fromNow(timestamp);
  }

  // List all Measurements levels
  const listLevels = (measurements) => {
    const totalLevel = measurements.length;

    return measurements.map((measure, idx) => {
      let comma = ', ';
      if(totalLevel - 1 === idx) comma = '';
      return ` ${measure.parameter}: ${measure.count.toLocaleString()}${comma}`
    })
  }

  const removeCity = () =>{
    removeItem(id)
  }

  return (
    <div className="City-search__city">
      <em className="City-search__lastupdated">
        Updated { converDateTime(lastUpdated) }
      </em>
      <h3 className="City-search__town">
        { location }
      </h3>
      <p className="City-search__country">in
        { city }, {country === 'GB' ? 'United Kingdom' : country }
      </p>
      {countsByMeasurement.length > 0 &&
        <strong className="City-search__info">Values:
          <span>{listLevels(countsByMeasurement)}</span>
        </strong>
       }
      <span className="City-search__close" onClick={removeCity} >
        <img src={require('../assets/img/ico-cross.svg')} alt="Icon Cross" />
      </span>
    </div>
  )
}

export default CityCard
