import React from 'react'
import { useParams } from 'react-router-dom'
export default function Animecardfacts() {
    const{anime_name}=useParams()
  return (
    <div><h1>{`All facts about an Anime ${anime_name}`}</h1></div>
  )
}
