import assets from '../../assets/assets'
import './ChatBox.css'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function ChatBox() {
  const { userData } = useContext(AppContext);
  console.log(userData)

  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={userData ? userData?.avatar :assets.profile_img} alt="" />
        <p>{userData ? userData?.name: "Richard Sanford"} <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className='msg'> Lorem ipsum is placeholder text commonly used in .... </p>
          <div>
            <img src={userData ? userData?.avatar : assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="s-msg">
         <img className='msg-img' src={assets.pic1} alt="" />
          <div>
            <img src={userData ? userData?.avatar :assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="r-msg">
          <p className='msg'> Lorem ipsum is placeholder text commonly used in .... </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
      </div>


      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file"  id="image" accept='image/png, image/jpeg' hidden/>
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox