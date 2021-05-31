//import logo from './logo.svg';
import './App.css';
import React from "react";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";
class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      <Message />
      <Counter />
      
      {/* <Greet name="Veekshith"><p>Hello This is a test paragraph</p></Greet>
      <Greet name="Pawan Kalyan">He is the power star to the world!!</Greet>

      <Welcome name="Chiranjeevi"><p>He is the megastar!!</p></Welcome>
      <Welcome name="Venkatesh"/> */}
    </div>
  );
}
}

export default App;
