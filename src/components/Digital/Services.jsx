import Link from "next/link";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="services section-padding style-1" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">
                {t("ourServices")}
              </h6>
              <h2 className="wow fadeInUp">{t("ourServices")}</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-box mb-4 wow fadeInUp">
                <h5>
                  <Link href="#">
                    <a id="service_01">{t("service_01")}</a>
                  </Link>
                  <span className="num">01</span>
                </h5>
                <div className="icon">
                  <img src={"/assets/img/icons/serv_icons/1.png"} alt="" />
                </div>
                <div className="info">
                  <div className="text">{t("service_01_desc")}</div>
                  <div className="tags">
                    <a className="m-1" href="#">
                      {t("service_01_details")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-box mb-4 wow fadeInUp">
                <h5>
                  <Link href="#">
                    <a id="service_01">{t("service_02")}</a>
                  </Link>
                  <span className="num">02</span>
                </h5>
                <div className="icon">
                  <img src={"/assets/img/icons/serv_icons/2.png"} alt="" />
                </div>
                <div className="info">
                  <div className="text">{t("service_02_desc")}</div>
                  <div className="tags">
                    <a className="m-1" href="#">
                      {t("service_02_details")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-box mb-4 wow fadeInUp">
                <h5>
                  <Link href="#">
                    <a id="service_01">{t("service_03")}</a>
                  </Link>
                  <span className="num">03</span>
                </h5>
                <div className="icon">
                  <img src={"/assets/img/icons/serv_icons/3.png"} alt="" />
                </div>
                <div className="info">
                  <div className="text">
                    {t("Trust our top minds to eliminate workflow pain points, implement new tech & app.")}
                  </div>
                  <div className="tags">
                    <a className="m-1" href="#">
                      {t("service_03_details")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/services/ser_shap_l.png"
        alt=""
        className="ser_shap_l"
      />
      <img
        src="/assets/img/services/ser_shap_r.png"
        alt=""
        className="ser_shap_r"
      />
    </section>
  );
};

export default Services;
