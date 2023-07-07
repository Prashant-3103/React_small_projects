
import useInput from "./Hooks/use-input";



const SimpleInput = (props) => {


const {
  value: enteredName,
  isValid: enteredNameIsValidState,
  hasError: nameInputHasError,
  reset: resetNamInput,
  valueChangeHandler: nameChangedHandler,
  inputBlurHandler: nameBlurHandler}
  = useInput(value=> value.trim()!=='' )

const{
  value: enteredEmail,
  isValid: enteredEmailIsValidState,
  hasError: emailInputHasError,
  reset: resetEmailInput,
  valueChangeHandler: emailChangedHandler,
  inputBlurHandler: emailBlurHandler


} = useInput(value=> value.includes('@'))






let formIaValid = false


if(enteredNameIsValidState && enteredEmailIsValidState){
formIaValid=true
}


const formSubmitHandler = event=>{
  event.preventDefault();


if(!enteredNameIsValidState){
  return
}

resetNamInput()
resetEmailInput()
}


const nameInputClasses = nameInputHasError? 'form-control invalid': 'form-control'
const emailInputClasses = emailInputHasError? 'form-control invalid': 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' onChange={nameChangedHandler} value={enteredName} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">name must not be empty</p>}

      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-MAIL</label>
        <input  type='email' id='email' onChange={emailChangedHandler} value={enteredEmail} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Please enter a valid text</p>}

      </div>
      <div className="form-actions">
        <button disabled={!formIaValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
