import React from "react"

function Factcard(props) {
  const { inf, info } = props
  console.log(info)
  const { fact, fact_id } = inf
  return (
    <div className="factcard">
      <h1>Fact :{fact_id}</h1>
      <hr />
      <br />
      <h4>{fact}</h4>
    </div>
  )
}

export default Factcard
