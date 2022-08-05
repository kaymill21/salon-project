import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory, Link} from "react-router-dom";
import { createPost } from '../../actions/posts'
import { showUser } from '../../actions/users'

function PostInput(props) {
  let history = useHistory();  
  const [location, setLocation] = useState("");
  const [ image, setImage] = useState("");
  const [ content, setContent] = useState("");
  
  function handleOnSubmit(event) {
    event.preventDefault();
    let post = new FormData();
    post.append("location", location)
    post.append("image", image)
    post.append( "content", content)
    post.append("user_id", props.user.id)
    props.createPost(post)
    history.push("/home")
  }
  if(!props.user){
    return (<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
  }
  else {
    document.title = "New Post"
  return(
    <div className='yourwork'>
      <h1>Your Work</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Location</label>
        <input type="text" style={{ background: 'transparent', color: 'white', fontSize: '16px', border: '2px solid white', padding: '4px 25px'}}onChange={e => setLocation(e.target.value)} name="location"/><br></br>
        <label>Image:</label>
        <input type="file" onChange={e => setImage(e.target.files[0])}  name="image" accept="image/png, image/jpeg"/><br></br>
        <label>Content</label>
        <input type="text" style={{ background: 'transparent', color: 'white', fontSize: '16px', border: '2px solid white', padding: '4px 25px'}} onChange={e => setContent(e.target.value)} name="content"/><br></br>
         <div className='logout'> <input style={{ background: 'Darkseagreen', color: 'white', fontSize: '16px', border: '2px solid white', padding: '4px 25px'}}type="submit"/>
         </div>
      </form>
    </div>)
  }
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    user: state.users.currentUser
  }
}

export default connect(mapStateToProps, { createPost, showUser })(PostInput);