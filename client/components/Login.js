import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Login (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const login = () =>{
        console.log(username,password);
        Axios.post('/api/auth/login',{
            username,
            password
        })
    }

    return(
        <div>
            <h1 id="Login"> Login!</h1>
        
            <input 
            className="signin" 
            type= 'text' 
            placeholder = 'Username'
            onChange={(e)=>{setUsername(e.target.value)}}
            /> <br></br>
            <input className="signin" 
            type= 'password' 
            placeholder = 'Password'
            onChange={(e)=>{setPassword(e.target.value)}}
            /> <br></br>
            <button onClick={login}> Log In</button>

            <p> Forgot your <a href=''>password</a>?</p>
            <p> new user? sign up <a href=''>here</a></p>

        </div>
    )
}



export default Login;
