import React from 'react'

const WrapperOne = () => {
  const data = [
    {
      num: "5",
      text: "AWARDS WON"
    },
    {
      num: "99%",
      text: "SATISFIED CLIENTS"
    },
    {
      num: "20",
      text: "CREATED PROJECTS"
    },
    {
      num: "40000",
      text: "LINES OF CODE"
    },
  ]
  return (
    <>
      <section className="branding wrapperOne">
        <div className="containerwr grid1">
          {data.map((val) => {
            return (
              <div className="box">
                <h1>{val.num}</h1>
                <p>{val.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default WrapperOne