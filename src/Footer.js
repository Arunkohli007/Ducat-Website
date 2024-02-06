import React from 'react'
import './Menu.css'

export default function Footer() {
  let data = {
   
  }
  let bold = {
    fontWeight: "500"
  }
  return (

    <>
      <div class=" text-center footer" style={data}>
        <div class="row row-cols-3">
          <div class="col"><h3 style={bold}>Quick Links</h3> </div>
          <div class="col"><h3 style={bold}>Top Courses</h3> </div>
          <div class="col"><h3 style={bold}>Policies</h3> </div>
          <div class="col" >Java</div>
          <div class="col">Data Science</div>
          <div class="col">Private Policy</div>
          <div class="col">.Net</div>
          <div class="col">Mern stack</div>
          <div class="col"></div>
          <div class="col">Web Designing</div>
          <div class="col">Artificial Intelligence</div>
          <div class="col"></div>
          <div class="col">Cloud computing</div>
          <div class="col">UI & UX Desingning</div>
          <div class="col"></div>
        </div>
      </div>
    </>
  )
}

