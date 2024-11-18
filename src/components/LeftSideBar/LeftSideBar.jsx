import assets from '../../assets/assets'
import './LeftSideBar.css'
import { useNavigate } from 'react-router-dom'
import {AppContext} from '../../context/AppContext'
import { useContext } from 'react';

function LeftSideBar() {
  const navigate = useNavigate();
  const {userData} = useContext(AppContext) 

  const handleLogOut = () =>{
    localStorage.removeItem("auth-token");
    navigate('/')
  }
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className='logo' alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p onClick={()=>navigate('/profile')}>Edit Profile</p>
              <hr />
              <p onClick={handleLogOut}>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder='Search here' />
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item, index) => (
          <div key={index} className="friends">
          <img src={userData ? userData?.avatar :assets.profile_img} alt="" />
          <div>
            <p>{userData ? userData?.name : "Richard Sanford"}</p>
            <span>{userData ? userData?.bio :"Hello, How are you? "}</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar