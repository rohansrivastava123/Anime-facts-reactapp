import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import cardbg from "../images/cardbg.jpg"
import Animecard from "./Animecard"
import Errorpage from "./Errorpage"
function Cardshow() {
  const [anime, setAnimes] = useState()
  const [info, setinfo] = useState()
  useEffect(() => {
    axios
      .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
      .then((res) => {
        const respdata = res.data
        setAnimes(respdata)
        setinfo(respdata.data)
      }).catch((err)=>{
        console.log("error loading the data "+ err)
      })
  }, [])

  console.log(info)

  return (
    <div>
    
      {anime ? (
        <>
        <div className="main">
          <p className="head-card mainshow"> The<strong >Anime</strong>Database</p>
          <div className="maincarddiv">
            {info.map((inf, key) => {
              return <Animecard key={inf.anime_id} inf={inf} />
            })}
          </div>
        </div>
        </>
      ) : (<Errorpage />
      )}
      
    </div>
  )
}

export default Cardshow
