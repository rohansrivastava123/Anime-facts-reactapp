import React from "react"
import { useState ,useEffect} from "react"
import {AiOutlineArrowLeft ,AiOutlineArrowRight} from "react-icons/ai"
import SliderData from './SliderData.jsx'

export default function Frontdisplay() {
    const[currentSlide,setCurrentSlide] = useState(0)
    const slideLength =SliderData.length;

    const autoscroll = true
    let slideinterval;
    let intervaltime=5000;



    const nextSlide = () => {
      if(currentSlide === slideLength-1)
        setCurrentSlide(0)
      else  
        setCurrentSlide(currentSlide+1)
    }
    const prevSlide = () => {
      if(currentSlide === 0)
        setCurrentSlide(slideLength-1)  
      else  
        setCurrentSlide(currentSlide-1)
    }
    function auto()
    {
      slideinterval = setInterval(nextSlide, intervaltime);
    }


    useEffect(()=>
    {
      setCurrentSlide(0)
    },[])

    useEffect(()=>
    {
      if(autoscroll===true)
      {
        auto()
      }
      return ()=> clearInterval(slideinterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentSlide])


  return (
  <div className="slider">
    <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
    <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

    {SliderData.map((slide,index) => {
      return(
        <div className={index === currentSlide ? "slide current" : "slide"}key={index}>
        {
          index === currentSlide && (
            <>
              <img className="bgimg" src={slide.image} alt="not found" />
              <div className="content">
                <h4>{slide.anime}</h4>
                <h1>{slide.heading}</h1>
                <p>{slide.desc}</p>
                <hr/>
              </div>
            </>
          )
        }
        </div>
      )
    })}

  </div>
    
  )
}
