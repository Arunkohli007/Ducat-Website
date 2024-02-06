import React from 'react'
import pic1 from './images/image1.png'
import pic2 from './images/image3.png'
import pic3 from './images/image4.png'
import pic4 from './images/image5.png'
import graphic from './images/grapic.png'
import web from './images/web.png'
import mis from './images/mis.png'
import dev from './images/dev.png'
import data from './images/data.png'
import cloud from './images/cloud.png'
import multi from './images/mutlimedia.png'
import ui from './images/ui.png'
import java from './images/java.png'
import logos from './images/logos.png'
import newlogo from './images/newlogo.png'
import './Menu.css'



export default function Home() {

 

  let center = {
    textAlign: "center"
  }
  let para = {
    textAlign: "center",
    color: "grey",
    fontSize: "20px"
  }
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src={pic1} className="d-block w-50 " alt="..." height={"500px"} />
            <h1 className='picu'>Our goal is to empower <br />your career ambitions</h1>
          </div>
          <div className="carousel-item  ">
            <img src={pic2} className="d-block w-50" alt="..." height={"500px"} />
            <h1 className='picu'>Let us help you<br />kick start your career <br />and achieve goals</h1>
          </div>
          <div className="carousel-item  ">
            <img src={pic3} className="d-block w-50" alt="..." height={"500px"} />
            <h1 className='picu'>Unlock your career with<br />us, and watch your career<br />dreams comes to life</h1>
          </div>
          <div className="carousel-item ">
            <img src={pic4} className="d-block w-50" alt="..." height={"500px"} />
            <h1 className='picu'>your success is Our<br />mission, and we're <br />dedicated to helping you <br />reach your goals</h1>
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next ">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
      <div className='explore'>
        <h1>Expore Top programs</h1>
      </div>
      <div className="container text-center">
        <div className="row row-cols-3">
          <div className="col box"><img src={graphic} alt='' height="50px"></img><p>Graphic Designing</p></div>
          <div className="col box"><img src={dev} alt='' height="50px"></img><p>DevOps</p></div>
          <div className="col box"><img src={data} alt='' height="50px"></img><p>Data Analytics</p></div>
        </div>
        <div className="row row-cols-3">
          <div className="col box"><img src={mis} alt='' height="50px"></img><p>MIS</p></div>
          <div className="col box"><img src={ui} alt='' height="50px"></img><p>UI & UX</p></div>
          <div className="col box"><img src={web} alt='' height="50px"></img><p>Web Designing</p></div>
        </div>
        <div className="row row-cols-3">
          <div className="col box"><img src={cloud} alt='' height="50px"></img><p>Cloud computing</p></div>
          <div className="col box"><img src={java} alt='' height="50px"></img><p>Java Full Stack</p></div>
          <div className="col box"><img src={multi} alt='' height="50px"></img><p>Multimedia & Animation</p></div>
        </div>
      </div>
      <hr />
      <div className='our-learner'>
        <h1 style={center}>Our Learners At Work</h1>
        <p style={para}>Ducat learners work at some of the leading and innovative organizations of <br />today, solving core business problems.</p>
      </div>
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
      <hr />
      <div className='upcoming'>
        <h3>Upcoming batches</h3>
        <label>Choose your location :</label>
        <select id='branch ' className='ms-3'>
          <option className='text-primary-emphasis'>Noida Sector 16</option>
          <option className='text-primary-emphasis'>Noida Sector 63</option>
          <option className='text-primary-emphasis'>Pitampura</option>
          <option className='text-primary-emphasis'>South Ex.</option>
          <option className='text-primary-emphasis'>Ghaziabad</option>
        </select>
      </div>
      <div className='d-flex justify-content-around mt-5 mb-5'>
        <div className="card" style={{ width: "15rem" }}>
          <img src={graphic} className="card-img-top" alt="..." height="150px"></img> <hr />
          <div className="card-body">
            <h5 className="card-title">Graphic Desingning</h5>
            <p className="card-text">Branch : Noida Sector 63 <br /> Starting Date : 2024-02-05</p>
            <button className='btn text-bg-primary'>Request a Call back</button>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img src={java} className="card-img-top" alt="..." height="150px"></img> <hr />
          <div className="card-body">
            <h5 className="card-title">Java Fullstack </h5>
            <p className="card-text">Branch : Noida Sector 63 <br /> Starting Date : 2024-02-05</p>
            <button className='btn text-bg-primary'>Request a Call back</button>
          </div>
        </div>
        <div className="card" style={{ width: "15rem" }}>
          <img src={web} className="card-img-top" alt="..." height="150px"></img> <hr />
          <div className="card-body">
            <h5 className="card-title">Web Development</h5>
            <p className="card-text">Branch : Noida Sector 63 <br /> Starting Date : 2024-02-05</p>
            <button className='btn text-bg-primary'>Request a Call back</button>
          </div>
        </div>


      </div>

      <div className='d-flex justify-content-around mt-5 mb-5'>
        <div className="card " style={{ width: "15rem" }}>
          <img src={dev} className="card-img-top" alt="..." height="150px"></img> <hr />
          <div className="card-body">
            <h5 className="card-title">Dev Ops</h5>
            <p className="card-text">Branch : Noida Sector 63 <br /> Starting Date : 2024-02-05</p>
            <button className='btn text-bg-primary'>Request a Call back</button>
          </div>
        </div>

        <div className="card" style={{ width: "15rem" }}>
          <img src={data} className="card-img-top" alt="..." height="150px"></img> <hr />
          <div className="card-body">
            <h5 className="card-title">Data Analytics</h5>
            <p className="card-text">Branch : Noida Sector 63 <br /> Starting Date : 2024-02-05</p>
            <button className='btn text-bg-primary'>Request a Call back</button>
          </div>
        </div>

        <div className="card" style={{ width: "15rem" }}>
          <img src={ui} className="card-img-top" alt="..." height="150px"></img> <hr />
          <div className="card-body">
            <h5 className="card-title">UI & UX Designing</h5>
            <p className="card-text">Branch : Noida Sector 63 <br /> Starting Date : 2024-02-05</p>
            <button className='btn text-bg-primary'>Request a Call back</button>
          </div>
        </div>

      </div>







    </>
  )
}
