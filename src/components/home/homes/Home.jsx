import React from 'react'
import '../../../App.css'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src='./images/image2.jpg' alt='' />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              I AM A <br />
              WEB DEVELOPER
            </h1>
            <div className="socialicon">
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-linkedIn linkedIn'></i>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, eos amet obcaecati omnis nihil unde tempore natus. Ipsum dolorum alias quo aut sunt nisi! </p>
            <button className='primary-btn'>Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home