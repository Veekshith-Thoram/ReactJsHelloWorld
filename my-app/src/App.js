//import logo from './logo.svg';
import './App.css';
import {Welcome} from "./components/Welcome";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Veekshith"/>
      <Greet name="Pawan Kalyan" />

      <Welcome />
    </div>
  );
}

export default App;
