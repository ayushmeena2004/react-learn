import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Nav from './components/section1/nav'
import Page1content from './components/section1/Page1content'


export const App = () => {
  const users =[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      tag:"satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      tag:"underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:"",
      tag:"underbanked"
    }
  ]


  return (
    <div>
      
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App