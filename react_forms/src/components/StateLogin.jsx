import { useState } from "react";

export default function Login() {

  const [enterdValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

function handleSubmit(e) {
  e.preventDefault();
console.log(enterdValues);
}

function handleInputChange(identifier,value) {
setEnteredValues(prevValues=>({
  ...prevValues,
  [identifier]: value
}))
}

function handlePasswordChange(e) {
setEnteredPassword(e.target.value)
}
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e)=>handleInputChange('email', e.target.value)} value={enterdValues.email} />
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
