import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { Action,Science_Fiction } from './Components/Constants/Constant'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={Action} title="Action" />
        <RowPost  url={Science_Fiction} title="Science Fiction" small/>

    </div>
  );
}

export default App;