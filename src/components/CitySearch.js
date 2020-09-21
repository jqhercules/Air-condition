import React, { useState, useEffect, useRef, useCallback} from 'react';
import CityCard from './CityCard';
import CityStyles from './styles/CityStyles';

// const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.openaq.org/v1/locations?country=GB';
const API_URL = 'https://api.openaq.org/v1/locations?country=GB';

function CitySearch() {

  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const [hasError, setHasError] = useState(false);

  const searchRef = useRef(null);

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

  // Get cities in UK
  async function loadCities() {

    const response = await fetch(API_URL);
    const data = await  response.json();

    if(data.results.length > 0) {
      setCities(data.results);
    } else {
      setHasError(true);
    }

  }

  const handleClick = (suggest) => {
    // Check if item already added
    const currentItemExists = selectedCities.some(item => item.id === suggest.id);
    if(currentItemExists) return;
    setSelectedCities(selectedCities => [...selectedCities, suggest]);

    searchRef.current.value = suggest.locations;
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

    // Could be imporved :/
    if(!cities.length) {
      loadCities();
    }

    // Stop fnc from constantly firing
    const timeout = setTimeout(() => {
      handleSearch();
    }, 250);

    // Housework
    return() => clearTimeout(timeout);
  }, [handleSearch, cities]);

  //
  useEffect(() => {
    window.addEventListener('click', handleBlur);

    return () => {
      window.removeEventListener('click', handleBlur);
    };
  }, []);

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

        <ul className="City-search__suggestions" onBlur={handleBlur}>
          {suggessionList}
        </ul>
      </div>
      {hasError ? <div className="City-search__error">Something went wrong</div> : (
        <section className="City-search__cities">
          { selectedCities.map((city) =>
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
