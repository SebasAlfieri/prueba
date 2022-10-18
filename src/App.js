import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Divisor from "./components/NavBar/Divisor"
import Header from "./components/Header/Header"
import AboutContainer from "./components/About/AboutContainer"
import Projects from './components/Projects/ProjectsContainer';


function App() {
  return (

    <div>
      <NavBar/>
      <Divisor/>
      <Header/>
      <AboutContainer/>
      <Projects/>
    </div>
  );
}

export default App;
