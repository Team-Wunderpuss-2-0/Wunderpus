import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import CardApplication from './CardApplication';
import '../styles.scss';

function AddApplication(){

    const [applications, setApplications] = useState([])
    const [Url, setUrl] = useState('')
    const [Company, setCompany] = useState('')
    const [Title, setTitle] = useState('')


    function addList(){
        console.log(Url,Company,Title)
        setApplications([Url,Company,Title])
        console.log(applications)
    }
    
    return(
        <div className="application">
            <h1>New Application</h1>
            <label> Company Name </label>
            <input 
            id="companyName"
            type="text" 
            onChange={(e)=>setCompany(e.target.value)}
            /> 
            <br></br>
            <label>Title</label>
            <input 
            id="title"
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            /> 
            <br></br>
            <label>Job</label>
            <input 
            id="Job"
            type="text"
            onChange={(e)=>setUrl(e.target.value)}
            /> 
            <br></br>
            <button onClick={addList}> Submit </button>
            
        </div>
    )

    
}

export default AddApplication;