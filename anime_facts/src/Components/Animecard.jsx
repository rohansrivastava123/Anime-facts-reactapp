import React from "react"

function Animecard(props) {
  const{inf} =props
  const { anime_id, anime_name, anime_img } = inf
  return (
    <div className="animebox">
      <h4>{anime_name}</h4>
      <hr/>
      <img className="cardimg" src={anime_img} alt="not found" />
      

    </div>
  )
}

export default Animecard
