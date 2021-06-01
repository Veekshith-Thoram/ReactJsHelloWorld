//import logo from './logo.svg';
import './App.css';
import React from "react";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionCLick from "./components/FunctionCLick";
import ClassClick from './components/ClassClick';
import EventBinder from './components/EventBinder';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      <Inline />
      {/* <Stylesheet primary={false}/> */}
      {/* <ConditionalRendering /> */}
      {/* <NameList /> */}
      {/* <Message />
      <Counter />
      <FunctionCLick />
      <ClassClick />
       */}
      {/* <ChildComponent /> */}
      {/* <ParentComponent /> */}
       {/* <EventBinder /> */}
      {/* <Greet name="Veekshith"><p>Hello This is a test paragraph</p></Greet>
      <Greet name="Pawan Kalyan">He is the power star to the world!!</Greet>

      <Welcome name="Chiranjeevi"><p>He is the megastar!!</p></Welcome>
      <Welcome name="Venkatesh"/> */}
    </div>
  );
}
}

export default App;
