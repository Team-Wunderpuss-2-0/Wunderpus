import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Login (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const login = () =>{
        console.log(username,password);
        Axios.post('http://localhost:3000/api/auth/signup',{
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
            type= 'text' 
            placeholder = 'Password'
            onChange={(e)=>{setPassword(e.target.value)}}
            /> <br></br>
            <button onClick={login}> Log In</button>

            <p> Forgot your <a href=''>password</a>?</p>
        </div>
    )
}



export default Login;