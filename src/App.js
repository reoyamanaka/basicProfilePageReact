import './App.css';
import Navbar from "./Navbar";
import WeatherBox from "./WeatherBox";



function App () {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my Website!</h1>
      <WeatherBox />
    </div>
  );
}

export default App;