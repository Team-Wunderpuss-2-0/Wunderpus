import React, {useState, useEffect} from 'react';
import CardApplication from './CardApplication';

// /applications/:userId
function Dashboard(){
    const [applications, setApplications] = useState([])
    useEffect(() => {
    
        fetch(`/api/applications/${localStorage.getItem("userId")}`)
        .then((data)=> data.json())
        .then(res=> setApplications(res))
   
  
}, [])

    function displayApplications(){
        
    }
    console.log(applications)
    return(
        <div>
            Hi,
            {applications.length>0 && applications.map((app) => {return (<CardApplication {...app} key={app.id} />)})}
            {/* <button onClick={() => getApplications()}>Testing</button> */}
        </div>
    )


    
}

export default Dashboard;