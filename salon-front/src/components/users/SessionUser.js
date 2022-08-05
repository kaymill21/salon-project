import React, {Component} from 'react'
import { connect } from 'react-redux'

import MyPost from '../posts/MyPosts'
import { Link } from "react-router-dom";
class SessionUser extends Component {

  render(){
      // console.log(this.props.user)
    
    if (!this.props.user  || this.props.user === undefined){
      return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
      } else if (this.props.user) {
        
        const {username, image} = this.props.user
        const profilePic = <img style={{ background: 'DarkSeaGreen', color: 'white', fontSize: '16px', border: '2px solid white', padding: '5px 15px'}} src={image} width="300" alt=""/> 
        document.title = username
        console.log(this.props)
        return(
        <div className="session-user"> 
          {<br></br>}
          {this.props.loading ? <h3>loading</h3> :profilePic}{<br></br>}
          <div className='user'>
          {this.props.loading ? <h3>loading</h3> : username}{<br></br>}
          {<hr></hr>}</div>
          {this.props.postsLoading ? <h3>loading</h3> :
          <MyPost posts={this.props.posts.filter( p => p.user.id === this.props.user.id )} user={this.props.user} /> }
        </div>)
    }
  }
}

const mapStateToProps = state => {
  console.log(state.posts.posts)
  
  return {
    user: state.users.currentUser,
    loading: state.users.loading,
    posts: state.posts.posts,
    postsLoading: state.posts.loading
  }
}

export default connect(mapStateToProps)(SessionUser)