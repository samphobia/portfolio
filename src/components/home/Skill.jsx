import React from 'react'

const Skill = () => {
  const Progress = ({done, title}) => {
    return (
      <div className="progress">
        <div className="progress-done" style={{opacity: 1, width: `${done}%`}}>
          <h4>{title}</h4>
          <h4>{done}</h4>
        </div>
      </div>
    )
  }
  const data = [
    {
      title: "Everyday is a New Challenge",
      para: "orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, eos amet obcaecati omnis nihil unde tempore natus.",
      para1: "orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim corporis eius suscipit sit ab, eos amet obcaecati omnis nihil unde tempore natus."
    }
  ]
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3>WHY CHOOSE US</h3>
            <h1>Some Of My Skills</h1>
          </div>
          <div className="content flex">
            <div className="left topMargin">
              <Progress done='90' title='HTML' />
              <Progress done='90' title='CSS' />
              <Progress done='90' title='JavaScript' />
              <Progress done='90' title='ReactJs' />
            </div>
            <div className="right mtop">
            {data.map((val) => {
              return (
                <>
                  <h1>{val.title}</h1>
                  <p>{val.para}</p>
                  <p>{val.para1}</p>
                  <button className='primary-btn'>Hire Me</button>
                </>
              )
            })}
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill