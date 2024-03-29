import React from 'react'
import './Menu.css'
import mission from './images/mission.svg'
import training from './images/trainer.svg'

export default function Aboutus() {
  let border={
    borderBottom:"1px solid black",
    color:"darkblue",
    fontWeight:"500px"
  }
  
  return (
    <>

      <div className='mid object-fit-fill'>
      <h1>Our #1 Highest Priority is on <br/>Building Your Job oriented Skills</h1>
      </div>
      <div className='d-flex ps-5 p-4'>
      <img src={mission} alt=''></img>
      <h1 className='p-3 ' style={border}>Our Mission</h1>
      </div>
      <div className='p-3 text-grey ps-5'>
      <p>Back in 2000, keeping in mind to train and educate youngsters, we started our journey. When we started DUCAT The IT Training School, our passion was and is to train youngsters in job-oriented subdomains in the IT industry to secure a career by offering you the best IT Training. We are here to guide you to reach the pinnacle of your career. We are aware of the fact that getting a job is the prime motive of students after course completion, here at DUCAT we provide 100% Job assistance. Our IT Institute has 6 branches at Delhi NCR, with more than 180 courses and skill sets. Our Institute is helping youngsters to be trained in job-oriented courses and improve their career.</p>
      </div>
      <div className='d-flex p-4 ps-5'>
      
      <h1 className='p-3 ps-5' style={border}>Our Vision</h1>
      </div>
      <div className='p-4 ps-5'>
        <ul>
          <li>We are thriving to establish ourselves as an education provider that focuses on giving learners job-oriented skills.</li> <br/>
          <li>We understand what the monthly paycheck will make you and your family feel.</li> <br/>
        </ul>
      </div>
      <div className='d-flex p-4 ps-5'>
      
      <h1 className='p-3 ' style={border}>What DUCAT do</h1>
      </div>
      <div className='p-4 text-grey ps-5'>
      <ul>
          <li>DUCAT is a Registered IT Training Institute. We train students from both local and PAN India in a variety of nationally recognised professional IT courses.</li> <br/>
          <li>DUCAT is a Registered IT Training Institute. We train students from both local and PAN India in a variety of nationally recognised professional IT courses.</li> <br/>
          <li>When you enrol with us, you'll be joining hundreds of other job searchers and IT professionals who got employment or promotion after completion of training from us.</li> <br/>
          <li>We offer a customised approach in training to elevate and build your IT skills which makes you stand out from the crowd.</li> <br/>
        </ul>
      </div>
      <div className='d-flex p-4 ps-5'>
      <img src={training} alt='' height="60px"></img>
      <h1 className='p-3 ps-5' style={border}>Our Trainers and Quality</h1>
      </div>
      <div className='p-4 text-grey ps-5'>
      <p className='mb-2'>We have highly qualified trainers and educators specializing in the IT industry. Top IT professionals will educate you with deep knowledge of the course and as per current IT industry needs.</p>
      <p className='mt-3'>Our education strategy is primarily based on Industry requirements. To make sure you're educated on the most recent industry standards, we are very responsive to the variable needs of the IT Industry</p>
      </div>

      <div className='d-flex p-4 ps-5'>
      
      <h1 className='p-3 ' style={border}>What DUCAT do</h1>
      </div>
      <div className='p-4 text-grey ps-5'>
      <ul>
          <li>All of our students are entitled to a perk: affiliate consulting, professional services and placement services.</li><br/>
          <li>The follow-up meetings with each student individually, free of charge, are conducted by our trainers, who are also skilled IT consultants and professionals. These meeting sessions are nothing but our learning and training strategies to secure a candidate placement.</li> <br/>
          <li>We have developed strong relationships with several IT firms and are interacting with more new and renowned ones that are creating sizable ERP, E-Commerce, and QA programmes, and we are on their preferred vendor list. Our corporate partners are aggressively recruiting our students.</li> <br/>
          <li>We also support our students in advancing in their professional careers, settling into new work environments after being employed, and maintaining their employability and competitiveness by picking up cutting-edge new skills.</li> <br/>
          <li>These meetings include career counselling, resume preparation, and mock job interviews with feedback and analysis reports which are provided on a regular basis during training. Your attention will be drawn to class topics that are frequently covered in technical interviews by our trainers.</li> <br/>
        </ul>
      </div>

      
      
    
      
      
      
    </>
  )
}
