import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Signup (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const signupUser = () =>{
        console.log(username,password);
        Axios.post('/api/auth/signup',{
            username,
            password
        })
    }

    return(
        <div>
            <h1 id="Signup"> Signup!</h1>
        
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
            <button onClick={signupUser}> Log In</button>

        
        </div>
    )
}



export default Signup;
