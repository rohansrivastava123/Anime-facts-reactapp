import React from "react"

function Factcard(props) {
  const { inf, info } = props
  console.log(info)
  const { fact, fact_id } = inf
  return (
    <div>
      <h1>{fact_id}</h1>
      <h4>{fact}</h4>
    </div>
  )
}

export default Factcard
