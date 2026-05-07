import React from 'react'
import JobCard from '../Components/JobCard'

const App = () => {

 const jobsData = [
  {
    id: 1,
    title: "Senior UI Developer",
    company: "Nike",
    rate: "$120/hr",
    role: "UI Developer",
    location: "Beaverton, Oregon, USA",
    posted: "2 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },

  {
    id: 2,
    title: "Frontend React Developer",
    company: "Google",
    rate: "$150/hr",
    role: "React Developer",
    location: "Mountain View, California, USA",
    posted: "1 day ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },

  {
    id: 3,
    title: "Full Stack Engineer",
    company: "Amazon",
    rate: "$140/hr",
    role: "Full Stack Developer",
    location: "Seattle, Washington, USA",
    posted: "3 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },

  {
    id: 4,
    title: "JavaScript Developer",
    company: "Microsoft",
    rate: "$130/hr",
    role: "JS Developer",
    location: "Redmond, Washington, USA",
    posted: "5 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },

  {
    id: 5,
    title: "Next.js Developer",
    company: "Vercel",
    rate: "$125/hr",
    role: "Next.js Developer",
    location: "San Francisco, California, USA",
    posted: "Just now",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
  },

  {
    id: 6,
    title: "Frontend Engineer",
    company: "Meta",
    rate: "$160/hr",
    role: "Frontend Developer",
    location: "Menlo Park, California, USA",
    posted: "2 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/3840px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
  },

  {
    id: 7,
    title: "UI/UX Designer",
    company: "Adobe",
    rate: "$110/hr",
    role: "UI UX Designer",
    location: "San Jose, California, USA",
    posted: "4 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg"
  },

  {
    id: 8,
    title: "Backend Node Developer",
    company: "Netflix",
    rate: "$145/hr",
    role: "Backend Developer",
    location: "Los Gatos, California, USA",
    posted: "1 week ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },

  {
    id: 9,
    title: "Mobile App Developer",
    company: "Uber",
    rate: "$135/hr",
    role: "React Native",
    location: "San Francisco, California, USA",
    posted: "3 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
  },

  {
    id: 10,
    title: "Software Engineer",
    company: "Apple",
    rate: "$170/hr",
    role: "Software Engineer",
    location: "Cupertino, California, USA",
    posted: "Today",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },

  {
    id: 11,
    title: "Frontend Intern",
    company: "Airbnb",
    rate: "$30/hr",
    role: "Frontend Intern",
    location: "San Francisco, California, USA",
    posted: "2 days ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
  },

  {
    id: 12,
    title: "UI Developer",
    company: "Spotify",
    rate: "$120/hr",
    role: "UI Developer",
    location: "Stockholm, Sweden",
    posted: "6 hours ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  }
];
  return (
    <div id='parent'>
     
      {jobsData.map((details)=>{
      
        return  <JobCard  title={details.title} company={details.company} logo={details.logo}rate={details.rate} role={details.role} 
        location={details.location} posted={details.posted}/>
      })}
      
      

    </div>
  )
}

export default App