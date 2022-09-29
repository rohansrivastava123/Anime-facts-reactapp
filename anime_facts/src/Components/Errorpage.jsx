import React from 'react'
import animebg from '../images/animebg.jpg'
import {useNavigate} from 'react-router-dom'
function Errorpage() {
    const navigate = useNavigate()
  return (
    <div>
        <img className="errorbg" src={animebg} alt="not found" />
        <div className='errorhead'>
        <h3 >Something Went Wrong :( Failed to Fetch the API data</h3>
        <br/>
        <hr/>
        <br/>
        <button onClick={() => {
            navigate(`/Home`)
        }} > Try Again</button>
        </div>
    </div>)
}

export default Errorpage