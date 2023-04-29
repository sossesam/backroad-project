import React from 'react'
import aboutImg from '../images/about.jpeg'
import Title from './Title'
import Footer from './Footer'
import NavBar from './NavBar'

const About = () => {
  return (
    <>
    <NavBar />
    <section className="section" id="about">
    <Title title="about" subtitle="us"/>

    <div className="section-center about-center">
      <div className="about-img">
        <img
          src={aboutImg}
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>WHO WE ARE?</h3>
        <h4>OUR MISSION</h4>
        <p>
        To be the most customer-centric travel company, where customers can find solutions to their travel needs, and at the lowest possible prices
        </p>
        <p>
        <h4>Our Core Values</h4>
          <li>INTEGRITY. Know and do what is right.</li>
          <li>RESPECT. Treating others, the way you want to be treated.</li>
          <li>RESPONSIBILITY. Embrace opportunities to contribute.</li>
          <li>SPORTSMANSHIP. Bring your best to all competition. </li>
          <li>SERVANT LEADERSHIP. Serve the common good. </li>
        </p>
        <a href="#About"className="btn">read more</a>
      </article>
    </div>
    
  </section>
  <Footer />
  </>
  )
}

export default About
