import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="section-padding style-1" data-scroll-index="0">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-60">
                  <h6 className="color-main text-uppercase">{t("itagency")}</h6>
                  <h2>
                    {t("technology")} <span className="fw-normal">{t("solution")}</span>
                  </h2>
                </div>
                <div className="text">
                  {t("about")}
                </div>
                <div className="bttns mt-5">
                  <Link href="#">
                    <a className="btn btn-dark">
                      <span>{t("servicess")}</span>
                    </a>
                  </Link>
                  <a href="https://www.instagram.com/p/C48RmJPMocC/" className="vid-btn" onClick={openVideo}>
                    <i className="bi bi-play wow heartBeat infinite slow"></i>
                    <span>{t("showreal")}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="img">
                <img src="/assets/img/header/head.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/head_shape_r.png" alt="" className="head-shape-r wow" />
      <img src="/assets/img/header/head_shape_l.png" alt="" className="head-shape-l wow" />
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="https://www.instagram.com/p/C48RmJPMocC/"
              autoplay
              isOpen={isOpen}
              videoId="https://www.instagram.com/p/C48RmJPMocC/"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header