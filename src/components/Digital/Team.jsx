import teamMembers from "@data/Digital/team.json";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="team section-padding pt-0 style-1">
      <div className="container">
        <div className="team_slider"></div>
        <div className="section-head mb-60 text-center">
          <h6 className="color-main text-uppercase wow fadeInUp mt-5">
            meet our expert
          </h6>
          <h2 className="wow fadeInUp">
            Clients Satisfaction,{" "}
            <span className="fw-normal">Our Reputation</span>
          </h2>
        </div>
        <div className="content d-flex justify-content-center align-items-center">
          <Swiper
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 2000,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide
                className="team_box wow fadeInUp"
                data-wow-delay={index * 0.2 + "s"}
                key={index}
              >
                <div className="avatar">
                  <img src={member.picture} alt="" />
                </div>
                <div className="info">
                  <h6>
                    <a href="#">{member.name}</a>
                  </h6>
                  <small>{member.position}</small>
                  {/* <div className="social_icons">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            <div className="mt-5">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            </div>
        </div>
        {/* <div className="bttns mt-4 text-center">
          <Link href="/page-about-5">
            <a className="btn btn-dark wow zoomIn me-2">
              <span>See All Team</span>
            </a>
          </Link>
          <Link href="/page-contact-5">
            <a className="btn butn-gard border-0 text-white wow zoomIn">
              <span>Join Our Team</span>
            </a>
          </Link>
        </div> */}
      </div>
      <img src="/assets/img/team/team_shap.png" alt="" className="team_shap" />
    </section>
  );
};

export default Team;
