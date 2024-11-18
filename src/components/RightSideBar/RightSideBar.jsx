import assets from '../../assets/assets'
import './RightSideBar.css'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function RightSideBar() {
  const {userData} = useContext(AppContext);
  return (
    <div className='rs'>
        <div className="rs-profile">
          <img src={userData? userData?.avatar :assets.profile_img} alt="" />
          <h3>{userData ? userData?.name : "Richard Sanford" }<img src={assets.green_dot} className='dot' alt="" /></h3>
          <p>{userData? userData?.bio :"Hey, There i am Richard Sanford using chat app"}</p>
        </div>
        <hr />
        <div className="rs-media">
          <p>Media</p>
          <div>
            <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" />
            <img src={assets.pic3} alt="" />
            <img src={assets.pic4} alt="" />
            <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" />
          </div>
        </div>
        <button>Logout</button>
    </div>
  )
}

export default RightSideBar