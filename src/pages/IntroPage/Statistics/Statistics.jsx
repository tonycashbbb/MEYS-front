import React from 'react';
import './Statistics.css'

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="container">

        <div className="stat">
          <div className="stat__item">
            <div className="stat__count">142</div>
            <div className="stat__text">tendera</div>
          </div>
          <div className="stat__item">
            <div className="stat__count">123</div>
            <div className="stat__text">zadowolonych klientów</div>
          </div>
          <div className="stat__item">
            <div className="stat__count">87</div>
            <div className="stat__text">zwycięzców Tendera</div>
          </div>
          <div className="stat__item">
            <div className="stat__count">197</div>
            <div className="stat__text">użytkowników</div>
          </div>
          <div className="stat__item">
            <div className="stat__count">69</div>
            <div className="stat__text">Kubków kawy</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Statistics