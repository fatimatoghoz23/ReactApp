import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
       <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2 className='main-h'>Our Company</h2>
              <div className='underline mx-auto'></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
              <Link to='/about' className='btn btn-warning shadow'>Read More</Link>
            </div>
          </div>
        </div>
      </div>


      <div className='section vision border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
              <h2 className='main-h'>Vision, Mission and Values</h2>
              <div className='underline mx-auto'></div>
              
            </div>
            <div className='col-md-4 text-center mt-5'>
              <h5>Our Vision</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
            <div className='col-md-4 text-center mt-5'>
              <h5>Our Mission</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
            <div className='col-md-4 text-center mt-5'>
              <h5>Our Core Values</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
