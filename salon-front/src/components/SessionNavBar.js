import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
// import { myPosts } from ''
const link = {
  width: '130px',
   padding: '12px ',
   margin: '0 6px 6px',
   background: 'DarkSeaGreen',
   textDecoration: 'none',
   color: 'white',
   border: '12px',
backgroundImage: "https://www.bing.com/images/search?view=detailV2&ccid=CAHYS7GW&id=2753B257D24298655F9D7E0183116AE090EEA30A&thid=OIP.CAHYS7GW-ZE2Eggn4j3MUQHaE8&mediaurl=https%3a%2f%2fwww.stylist.co.uk%2fimages%2fapp%2fuploads%2f2019%2f06%2f05162748%2fhair-lounge-salon.jpg%3fw%3d1200%26h%3d1%26fit%3dmax%26auto%3dformat%252Ccompress&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0801d84bb196f99136120827e23dcc51%3frik%3dCqPukOBqEYMBfg%26pid%3dImgRaw%26r%3d0&exph=801&expw=1200&q=Salon&simid=608026125170981563&FORM=IRPRST&ck=AE48769E6F888ACA439FBB565D1A97E7&selectedIndex=0",
 }


const NavBar = (props) => {
  
  return(
    console.log(props.location.pathname),
    <div className="navbar" >
      <img src="https://www.bing.com/images/search?view=detailV2&ccid=CAHYS7GW&id=2753B257D24298655F9D7E0183116AE090EEA30A&thid=OIP.CAHYS7GW-ZE2Eggn4j3MUQHaE8&mediaurl=https%3a%2f%2fwww.stylist.co.uk%2fimages%2fapp%2fuploads%2f2019%2f06%2f05162748%2fhair-lounge-salon.jpg%3fw%3d1200%26h%3d1%26fit%3dmax%26auto%3dformat%252Ccompress&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0801d84bb196f99136120827e23dcc51%3frik%3dCqPukOBqEYMBfg%26pid%3dImgRaw%26r%3d0&exph=801&expw=1200&q=Salon&simid=608026125170981563&FORM=IRPRST&ck=AE48769E6F888ACA439FBB565D1A97E7&selectedIndex=0" alt=''></img>

    <NavLink to='/feed'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'DarkSeaGreen'
      }}><span role="img" >Hairstyles</span></NavLink> | 

      <NavLink to='/posts/new' style={link}
      activeStyle={{
        background: 'white',
        color: 'DarkSeaGreen'
      }}><span role="img">Add Hairstyle</span></NavLink> |

      <NavLink to='/home' style={link}
      activeStyle={{
        background: 'white',
        color: 'DarkSeaGreen'
      }}><span role="img">Profile</span></NavLink> | 

      {/* <NavLink to='/users/edit' exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'DarkSeaGreen'
      }}><span role="img">Edit</span></NavLink> |  */}

      <NavLink to='/logout'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'DarkSeaGreen'
      }}><span role="img">Logout</span></NavLink> 
    </div>
  ) 
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    user: state.users.currentUser
  }
}
export default connect(mapStateToProps)(NavBar);