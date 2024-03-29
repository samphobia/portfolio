import React from 'react'

const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES",
      heading: "Get the Best For Your Business",
      desc: "For your digital solutions, I am just a click away",
    }
  ]
  return (
    <>
      <section className="branding wrapper">
        <div className="container">
          {data.map((val) => {
            return (
              <div className="box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>
                <button className="primary-btn">Contact Us</button>
              </div>
            )
          })

          }
        </div>
      </section>
    </>
  )
}

export default Wrapper