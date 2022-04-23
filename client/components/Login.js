import React, {useState, useEffect} from 'react';

function Login (props) {
    
    return(
        <div>
            <h1 id="Login"> Login!</h1>
        
            <input className="signin" type= 'text' placeholder = 'Username'/> <br></br>
            <input className="signin" type= 'text' placeholder = 'Password'/> <br></br>
            <button> Log In</button>

            <p> Forgot your <a href= ''>username</a> or <a href=''>password</a>?</p>
        </div>
    )
}



export default Login;