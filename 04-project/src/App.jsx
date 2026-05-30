import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandlogo: "https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Google",
    datePosted: "2 days ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.oppeNr1oxB8oeXpXcIWAQAHaEo?w=236&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Apple",
    datePosted: "5 days ago",
    position: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?w=200&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Meta",
    datePosted: "1 day ago",
    position: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=137&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Amazon",
    datePosted: "3 days ago",
    position: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?w=160&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Netflix",
    datePosted: "6 days ago",
    position: "Cloud Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?w=263&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Noida, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?w=133&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Adobe",
    datePosted: "7 days ago",
    position: "Data Analyst",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$30/hour",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.E7kksUa-xHiPsoSEuJhQ-wHaFj?w=235&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    position: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.zAqniopSixprJzkQvKkSaQHaJj?w=133&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Tesla",
    datePosted: "8 days ago",
    position: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Ahmedabad, India"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.kfT8mt-UdM4MwzmELr7BSwHaFj?w=223&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "OpenAI",
    datePosted: "1 week ago",
    position: "Python Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Remote"
  }
];


  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <Card key={index} job={job} />
      ))}
    </div>
    
  )
}

export default App