import React, { useState, useEffect, useRef, useCallback } from 'react';

import CityCard from './CityCard';
import CityStyles from './styles/CityStyles';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.openaq.org/v1/locations?country=GB';
// const API_URL = 'https://api.openaq.org/v1/locations?country=GB';

function CitySearch() {

  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [hasError, setHasError] = useState(false);

  const searchRef = useRef(null);

  // Strange side effect fix
  const handleSearch = useCallback(() => {

    // Get search value
    const { current } = searchRef;
    setSearchTerm(current.value);

    //Updated suggestion panel
    if(searchTerm !== '') {
      let matches = cities.filter(city=> city.city.toLowerCase().startsWith(searchTerm))
      setCityList(matches);
    } else {
      setCityList([]);
    }

  }, [cities, searchTerm]);

  const handleClick = (suggest) => {
    // Check if item already added
    const currentItemExists = selectedCities.some(item => item.id === suggest.id);
    searchRef.current.value = suggest.locations;
    if(currentItemExists) return;
    setSelectedCities(selectedCities => [suggest,...selectedCities]);
  }

  const handleRemove = (cityId) => {
    // Create a new excluding selected
    const updatedCities = selectedCities.filter(city => city.id !== cityId)
    setSelectedCities(updatedCities);
  }

  // Reset suggestion box
  const handleBlur = (evt) => {
    setCityList([])
  }

  useEffect(() => {

    // Stop fnc from constantly firing
    const timeout = setTimeout(() => {
      handleSearch();
    }, 250);

    // Housework
    return() => clearTimeout(timeout);
  }, [handleSearch, cities]);

  useEffect(() => {
    window.addEventListener('click', handleBlur);
    searchRef.current.focus();

    // Get cities
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setCities(data.results))
      .catch(error => setHasError(true))

    return () => {
      window.removeEventListener('click', handleBlur);
    };
  }, []);

  // Auto complete
  const suggessionList = cityList.map(suggestion =>
    <li
      className="City-search__suggest"
      key={suggestion.id}
      onClick={() =>
        handleClick(suggestion)}>
          {suggestion.location}
    </li>
  );

  return (
    <CityStyles>
      <div className="City-search__searchwrapper">
        <img className="icon" src={require('../assets/img/ico-magnifier.svg')} alt=""/>
        <input
          type="text"
          placeholder="Enter city name..."
          onChange={handleSearch}
          className="City-search__searchbox"
          ref={searchRef}
        />

        <ul className="City-search__suggestions">
          {suggessionList}
        </ul>
      </div>
      {hasError ? <div className="City-search__error">Something went wrong</div> : (
        <section className="City-search__cities">

          {selectedCities.map((city) =>
              <CityCard {...city}
              removeItem={handleRemove}
              key={ city.id }
              />
          )}

        </section>
      )}

    </CityStyles>
  )
};

export default CitySearch
