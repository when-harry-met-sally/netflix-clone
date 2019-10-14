import React from 'react';
import Panel from "./components/Panel";
import Panel2 from "./components/Panel2";
import './App.css';
import Movies from './components/Movies';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
    <Navigation/>
    <Movies/>
    </div>
  );
}

export default App;
