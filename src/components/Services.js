import React from 'react'
import Title from './Title'

const Services = () => {
  return (
    
    <section className="section services" id="services">
     <Title title="our" subtitle="services"/>
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">Travel Health Insurance</h4>
            <p className="service-text">
            Before you go on a journey out of your normal abode, it is advisable to get a travel insurance to cover you on your entire stay abroad. Talk to us for a reliable travel insurance cover today!
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">Visa Application Assistance</h4>
            <p className="service-text">
            Adequate preparation and filling your visa application forms and submitting the right documents is the key to a successful visa application. We can assist you in getting this done the right way.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">Hotel Reservation</h4>
            <p className="service-text">
            Getting a good hotel during your vacation matters a lot, so, we can help you book and pay for a prestigious hotel for a memorable vacation
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Services