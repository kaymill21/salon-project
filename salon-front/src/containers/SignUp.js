import React, {  useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/users'
import {useHistory} from "react-router-dom";
function SignUp(props) {
  
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [image, setImage] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault()

    if (!username || !email  || !password || !phoneNum || !image) {
      history.push("/signup")
    } else {
    let user = new FormData();
    user.append("username", username)
    user.append("email", email)
    user.append("phoneNum", phoneNum)
    user.append("password", password)
    user.append("image", image)
    props.createUser(user)
    // console.log(user)
    // debugger
    history.push("/signup/successful");
    }
  }

  function logInForm() {
    history.push("/")
  }

  document.title = "Sign Up"
  return(
      <div>
        <h1>Sign Up</h1>{<br></br>}
        <h3>All fields required</h3>
        <form onSubmit={handleOnSubmit}>
            <label>Username: </label>
            <input style={{ background: 'rgba(156, 192, 156, 0.5)', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} type="text" name="username" onChange={e => setUsername(e.target.value)}/><br></br>
            <label>Email: </label>
            <input style={{ background: 'rgba(156, 192, 156, 0.5)', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} type="text" name="email" onChange={e => setEmail(e.target.value)} /><br></br>
            <label>Number: </label>
            <input style={{ background: 'rgba(156, 192, 156, 0.5)', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} type="number"name="phoneNum" onChange={e => setPhoneNum(e.target.value)} /><br></br>
            <label>Image: </label>
            <input  style={{ background: 'rgba(156, 192, 156, 0.5)', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} type="file" onChange={e => setImage(e.target.files[0])} name="image" accept="image/png, image/jpeg"/><br></br>
            <label>password: </label>
            <input style={{ background: 'rgba(156, 192, 156, 0.5)', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}}  type="password" name="password" onChange={e => setPassword(e.target.value)} /><br></br>
            <div className='login-but-2'>
            <input style={{ background: 'DarkSlateGrey', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} className="btn btn-primary" type="submit" value="Sign Up"/>
          </div>
          </form>{<br></br>}
          <div className='signup-but-2'>
          <button style={{ background: 'DarkSlateGrey', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}}  className="btn btn-primary" onClick={logInForm}>Or Log In</button>
     </div>
      </div>
    )
}



export default connect(null, { createUser })(SignUp)