import React from 'react'
import { useParams } from 'react-router-dom'
export default function Animespecificfact() {
    const{anime_name,fact_id}=useParams()
  return (
    <div><h1>{`Specific fact about a Anime ${anime_name} ${fact_id}`}</h1></div>
  )
}
