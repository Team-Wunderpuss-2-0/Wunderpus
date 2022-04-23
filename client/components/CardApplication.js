import React, {useState, useEffect} from 'react';

function CardApplication(props){
    
    return(
        <div>
            <div>Company:{props.Applications.Title}</div>
            <div>Job Title:{props.Applications.Title}</div>
            <div>Job Posting:{props.Applications.Title} </div>
        </div>
    )
}

export default CardApplication;