import './App.css';
import Forecast from "./Components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Rainboots or Sunnies?</h1>
      </header>
      <main>
          <Forecast />
      </main>
      <footer>
        Page created by Shaylan Hawthorne
      </footer>
    </div>
  );
}

export default App;
