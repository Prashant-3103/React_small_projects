import React, { useCallback, useState } from 'react'


import Question from './Question'
import QUESTIONS from '../questions.js'
import Summery from './Summery.jsx'

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
  return <Summery userAnswers={userAnswers}/>
}


  return (
<div id='quiz'>
<Question key={activeQuestionIndex} index={activeQuestionIndex} onSelectAnswer={handleSelectAnswer}  onSkipAnswer={handleSkipAnswer} />
</div>
  )
}

export default Quiz
