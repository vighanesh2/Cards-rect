import React from 'react'
import Homescreen from './Homescreen'
import { Routes, Route } from 'react-router-dom';
import Christmas from './Christmas.js'
import Letter from './Letter.js'
import BirthdayCards from './BirthdayCards.js';
import Options from './Options.js';
import Festival from './Festival.js';
const App = () => {
  return (
    <div>
      <Routes>

<Route path="/" element={<Homescreen />} />
<Route path="/letter" element={<Letter/>} />
<Route path="/christmas" element={<Christmas/>} />
<Route path="/birthday" element={<BirthdayCards/>} />
<Route path="/options" element={<Options/>} />
<Route path="/festivals" element={<Festival/>} />

</Routes>
    </div>
  )
}

export default App
