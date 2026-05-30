import { Bookmark } from 'lucide-react'


function Card(props){
  return <div className="card">
        <div className= "top">
            <img src = {props.job.brandlogo} alt = "profile"/>
            <button>Save <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h2>{props.job.companyName}<span> {props.job.datePosted}</span></h2>
          <h1>{props.job.position}</h1>
          <div className="tags">
            <h4>{props.job.tag1}</h4>
            <h4>{props.job.tag2}</h4>
          </div>
        </div>

        <div className = "bottom">
          
            <div>
              <h3>{props.job.pay}</h3>
              <p>{props.job.location}</p>
            </div> 
            <div>
              <button> Apply Now</button>
            </div>
          
        </div>
      </div>
    
  
}

export default Card