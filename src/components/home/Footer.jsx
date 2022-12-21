import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerr grid1">
          <div className="box">
            <img src="" alt="" />
            <p>orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, eos amet obcaecati omnis nihil unde tempore natus.</p>
            <div className="socialIcon">
              <i className="fab fa-facebook-f facebook">
              <FontAwesomeIcon icon={faLinkedin} color="#38d16a" />
              </i>
              <i class="fa-brands fa-twitter">
              <FontAwesomeIcon icon={faTwitter} color="1a4fb8" />
              </i>
              <i class="fa-brands fa-twitter">
              <FontAwesomeIcon icon={faGithub} color="0e0e0e" />
              </i>
            </div>
          </div>
          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
              <p> 3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Nov 2022</span>
            </div>
            <div className="text">
              <p> 3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Nov 2022</span>
            </div>
            <div className="text">
              <p> 3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Nov 2022</span>
            </div>
          </div>
          <div className="box">
            <h2>Get in Touch</h2>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, </p>
            <div className="icon">
              <i className='fa fa-location-dot'>
              <FontAwesomeIcon icon={faLocation} color="#38d16a" />
              </i>
              <label htmlFor=''>Location: 81 rasak baloogun Surulere, Lagos, Nigeria</label>
            </div>
            <div className="icon">
              <i className='fa fa-phone'>
              <FontAwesomeIcon icon={faPhone} color="#38d16a" />
              </i>
              <label htmlFor=''>Phone: +2348108673513</label>
            </div>
            <div className="icon">
              <i className="fa fa-envelope">
              <FontAwesomeIcon icon={faEnvelope} color="#38d16a" />
              </i>
              <label htmlFor="/">Email: samblakhole@gmail.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>VCopyright @2023. All rights reserved</p>
          <label htmlFor="">
            Designed & Developed by <span>KrexTech</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer