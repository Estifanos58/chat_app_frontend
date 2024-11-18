import './Login.css';  
import '../../assets/assets';  
import assets from '../../assets/assets';  
import { useState } from 'react';  
import axios from 'axios';  

function Login() {  
    const [currState, setCurrState] = useState("Sign up");  
    const [form, setForm] = useState({  
        username: "",  
        email: "",  
        password: ""  
    });  

    const submitForm = async (e) => {  
        e.preventDefault();  
        try {  
            const url = currState === "Sign up" ? 'http://localhost:3500/auth/signup' : 'http://localhost:3500/auth/login'; // Add login URL here  
            const response = await axios.post(url, form, {  
                headers: {  
                    Accept: 'application/json',  
                    'Content-Type': 'application/json'  
                },  
            });  
            console.log(response.data)
            if (response.data.message) {  
                console.log('Success');  
                localStorage.setItem('auth-token', response.data.accessToken); // Uncomment this  
                window.location.replace('/chat'); // Redirect after signup/login  
            } else {  
                alert(response.data.error);  
                console.log('Error:', response.data.error);  
            }  
        } catch (error) {  
            console.error("There was an error!", error);  
            alert("An error occurred. Please try again.");  
        }  
    };  

    const changeHandler = (e) => {  
        setForm({  
            ...form,  
            [e.target.name]: e.target.value  
        });  
    };  

    return (  
        <div className='login'>  
            <img src={assets.logo_big} alt="" className='logo' />  
            <form className="login-form" onSubmit={submitForm}>  
                <h2>{currState}</h2>  
                {currState === 'Sign up' && (  
                    <input  
                        value={form.username}  
                        name='username'  
                        onChange={changeHandler}  
                        type="text"  
                        placeholder='Username'  
                        className="form-input"  
                        required   
                    />  
                )}  
                <input  
                    value={form.email}  
                    onChange={changeHandler}  
                    name='email'  
                    type="email"  
                    placeholder='Email Address'  
                    className="form-input"  
                    required   
                />  
                <input  
                    value={form.password}  
                    onChange={changeHandler}  
                    name='password'  
                    type="password"  
                    placeholder='Password'  
                    className="form-input"  
                    required   
                />  
                <button type='submit'>  
                    {currState === "Sign up" ? "Create Account" : "Login Now"}  
                </button>  
                <div className="login-term">  
                    <input type="checkbox" required />  
                    <p>Agree to the terms of use & privacy policy.</p>  
                </div>  
                <div className="login-format">  
                    {currState === "Login"   
                        ? <p className="login-toggle">Create an account <span onClick={() => setCurrState("Sign up")}>click here</span></p>  
                        : <p className="login-toggle">Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>  
                    }  
                </div>  
            </form>  
        </div>  
    );  
}  

export default Login;