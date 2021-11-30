import logo from './10d@2x.png';
import './App.css';

import WeatherCondition from './WeatherCondition'

function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Lab Test 2</h1>
      <WeatherCondition/>
    </div>
  );
}

export default App;
