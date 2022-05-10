import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './team.css';

import team1 from '../../images/team1.png';
import team2 from '../../images/team2.png';
import team3 from '../../images/team3.png';
import team4 from '../../images/team4.png';
import team5 from '../../images/team5.png';


export const Team = () => {
  return (
    <>
    <section className='team-container'>
        <div className='team-logo'>
            <h1>Our Team</h1>
        </div>
        <div className='team-image'>
        <AnimationOnScroll animateIn="animate__fadeInDownBig">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
            <img src={team3} alt="team" />
            <img src={team4} alt="team" />
            <img src={team5} alt="team" />
        </AnimationOnScroll>
        </div>
        <div className='team-footer'></div>
    </section>
    </>
  )
}
