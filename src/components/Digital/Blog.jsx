import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Blog = () => {
  const showDetails = (event) => {
    const detailsEl = event.currentTarget.querySelector(".text");
    detailsEl.style.display = "block";
  };

  const hideDetails = (event) => {
    const detailsEl = event.currentTarget.querySelector(".text");
    detailsEl.style.display = "none";
  };

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(7);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://dasuty-backend.onrender.com/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      let response = data.data.data;
      console.log(response);
      setData(response);
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 7);
  };

  return (
    <>
      <section
        className="blog section-padding bg-gray style-1"
        data-scroll-index="6"
      >
        <div className="container">
          <div className="row">
            <div className="col offset-lg-1">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">
                  our press
                </h6>
                <h2 className="wow fadeInUp">
                  Latest Posts <span className="fw-normal">From Our Press</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="blog_slider">
              <Swiper
                className="swiper-container"
                slidesPerView={3}
                spaceBetween={30}
                speed={1000}
                pagination={{
                  el: ".blog_slider .swiper-pagination",
                }}
                navigation={{
                  nextEl: ".blog_slider .swiper-button-next",
                  prevEl: ".blog_slider .swiper-button-prev",
                }}
                mousewheel={false}
                keyboard={true}
                autoplay={{
                  delay: 4000,
                }}
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
                    slidesPerView: 4,
                  },
                }}
              >
                {data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="blog_box"
                      onMouseMove={showDetails}
                      onMouseLeave={hideDetails}
                    >
                      <div className="tags">
                        <a href="#">{item.attributes.category}</a>
                      </div>
                      <div className="img">
                        <img
                          src={`${item.attributes.image.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <h6>
                          <Link href={`${item.id}`}>
                            <a>{item.attributes.title}</a>
                          </Link>
                        </h6>
                        <div className="auther">
                          <span>
                            {/* {
                            <img className="auther-img" src={item.attributes.authorPic.data.attributes.url
                            } alt="" /> 
                            } */}
                            <small>
                              <a href="#">By {item.attributes.author}</a>
                            </small>
                          </span>
                          <span>
                            <i className="bi bi-calendar2"></i>
                            <small>
                              <a href="#">{item.attributes.date}</a>
                            </small>
                          </span>
                        </div>
                        <div
                          className="text"
                          dangerouslySetInnerHTML={{
                            __html: `${item.attributes.desc}`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
