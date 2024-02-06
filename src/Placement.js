import React from 'react'
import './Menu.css'
import pankaj from './images/pankaj kumar.jpg'
import piyush from './images/piyush.jpg'
import pranav from './images/pranav.jpeg'
import rahul from './images/rahul.jpeg'
import rishabh from './images/rishabh thakur.jpg'
import suresh from './images/suresh.jpg'
import vishal from './images/vishal.jpg'
import logos from './images/logos.png'
import newlogo from './images/newlogo.png'


export default function Placement() {
  return (
    <>
      <div className='header'>
        <h1>Upcoming Drives and Walk-In</h1>
        <hr></hr>
      </div>

      <h2 className='mb-5'>No Events</h2>
      <div className='bg-info-subtle text-primary-emphasis'>
        <h1 className='text-center'>Best Placement Offered</h1>
        <h2 className='text-secondary pb-3'>We provide best career Guidance Along with suitable placements.</h2>
      </div>

      <div className='d-flex justify-content-around p-5'>

        <div class="card" style={{ width: "17rem", border:"1px solid black" }}>
          <img src={pankaj} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <p><span className='text-primary-emphasis fw-bolder'>Name</span> : Pankaj <br /><span className='text-primary-emphasis fw-bolder'>Job Profile</span>: Software Developer <br /><span className='text-primary-emphasis fw-bolder'>Pakage</span>: 5 LPA/- <br /> <span className='text-primary-emphasis fw-bolder'>Company</span> : NovelVox</p>
          </div>
        </div>

        <div class="card" style={{ width: "17rem", border:"1px solid black" }}>
          <img src={piyush} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <p><span className='text-primary-emphasis fw-bolder'>Name</span> : Piyush <br /><span className='text-primary-emphasis fw-bolder'>Job Profile</span> : Python Developer <br /> <span className='text-primary-emphasis fw-bolder'>Pakage</span> : 6 LPA/- <br /> <span className='text-primary-emphasis fw-bolder'>Company</span> : SSPL Global Pvt. Ltd.</p>
          </div>
        </div>

        <div class="card" style={{ width: "17rem", border:"1px solid black" }}>
          <img src={pranav} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <p><span className='text-primary-emphasis fw-bolder'>Name</span> : Pranav <br /><span className='text-primary-emphasis fw-bolder'>Job Profile</span> : .NET Developer <br /> <span className='text-primary-emphasis fw-bolder'>Pakage</span> : 12 LPA/- <br /> <span className='text-primary-emphasis fw-bolder'>Company</span> : Cognizant</p>
          </div>
        </div>

        <div class="card" style={{ width: "17rem" , border:"1px solid black"}}>
          <img src={rahul} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <p><span className='text-primary-emphasis fw-bolder'>Name</span> : Rahul <br /><span className='text-primary-emphasis fw-bolder'>Job Profile</span> : Java Developer <br /> <span className='text-primary-emphasis fw-bolder'>Pakage</span> : 9 LPA/- <br /> <span className='text-primary-emphasis fw-bolder'>Company</span> : Sun life Pvt. Ltd.</p>
          </div>
        </div>

      </div>
      <div className='d-flex justify-content-around p-5'>
        <div class="card" style={{ width: "17rem", border:"1px solid black" }}>
          <img src={rishabh} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <p> <span className='text-primary-emphasis fw-bolder'>Name</span> : Rishabh <br /><span className='text-primary-emphasis fw-bolder'>Job Profile</span> : Coordinator <br /> <span className='text-primary-emphasis fw-bolder'>Pakage</span> : 6 LPA/- <br /> <span className='text-primary-emphasis fw-bolder'>Company</span> : HSA and Partners</p>
          </div>
        </div>

        <div class="card" style={{ width: "17rem", border:"1px solid black" }}>
          <img src={suresh} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <p><span className='text-primary-emphasis fw-bolder'>Name</span> : Suresh <br /><span className='text-primary-emphasis fw-bolder'>Job Profile</span> : Java Developer <br /> <span className='text-primary-emphasis fw-bolder'>Pakage</span> : 6 LPA/- <br /> <span className='text-primary-emphasis fw-bolder'>Company</span> : CMS computer Ltd.</p>
          </div>
        </div>

        <div class="card" style={{ width: "17rem", border:"1px solid black" }}>
          <img src={vishal} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <p><span className='text-primary-emphasis fw-bolder'>Name</span> : Vishal <br /><span className='text-primary-emphasis fw-bolder'>Job Profile</span> : .NET Developer <br /> <span className='text-primary-emphasis fw-bolder'>Pakage</span> : 7.5 LPA/- <br /> <span className='text-primary-emphasis fw-bolder'>Company</span> : Digistorm</p>
          </div>
        </div>

      </div>
      <hr/>

        <h2 className='text-center text-primary-emphasis mt-5'>Our Placement Partners</h2>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logos} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={newlogo} className="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
