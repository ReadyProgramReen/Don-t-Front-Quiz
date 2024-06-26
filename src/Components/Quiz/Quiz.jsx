import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/Assets/data';

const Quiz = () => {

    let [index,setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index])

    const checkAns = (e,ans)=>{
            return question.ans = ans ? e.target.classList.add('correct'):
            e.target.classList.add('incorrect')
    }

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index+1}. {question.question}</h2>

        <ul>
            <li onclick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li onclick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li onclick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li onclick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button>Next</button>

        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz