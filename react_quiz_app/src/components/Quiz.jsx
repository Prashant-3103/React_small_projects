import React, { useState } from 'react'

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length
  return (
    <p>Currently active question</p>
  )
}

export default Quiz
