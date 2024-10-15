import React from 'react'
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <div>
       <section className='section py-4 bg-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h2 className='main-h'>Contact Us</h2>
              
            </div>
            <div className='col-md-8 my-auto float-end'>
              <h6 className=' float-end'>Home/Contact Us</h6>
              
            </div>
          </div>
        </div>
      </section>
     <section className='section'>
     <div className='container'>
        <div className='card shadow'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6'>
                <h5>Contact Form</h5>
                <hr/>
                <div className='form-group'>
                  <label className='mb-1' for=''>Full Name</label>
                  <input type='text' className='form-control' placeholder='Enter Full Name'></input>
                </div>
                <div className='form-group'>
                  <label className='mb-1' for=''>Phone Number</label>
                  <input type='number' className='form-control' placeholder='Enter Phone Number'></input>
                </div>
                <div className='form-group'>
                  <label className='mb-1' for=''>Email</label>
                  <input type='text' className='form-control' placeholder='Enter Email'></input>
                </div>
                <div className='form-group py-3'>
                  <button type='button' className='btn btn-primary shadow' >Send Message</button>
                </div>
              </div>
              <div className='col-md-6 border-start'>
                <h5 className='main-h'>Adress Information</h5>
                <div className='underline'></div>
                <p>New York, NY 10012, US</p>
                <p>Phone:090909090</p>
                <p>Email:info@example</p>

              </div>

            </div>
          </div>
        </div>
      </div>
     </section>
     
    </div>
  )
}

export default Contact
