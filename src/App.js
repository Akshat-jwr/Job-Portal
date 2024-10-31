import './App.css';
import Navbar from "./components/Navbar.js";
import Homepage from './components/Homepage';
import Jobs from './components/Jobs';

function App() {
  return (
    <>
    <Navbar/>
    <div id='Homepage'>
    <Homepage/></div>
    <div id='jobs'>
    <Jobs/></div>
    </>
  );
}

export default App;
