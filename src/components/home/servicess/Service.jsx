import React from 'react'
import ServiceData from './ServiceData'

const Service = () => {
  return (
      <div className='contain'>
        <section className="services topMargin">
          <div className="container">
            <div className="heading">
              <h3>MY SERVICES</h3>
              <h1>Interactive Services Offered Me</h1>
            </div>
          <div className="contain grid topMargin">
            {
              ServiceData.map((val) => {
                return (
                  <>
                    <div className="box">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
            </div>
          </div>
        </section>
      </div>
  )
}

export default Service