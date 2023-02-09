import React from 'react'
import '../../../App.css'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src='./images/Newpp.jpeg' alt='' />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              SAMUEL OSINUBI 
            </h1>
            <h3>SOFTWARE DEVELOPER | DATA ANALYST</h3>
            <div className="socialicon">
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-linkedIn linkedIn'></i>
            </div>
            <p> Samuel is a talented software engineer with a strong background in computer science and software development. With a passion for solving complex problems and delivering high-quality, innovative solutions, Samuel has the ability to analyze requirements, design and implement efficient algorithms, and write clean and maintainable code. He has extensive experience with a variety of programming languages and software development methodologies, and he is committed to staying up-to-date with the latest trends and advancements in the field. Samuel is a collaborative team player who enjoys working with others to achieve common goals, and he has a proven track record of delivering successful software projects on time and within budget. With his technical expertise and dedication to quality, Samuel is an asset to any software development team.</p>
            <button className='primary-btn'>Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home