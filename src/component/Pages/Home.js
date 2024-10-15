import React from 'react'
import Slider from '../inc/Slider'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div>
      <Slider/>
      <motion.div
            whileInView={{
              y:[100,0]
            }}
            transition={{
              duration:0.7
            }}>
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
      </motion.div>

      <div className='section vision border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
              <h2 className='main-h'>Vision, Mission and Values</h2>
              <div className='underline mx-auto'></div>
              
            </div>
           
            <div className='col-md-4 text-center mt-5'>
            <motion.div
            whileInView={{
              y:[-100,0]
              
            }}
            transition={{
              duration:0.7
            }}
            >
              <img src='icon3.png' className='icon'/>
              <h5 className='mt-4'>Our Vision</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
              </motion.div>

            </div>
            <div className='col-md-4 text-center mt-5 '>
            <motion.div
            whileInView={{
              y:[100,0]
              
            }}
            transition={{
              duration:0.7
            }}
            >
            <img src='icon1.png'  className='icon'/>

              <h5 className='mt-4'>Our Mission</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
         </motion.div>
            </div>
            <div className='col-md-4 text-center mt-5'>
            <motion.div
            whileInView={{
              y:[-100,0]
              
            }}
            transition={{
              duration:0.7
            }}
            >
            <img src='icon2.png'  className='icon'/>

              <h5 className='mt-4'>Our Core Values</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      <div className='section  border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
              <h2 className='main-h'>Our Services</h2>
              <div className='underline mx-auto'></div>
              
            </div>
          
            <div className='col-md-4 ser'>
            <motion.div
            whileInView={{
              x:[-100,0]
              
            }}
            transition={{
              duration:0.7
            }}
            >
              <div className='card shadow info'>
                <img src='jj.jpg'/>
                <div className='card-body '>
                <h5>Service 1</h5>
                <div className='underline'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                <Link to='/services'>Read More</Link>
                </div>
              </div>
              </motion.div>

            </div>
            <div className='col-md-4 ser'>
            <motion.div
            whileInView={{
              x:[-100,0]
              
            }}
            transition={{
              duration:0.7
            }}
            >
              <div className='card shadow info'>
                <img src='jj.jpg'/>
                <div className='card-body '>
                <h5>Service 2</h5>
                <div className='underline'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                <Link to='/services'>Read More</Link>
                </div>
              </div>
              </motion.div>
            </div>
            <div className='col-md-4 ser'>
            <motion.div
            whileInView={{
              x:[-100,0]
              
            }}
            transition={{
              duration:0.7
            }}
            >
              <div className='card shadow info'>
                <img src='jj.jpg'/>
                <div className='card-body ' >
                <h5>Service 3</h5>
                <div className='underline'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                <Link to='/services'>Read More</Link>
                </div>
              </div>
              </motion.div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
