import React from 'react'
import { tours } from '../data'
import Title from './Title'





const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title title="featured" subtitle="tours"/>

    <div className="section-center featured-center">
      {tours.map((tour)=>{
        return(
        <article className="tour-card" key={tour.id}>
        <div className="tour-img-container">
          <img src={tour.images} className="tour-img" alt={tour.title} />
          <p className="tour-date">august 26th, 2021</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{tour.title}</h4>
          </div>
          <p>
           {tour.description}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {tour.location}
            </p>
            <p>{tour.duration} days</p>
            <p>from ${tour.cost}</p>
          </div>
        </div>
      </article>
        )
      })}
    </div>
  </section>
  )
}
export default Tours