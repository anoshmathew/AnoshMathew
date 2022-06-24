import './App.css';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SocialMedia/>
      <AnimatedRoutes/>
    </div>
  );
}

export default App;
