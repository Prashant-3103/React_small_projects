import { useState } from "react";

export default function Login() {

  const [enterdValues, setEnteredValues] = useState({
    email:" ",
    password: ''
  })

const [didEdit, setDidEdit] = useState({
email: false,
password: false
})

  const emailIsInValid =didEdit.email && !enterdValues.email.includes('@')

function handleSubmit(e) {
  e.preventDefault();
console.log(enterdValues);
}

function handleInputChange(identifier,value) {
setEnteredValues(prevValues=>({
  ...prevValues,
  [identifier]: value
}))
setDidEdit(prevEdit=>({
    ...prevEdit,
    [identifier]: false
}))
}

function handleInputBlur(identifier)
{
setDidEdit(prevEdit=>({
    ...prevEdit,
    [identifier]: true
}))
}


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={()=>handleInputBlur('email')} onChange={(e)=>handleInputChange('email', e.target.value)} value={enterdValues.email} />
          <div className="control-error">{emailIsInValid && <p>Please enter valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(e)=>handleInputChange('password', e.target.value)} value={enterdValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
