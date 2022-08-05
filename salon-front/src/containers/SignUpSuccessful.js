import React from 'react'
import { Link } from 'react-router-dom'

function SignUpSuccessful(){
  return(
    <div>
      <h3>Your Sign Up was successful, please <Link style={{color: 'darkseagreen'}}to="/" >Log in</Link></h3>
    </div>
  )
}

export default SignUpSuccessful;