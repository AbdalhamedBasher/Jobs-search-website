import { useState } from "react"
const JobSearch=()=>{
    const jobs=[{jobTitle:"React developer",jobLocation:"Jeddah"},{jobTitle:"Fullstack developer",jobLocation:"Riyadh"},{jobTitle:"PHP developer",jobLocation:"Medina"},{jobTitle:"FullStack developer",jobLocation:"Mecca"},{jobTitle:"Data scientist",jobLocation:"Jeddah"},{jobTitle:"Data scientist",jobLocation:"Mecca"},{jobTitle:"React developer",jobLocation:"Medina"},{jobTitle:"PHP developer",jobLocation:"Riyadh"}]
    const handleClick=()=>{
        alert('Thank you for applying')
    }
    const[searchValue,SetSearchValue]=useState('');
    const filteredJobs=jobs.filter((job) => {
        return (job.jobTitle.toLowerCase()).indexOf(searchValue.toLowerCase())!=-1 || (job.jobLocation.toLowerCase()).indexOf(searchValue.toLowerCase())!=-1;


    })
    const handleInputChange=(e)=>{
        SetSearchValue(e.target.value);
    }
    const handleClearClick=()=>{
        SetSearchValue('');
    }
    const shouldDisplayButton=searchValue.length>0;
    return(
        <div className="container" >
            <h2>Programming jobs</h2>
            <label for="search">Search by job title or location:</label>
            <input type="text" value={searchValue} onChange={handleInputChange} id="search"/>
            {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
            <div className="job-posting">  
                {filteredJobs.map((job)=>{
                     return(
                        <div className="jobs-container">
                           <h4>{job.jobTitle}</h4>
                           <h5>{job.jobLocation}</h5>
                           <p>We are looking for a {job.jobTitle} to join our company in {job.jobLocation},for those who are interested, please apply.</p>
                           <button onClick={handleClick}>Apply here</button>
                        </div>
    
                    )
                
                
            
               
            })}
            
           </div>
        </div>   
    )}
export default JobSearch;