import { useState } from 'react'
import assets from '../../assets/assets'
import './ProfileUpdate.css'
import axios from 'axios'

function ProfileUpdate() {
  const [image, setImage] = useState(false)
  const [prevImage, setPrevImage] = useState('');

  const [formData, setFormData] = useState({
    bio: "",
    avatar: "",
    name: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      
    } catch (error) {
      
    }
    console.log(formData);
  }

  const hadleImageSubmit = (e) => {
    const img = e.target.files[0];
    setImage(e.target.files[0])
    const reader = new FileReader();


    // const file = event.target.files[0];  
    // const reader = new FileReader();  

    reader.onloadend = () => {  
      // The result will be base64 encoded  
      // setBase64Image(reader.result);  
      setFormData({
        ...formData,
        avatar: reader.result
      })
    };  

    if (img) {  
      reader.readAsDataURL(img);  
    } 
  }

  return (
    <div className='profile'>
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={hadleImageSubmit} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden/>
            <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input value={formData.name} onChange={handleChange} name='name' type="text" placeholder='Your name' required />
          <textarea value={formData.bio} onChange={handleChange} name='bio' placeholder='Write profile bio' required id=""></textarea>
          <button type="submit" onClick={handleSubmit}>Save</button>
        </form>
        <img className='profile-pic' src={image? URL.createObjectURL(image): assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate