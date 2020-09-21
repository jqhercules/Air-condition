import React from 'react';
import Summary from './components/Summary';
import CitySearch from './components/CitySearch';

import { GlobalStyles } from './components/styles/App';

function App() {
  return (
    <div className="App">
      <GlobalStyles primary={true}>
        <Summary />
        <CitySearch />
      </GlobalStyles>
    </div>
  );
}

export default App;
