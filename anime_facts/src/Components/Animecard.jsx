import React from "react"
import { useNavigate } from "react-router-dom"

function Animecard(props) {
  const navigate = useNavigate();
  const{inf} =props
  const { anime_id, anime_name, anime_img } = inf
  return (
    <div className="animebox" onClick={()=>{
      console.log(anime_id)
      navigate(`/anime_facts/${anime_name}`)
    }}>
      <h4>{anime_name}</h4>
      <hr/>
      <img className="cardimg" src={anime_img} alt="not found" />
      

    </div>
  )
}

export default Animecard
