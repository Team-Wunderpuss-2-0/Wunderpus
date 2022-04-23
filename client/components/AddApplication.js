import React, {useState, useEffect} from 'react';
import CardApplication from './CardApplication';
import Axios from 'axios';
import '../styles.scss';

function AddApplication(){

    const [applications, setApplications] = useState([])
    const [Url, setUrl] = useState('')
    const [Company, setCompany] = useState('')
    const [Title, setTitle] = useState('')
    const List = [];


    function addList(){
        // console.log(Url,Company,Title)
        setApplications([Url,Company,Title])
        List.push(applications)
        console.log(applications)
        console.log(list)
    }
    
    function CreateCard(){
        console.log(Title,Url,Company)
        fetch(`/api/applications/${localStorage.getItem("userId")}`,{
            method : 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: Title,
                url: Url,
                company_name: Company, 
                progress: 'Application started',
                priority: 'High',
            })
        })
        .then((data)=> data.json())
        .then(res => console.log(res))
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
            <button onClick={() => CreateCard()}> Submit </button>
            {List}
        </div>
    )

    
}

export default AddApplication;