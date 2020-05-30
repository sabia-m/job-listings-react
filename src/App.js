import React from 'react';
import './App.css';
import data from './data/data.json'
import JobCards from './JobCards'

function App() {
  return (
    <div className="App">
    <JobCards jobInfo={data}/>
      
    </div>
  );
}

export default App;
