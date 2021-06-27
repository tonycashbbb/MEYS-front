import React from 'react'
import './AboutUs.css'
import SectionHeader from "../SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
      <section className="aboutUs">
        <div className="container">

          <SectionHeader
            suptitle={"Co my robimy"}
            title={"Historia o nas"}
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda accusamus nesciunt excepturi\n" +
            "          doloribus porro, sequi repellendus esse molestias dolorem officiis quos ipsum ut sit numquam consectetur\n" +
            "          omnis facilis nostrum iusto."}
          />

          <div className="card">
            <div className="card__item">
              <div className="card__inner">
                <div className="card__img">
                  <img src="https://www.mtdtraining.com/wp-content/uploads/2018/08/Motivated-office-team.jpg" alt="img"/>
                </div>
                <div className="card__text">super team</div>
              </div>
            </div>
            <div className="card__item">
              <div className="card__inner">
                <div className="card__img">
                  <img src="https://www.healthcareitnews.com/sites/hitn/files/amazon-lab-stock-712_0_0_0_0.jpg" alt="img"/>
                </div>
                <div className="card__text">super product</div>
              </div>
            </div>
            <div className="card__item">
              <div className="card__inner">
                <div className="card__img">
                  <img src="https://www.ceosuite.com/wp-content/uploads/2017/10/jakarta-stock-exchange-office-2.jpg?x27776" alt="img"/>
                </div>
                <div className="card__text">super office</div>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}

export default AboutUs