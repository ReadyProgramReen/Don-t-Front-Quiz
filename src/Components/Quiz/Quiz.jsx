import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Which African country has the highest population?</h2>
        <hr />
        <ul>
            <li>Nigeria</li>
            <li>Ghana</li>
            <li>Sudan</li>
            <li>Eqypt</li>
        </ul>
        <button>Next</button>

        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz