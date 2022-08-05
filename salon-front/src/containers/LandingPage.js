import React, { useState } from 'react'

import { connect } from 'react-redux'
import { getUser } from '../actions/users'
import { getComments } from '../actions/comments'
import {useHistory} from "react-router-dom";
function LandingPage(props) {

  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  function handleOnSubmit(event) {
    event.preventDefault()
    if ( !username || !password) {
      history.push("/")
    } else {
    let user = new FormData();
    user.append("username", username)
    user.append("password", password)
    props.getUser(user)
    history.push("/feed");
    props.getComments()
    }
  }

  function signUpForm() {
    history.push("/signup")
  }
  document.title = "Welcome"
  return(<>
          <h1>Tell Your Stylist</h1>{<br></br>}
          
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>User name: </label>
            <input type="text" name="username" onChange={ e => setUsername(e.target.value)}/><br></br>
          </div> 
          <div className="form-group">
            <label>password:</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/><br></br>
          </div>
          <div className='login-but'>
            <input style={{ background: 'DarkSlateGrey', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}}type="submit" value="Log In" className="btn btn-primary" />{<br></br>}
            </div>
        </form>  {<br></br>} 
<div className='signup-but'>
          <button style={{ background: 'DarkSlateGrey', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} className="btn btn-primary" onClick={signUpForm}>Sign Up</button>
          </div>
    </>
  )
}

export default connect(null, { getUser, getComments })(LandingPage)