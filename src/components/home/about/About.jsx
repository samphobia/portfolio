import React from 'react'


const About = () => {
  const data = [
    {
      title: "Who am I and What I do",
      desc1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, eos amet obcaecati omnis nihil unde tempore natus.",
      desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, eos amet obcaecati omnis nihil unde tempore natus.",
      desc3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, eos amet obcaecati omnis nihil unde tempore natus.",
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