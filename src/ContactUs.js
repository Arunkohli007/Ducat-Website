import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className='form d-flex justify-content-center mt-5'>
                <div className='main-form rounded border border-grey p-5 mb-5  bg-light' style={{ height: "100vh", width: "65vw" }}>
                    <h1 className='text-primary-emphasis text-center'>Connect with Us</h1>
                    <p className='text-center'>For further questions, including partnership opportunities, please email mail to: <span className='fw-bolder'>info@ducatindia.com</span> or contact using our contact form.</p>



                    <div className='d-flex justify-content-center mt-5'>
                        <div className='ps-5'>
                            <label>Name :</label>
                            <input type="text" placeholder='Enter Your Name' className="form-control " id="exampleInputText" style={{ width: "300px" }}></input>
                        </div>

                        <div className='ps-5'>
                            <label>Email :</label>
                            <input type="text" placeholder='Enter Your Email' className="form-control w-70 " id="exampleInputText" style={{ width: "300px" }}></input>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <div className='ps-5'>
                            <label>Phone Number :</label>
                            <input type="text" placeholder='Enter Your Phone Number' className="form-control " id="exampleInputText" style={{ width: "300px" }}></input>
                        </div>

                        <div className='ps-5'>
                            <label>Course :</label> <br />
                            <select style={{ width: "300px", height: "40px" }}>
                                <option >Web Development</option>
                                <option >Data Analytics</option>
                                <option >Python Fullstack Development</option>
                                <option >UI & UX Designing</option>
                                <option >Java Fullstack Development</option>
                                <option >Web Designing</option>
                                <option >AI & Machine Learning</option>
                            </select>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-5'>
                        <div className='ps-5'>
                            <label>Branch :</label>
                            <select  style={{ width: "580px", height: "40px",marginLeft:"10px" }}>
                                <option >Noida Sector 63</option>
                                <option >Noida Sector 16</option>
                                <option >Pitampura</option>
                                <option >South Extention</option>
                                <option >Ghazizbad</option>
                                <option >Gurugram</option>
                            </select>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center  mt-5'>
                        <div className='ps-5 d-flex'>
                            <label>How can we help you?</label>
                            <textarea style={{ width: "480px", height: "40px",marginLeft:"10px" }} placeholder='Message'></textarea>

                                
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-5'>
                      <button className='btn text-light bg-dark'>SEND MESSAGE</button>
                        </div>


                </div>

            </div>
        </>
    )
}
