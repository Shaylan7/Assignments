import './App.css';
import calendarImg from './calendar.png';
import Footer from './components/footer.jsx';
import Users from './components/Users.jsx';
import Events from './components/Events.jsx'

function App() {
  return (
    
    <div className="App">
    <header>
      <img src={calendarImg} alt="Calendar Star Logo" />
      <h1>Eventonica</h1>
    </header>
    <main>
      <div className="user-and-events">
       <Users /> 
      <Events /> 
      </div>
    </main>
    <Footer /> 
    
  </div>
  );
}

export default App;
