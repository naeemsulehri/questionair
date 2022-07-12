import logo from './logo.svg';
import './App.css';
import Questionnaire from './components/Questionnaire';
import {Result} from './components/Results';
import { useState } from 'react';

function App() {
  const [finalResult, setFinalResult]= useState(null);
  return (
    <div className="App">
     
      <Questionnaire setFinalResult={setFinalResult}></Questionnaire>
      <Result finalResult={finalResult}></Result>
      
       
    </div>
  );
}

export default App;
