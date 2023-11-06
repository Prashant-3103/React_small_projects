import React, { useEffect, useState } from 'react'

const QuestionTimer = ({timeout, onTimeOut}) => {
const [remainingTime, setRemainingTime] = useState(timeout)

useEffect(()=>{
    console.log("setting timeout");
 const timer =    setTimeout(onTimeOut,timeout );
return ()=>{
    clearTimeout(timer)
}

},[onTimeOut,timeout])
useEffect(()=>{
    console.log("setting interval");
    const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime=> prevRemainingTime-100)
    }, 100);
    return ()=>{
        clearTimeout(interval)
    }
},[])

  return (
    <progress id='question-time' max={timeout} value={remainingTime}/>
  )
}

export default QuestionTimer
