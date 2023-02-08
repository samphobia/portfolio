import React from 'react'

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Digital Marketing",
      desc: "We can help you create an effecting online presence"
    },
    {
      id: "02",
      heading: "Social Media managing",
      desc: "give your social pages an edge over competitors"
    },
    {
      id: "03",
      heading: "Search Engine optimization",
      desc: "Leverage on the power of search engines"
    }
  ]
  return (
    <>
      <section className='branding mtop'>
        <div className="container grid">
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className="text">
                  <h1>{value.id}</h1>
                </div>
                <div className="para">
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding