import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import Factcard from './Factcard'
import { useParams } from 'react-router-dom'
export default function Animecardfacts() {
    const{anime_name}=useParams()
    const [info, setinfo] = useState()
  useEffect(() => {
    axios
      .get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime_name}`)
      .then((res) => {
        const respdata = res.data
        setinfo(respdata)
      })
  }, [])

  console.log(info)
  return (
    <div>
    
      {info ? (
        <>
        <div className="main">
          <p className="head-card"> The <strong >{anime_name}</strong> Facts</p>
          <div className="maincarddiv">
            {info.data.map((inf, key) => {
              return <Factcard key={inf.fact_id} inf={inf} info={info} />
            })}
          </div>
        </div>
        </>
      ) : (
        console.log(false)
      )}
      
    </div>
  )
}
