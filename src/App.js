import './App.css';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import SocialMedia from './components/SocialMedia';
import {useState} from 'react';
function App() {
  const [navSelection, setnavSelection] = useState("Test")
  return (
    <div className="App">
      <Navbar navSelection={navSelection} setnavSelection={setnavSelection}/>
      <SocialMedia/>
      <AnimatedRoutes navSelection={navSelection} setnavSelection={setnavSelection}/>
    </div>
  );
}

export default App;
