import { useState, useContext } from 'react'  
import assets from '../../assets/assets'  
import './ProfileUpdate.css'  
import { AppContext } from '../../context/AppContext'  
import axios from 'axios'  
import imageCompression from 'browser-image-compression' // Add this import  

function ProfileUpdate() {  
  const { userData } = useContext(AppContext);  
  const userId = userData?._id  
  const [image, setImage] = useState(false)  
  const [prevImage, setPrevImage] = useState('');  

  const [formData, setFormData] = useState({  
    bio: userData?.bio,  
    avatar: userData?.avatar,  
    name: userData?.name,  
    id: userData?._id,  
  })  

  const handleChange = (e) => {  
    setFormData({  
      ...formData,  
      [e.target.name]: e.target.value,  
      id: userId  
    })  
  }  

  const handleSubmit = async(e) =>{  
    e.preventDefault()  
    try {  
        const response = await axios.patch('http://localhost:3500/user', formData, {  
          headers: {  
            Accept: 'application/json',  
            'Content-Type': 'application/json'  
        },  
        })  
        console.log(response.data)  
          
    } catch (error) {  
      console.log(error.message)  
    }  
    console.log(formData);  
  }  

  const handleImageSubmit = async (e) => {  
    const img = e.target.files[0];  
    
    // Image compression options  
    const options = {  
      maxSizeMB: 0.1,          // Max file size  
      maxWidthOrHeight: 1920, // Max width or height  
      useWebWorker: true      // Use web worker for better performance  
    }  

    try {  
      // Compress the image  
      const compressedFile = await imageCompression(img, options);  
      
      // Set the compressed image  
      setImage(compressedFile)  

      const reader = new FileReader();  
      reader.onloadend = () => {  
        setFormData({  
          ...formData,  
          avatar: reader.result  
        })  
      };  

      if (compressedFile) {  
        reader.readAsDataURL(compressedFile);  
      }   
    } catch (error) {  
      console.log('Image compression error:', error);  
    }  
  }  

  return (  
    <div className='profile'>  
      <div className="profile-container">  
        <form>  
          <h3>Profile Details</h3>  
          <label htmlFor="avatar">  
            <input onChange={handleImageSubmit} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden/>  
            <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt="" />  
            upload profile image  
          </label>  
          <input value={formData?.name} onChange={handleChange} name='name' type="text" placeholder='Your name' required />  
          <textarea value={formData?.bio} onChange={handleChange} name='bio' placeholder='Write profile bio' required id=""></textarea>  
          <button type="submit" onClick={handleSubmit}>Save</button>  
        </form>  
        <img className='profile-pic' src={image? URL.createObjectURL(image): formData.avatar ? formData.avatar : assets.logo_icon} alt="" />  
      </div>  
    </div>  
  )  
}  

export default ProfileUpdate