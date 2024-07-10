import React from 'react'
import './Option.css'
import option1 from './assets/birthday-cake.png';
import option2 from './assets/christmas-tree.png';
import option3 from './assets/cover-letter.png';
import option4 from './assets/happy-new-year.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Options = () => {
  return (
    <div className='content1'>
    <Navbar/>
       <div className='content2'>
              <h1 className='text2'>What kind of card do you wish to make?</h1>
              <div className='options'>
              <Link to="/birthday"> 
                <div className='option1'>
                  <img className='icons' src={option1} alt="Birthday Cards" />
                  <h2>Birthday Cards</h2>
                </div>
                </Link>
                <Link to="/christmas"> 
                <div className='option2'>
                  <img className='icons' src={option2} alt="Christmas Cards" />
                  <h2>Christmas Cards</h2>
                </div>
                </Link>
                <Link to="/letter"> 
                <div className='option2'>
                  <img className='icons' src={option3} alt="Letter Cards" />
                  <h2>Letter Cards</h2>
                </div>
                </Link>
                <Link to="/festivals"> 
                <div className='option2'>
                  <img className='icons' src={option4} alt="Festival Cards" />
                  <h2>Festival Cards</h2>
                </div>
                </Link>
              </div>
            </div>
    </div>
  )
}

export default Options
