import { useState, useEffect, useRef } from 'react';
import CountTo from '../CountTo';
import Link from 'next/link';
import aboutData from '@data/Digital/about.json';
import { useTranslation } from 'react-i18next';

const About = () => {
  const numbersSectionRef = useRef(null);
  const [position, setPosition] = useState({ from: 300, to: 500 });
  const { t } = useTranslation();

  useEffect(() => {
    const numbersSection = numbersSectionRef.current;
    const numbersSectionHeight = numbersSection.offsetHeight;
    const numbersSectionTop = numbersSection.offsetTop;

    const Position = { from: numbersSectionTop - numbersSectionHeight - 100, to: numbersSectionTop + numbersSectionHeight };

    setPosition(Position);
  }, []);

  return (
    <section className="about style-1" data-scroll-index="1">
      <div className="container">
        <div className="content">
          <div className="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
            { 
              aboutData.logos.map((logo, index) => (
                <a href="#" className="logo wow fadeInUp" data-wow-delay={index * 0.2 + "s"} key={index}>
                  <img src={logo} alt="" />
                </a>
              ))
            }
          </div>
          <div className="about-info">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="title">
                  <h3 className=" wow fadeInUp slow">“{t("quote")}”</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h6 className=" wow fadeInUp slow">
                   {t("help")}
                  </h6>
                  <p className=" wow fadeInUp slow">
                    {t("partner")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-numbers" ref={numbersSectionRef}>
            <div className="row">
              {
                aboutData.numbers.map((item, index) => (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="num-item wow fadeInUp" data-wow-delay="0">
                      <div className="num">
                        <CountTo className="counter" from={0} to={item.number} speed={1500} position={position} />
                        { item.operator && (<span>{typeof item.operator === 'string' ? item.operator : <i className="fas fa-plus"></i>}</span>) }
                      </div>
                      <div className="inf">
                        { item.info }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <img src="/assets/img/about/num_shap.png" alt="" className="about_shap" />
        </div>
      </div>
    </section>
  )
}

export default About