import React, { useState } from 'react'
import { useHistory} from "react-router-dom";
import {connect } from 'react-redux'
import { showPost, deletePost } from '../../actions/posts'
import { showUser } from '../../actions/users'

function MyPost(props) {
  const [ like, setLike] = useState('♡')
  let history = useHistory()

  function handleOnComments() {
    props.showPost(props.id)
    history.push(`/${props.user.username}/posts/${props.id}`)
  }

  function handleOnDelete() {
    // debugger
    props.deletePost(props.id)
    history.push("/home")
  }
 
 

  console.log(props)
  return(
    <div className='post'>
      {<br></br>}
      <div  style={{ background: 'DarkSlateGrey', color: 'white', fontSize: '16px', border: '2px solid white', padding: '4px 25px',  height: '100px', width: '500px',textAlign: 'center'}}>
      {props.content}{<br></br>}</div>
      {<img src={props.image }style={{ background: 'DarkSlateGrey', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} width="400" alt="" onDoubleClick={ e => setLike('❤️')}/>}{<br></br>}
     <div className='post-button'>  
  <button style={{ background: 'Darkseagreen', color: 'white', fontSize: '16px', border: '2px solid white', padding: '4px 25px'}}onClick={ e => setLike('❤️')}>{like} </button>  
      <button style={{ background: 'DarkSeagreen', color: 'white', fontSize: '16px', border: '2px solid white', padding: '4px 25px'}} onClick={handleOnComments}>💬</button>
      {props.loading ? "Loading" : <button style={{ background: 'DarkSlateGrey', color: 'white', fontSize: '16px',border: '2px solid white', padding: '4px 45px'}}onClick={handleOnDelete}>Delete</button>}{<br></br>} 
      {<br></br>}
      {<br></br>}</div>
    </div>)
}



export default connect(null, {showPost, deletePost, showUser})(MyPost)