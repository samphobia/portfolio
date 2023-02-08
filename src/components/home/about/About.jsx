import React from 'react'


const About = () => {
  const data = [
    {
      title: "Who am I and What I do",
      desc1: "Full-stack development: Ability to design and implement end-to-end solutions from the front-end to the back-end",
      desc2: "Data modeling and database design: Experience with relational and NoSQL databases, as well as data warehousing and big data technologies",
      desc3: "Cloud computing: Hands-on experience with cloud platforms such as AWS and GCP, including design and deployment of scalable, highly available systems",
      desc4: "DevOps: Skilled in automation and configuration management using tools such as Docker and Jenkins",
      cover: "images/assets2.png"
    }
  ]
  return (
    <>
      <section className="about topMargin">
        <div className="container flex">
          {data.map((val) => {
              return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>About Me</h3>
                    <h1>{val.title}</h1>
                  </div>
                  <p>{val.desc1}</p>
                  <p>{val.desc2}</p>
                  <p>{val.desc3}</p>
                  <p>{val.desc4}</p>
                  <button className='primary-btn'>Download CV</button>
                </div>
                <div className="right ">
                  <div className="img">
                    <img src={val.cover} alt='' />
                  </div>
                </div>
              </>
              )
            })
          }
          </div>
      </section>
    </>
  )
}

export default About