import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './service.css';
import {data} from './data.js';

export const Service = () => {

  return (
    <>
{/* team logo */}
    <div className='team-logo'>
        <h1>Our Services</h1>
    </div>
{/* service cards */}
    <div className='service-container'>
      {
        data.map((item)=>{
          return(
            <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div className='service-card'>
                <img src={item.image} alt={item.heading} />
                <h1>{item.heading}</h1>
                <p>{item.discription}</p>
            </div>
            </AnimationOnScroll>

          )
        })
      }
    </div>
    </>
  )
}
