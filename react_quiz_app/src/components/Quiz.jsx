import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions.js'
import quizComolete from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx'

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length

    const QuizIsComplete = activeQuestionIndex===QUESTIONS.length
    const handleSelectAnswer= useCallback(function handleSelectAnswer (selectedAnswer){
      setUserAnswers((prevUserAnswer)=>{
return[...prevUserAnswer, selectedAnswer]
      })
    },[])

    const handleSkipAnswer= useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);

if(QuizIsComplete)
{
  return <div id='summary'>
    <img src={quizComolete} alt="true" />
    <h2>Quiz completed!</h2>
  </div>
}

const shuffeledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
shuffeledAnswers.sort(()=>Math.random()-0.5);

  return (
<div id='quiz'>
<div id='question'>
  <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeOut={handleSkipAnswer}/>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id='answers'>
        {shuffeledAnswers.map((answer)=><li key={answer} className='answer'>
          <button onClick={()=> handleSelectAnswer(answer)}>{answer}</button>
        </li>)}
      </ul>
      </div>
</div>
  )
}

export default Quiz
