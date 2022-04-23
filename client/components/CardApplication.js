import React, {useState, useEffect} from 'react';
import Progressbar from './Progressbar.js'

function CardApplication(props){
    
    return(
        <div>
            <div>Company:{props.applications.company_name}</div>
            <div>Job Title:{props.applications.title}</div>
            <div>Job Posting:{props.applications.url} </div>
        </div>
    )
}

export default CardApplication;