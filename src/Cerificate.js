import React from 'react'
import './Menu.css'

export default function Cerificate() {
    return (
        <>
        <div className='data'>
            <div className='header '>
                <h1>Apply for cerificate</h1>
                <hr></hr>
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <form className='d-flex flex-column'>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name </label>
                        <input type="text" placeholder='Enter Your Name' className="form-control" id="exampleInputText" ></input>
                        
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" placeholder='Enter Your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" placeholder='Enter Your Password' className="form-control" id="exampleInputPassword1"></input>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Course</label>
                        <input type="text" placeholder='Course Name' className="form-control" id="exampleInputText" ></input>
                        
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary bg-primary mb-5">Send Message</button>

                </form>
            </div>
            </div>
        </>
    )
}
