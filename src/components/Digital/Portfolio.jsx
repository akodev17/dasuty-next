import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Portfolio = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://dasuty-backend.onrender.com/api/portfolios?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      let response = data.data.data;
      console.log(response);
      setData(response);
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 5);
  };

  return (
    <section
      className="portfolio section-padding bg-gray style-1"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">
                {t("portfolio1")}
              </h6>
              <h2
                className="wow fadeInUp"
                dangerouslySetInnerHTML={{
                  __html: `${t("latestProjects")}`,
                }}
              ></h2>
            </div>
          </div>
        </div>
        <div className="content wow fadeIn slow">
          <div className="portfolio-slider">
            <Swiper
              className="swiper-container"
              slidesPerView={3}
              spaceBetween={30}
              speed={1000}
              pagination={{
                el: ".portfolio-slider .swiper-pagination",
              }}
              navigation={{
                nextEl: ".portfolio-slider .swiper-button-next",
                prevEl: ".portfolio-slider .swiper-button-prev",
              }}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                delay: 4000,
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                787: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="portfolio-card">
                    <div className="img">
                      <img src={`${item.attributes.image.data.attributes.url}`} alt="" />
                    </div>
                    <div className="info">
                      <h5>
                        <Link href={`${item.id}`}>
                          <a>{item.attributes.title}</a>
                        </Link>
                      </h5>
                      <small className="d-block color-main text-uppercase">
                          <a href="#" className="me-1">
                            {item.attributes.category}
                          </a>
                      </small>
                      <div className="text">{item.attributes.desc}</div>
                      <div className="tags">
                          <a href="#" className="me-1">
                            {item.attributes.type}
                          </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination"></div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/projects/prog/shap_r.png"
        alt=""
        className="shap_r"
      />
      <img
        src="/assets/img/projects/prog/shap_l.png"
        alt=""
        className="shap_l"
      />
    </section>
  );
};

export default Portfolio;
