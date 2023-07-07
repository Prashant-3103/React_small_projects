import { useState } from "react"

const useInput = (validateValue)=>{


    const[enteredValue, setEnteredValue] = useState('')
    const[isTouched, setIsTouched] = useState(false)
    const valueIsValidState = validateValue(enteredValue)
    const hasError = !valueIsValidState && isTouched

    const valueChangeHandler = event=>{
        setEnteredValue(event.target.value)

      }


const inputBlurHandler = event =>{
   setIsTouched(true)

    }
const reset=()=>{
    setEnteredValue('')
    setIsTouched(false)
}
return{
    value: enteredValue,
    hasError, valueChangeHandler, inputBlurHandler, isValid: valueIsValidState, reset
}

}
export default useInput
