import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <div id='board'>
        <div className='opponent'>
          <div className='pseudo'>Opponent</div>
          <div className='areaOpponent'>
            <div className='mana'>/10</div>
          </div>
        </div>
        <div className='player'>
          <div className='pseudo'>Player</div>
          <div className='areaPlayer'>
            <div className='mana'>/10</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
