import { useEffect, useRef } from 'react';
import navbarScrollEffect from "@common/navbarScrollEffect";
import scrollToSection from '@common/scrollToSection';
import { useTranslation } from 'react-i18next';
const OnePageNav = () => {
  const navbarRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-scroll-index]');

    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const index = section.getAttribute('data-scroll-index');
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll + 200 > offset && scroll + 200 < offset + height) {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.add('active');
        } else {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.remove('active');
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#" onClick={scrollToSection}>
          <img src="/assets/img/logos/das-logo.png" width={75} data-scroll-nav="0" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link" data-scroll-nav="1" onClick={scrollToSection}>
                {t('aboutUs')}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-scroll-nav="2" onClick={scrollToSection}>
              {t('services')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll-nav="3" onClick={scrollToSection}>
              {t('whyUs')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll-nav="4" onClick={scrollToSection}>
              {t('portfolio')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll-nav="5" onClick={scrollToSection}>
              {t('testimonials')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll-nav="6" onClick={scrollToSection}>
              {t('blog')}
              </a>
            </li>
          </ul>
          <div className="nav-side">
            <div className="hotline pe-4">
              <div className="icon me-3">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="cont">
                <small className="text-muted m-0">{t('hotline')}</small>
                <h6>71 237 9023</h6>
              </div>
            </div>
            <div className="qoute-nav ps-4">
              <a href="#0" className="btn sm-butn butn-gard border-0 text-white" data-scroll-nav="7">
                <span>{t('freeQuote')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default OnePageNav