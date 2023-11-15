import { useState } from 'react'
import React from 'react'
import {ImQuotesLeft} from "react-icons/im"
import Card from './Card'
import { testimonials } from '../data'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import Sectionhead from './Sectionhead'

const Testimonials = () => {
    const[index,setIndex] = useState(0);
    const{name, quote, job, avatar} = testimonials[index];
    const prevtest = () => {
      setIndex(prev => prev - 1);
      if(index <= 0) {
       setIndex(testimonials.length - 1);
      }
    }
    const nexttest = () => {
      setIndex(prev => prev + 1);
      if(index >= testimonials.length-1) {
       setIndex(0);
      }
    }
  return (
    <div>
      <section className="testimonials">
         <div className="container testimonials_container">
            <Sectionhead icon = {<ImQuotesLeft/>} title="Testimonials" className="testimonials_head"/>
            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src = {avatar} alt= {name} />
                    </div> 
                    <p className='testimonial_quote'>
                        {`"${quote}"`}
                    </p>
                    <h5>{name}</h5>
                    <small className='testimonial_title'>{job}</small>
               </Card>
               <div className="testimonials_btn-container">
                <button className="testimonials_btn" onClick={prevtest}>
                <IoIosArrowDropleftCircle />
                </button>
                <button className="testimonials_btn" onClick={nexttest}>
                <IoIosArrowDroprightCircle />
                </button>
               </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
