import { useTranslation } from "react-i18next";
const ChooseUs = () => {
  const { t } = useTranslation();
  return (
    <section
      className="choose-us section-padding pt-0 style-1"
      data-scroll-index="3"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">
                  {t("whyChooseUs")}
                </h6>
                <h2 className="wow fadeInUp">
                  {t("boostBusiness")}
                </h2>
              </div>
              <div className="text">
                {t("assistBusiness")}
              </div>
              <ul>
                  <li className="wow fadeInUp d-flex flex-wrap">
                    <span className="icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <h6>{t("latestSolutions")}</h6>
                  </li>
                  <li className="wow fadeInUp d-flex flex-wrap">
                    <span className="icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <h6>{t("paymentGateways")}</h6>
                  </li>
                  <li className="wow fadeInUp d-flex flex-wrap">
                    <span className="icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <h6>{t("aiLearning")}</h6>
                  </li>
                  <li className="wow fadeInUp d-flex flex-wrap">
                    <span className="icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <h6>{t("support")}</h6>
                  </li>
              </ul>

              {/* <Link href="/page-about-5">
                <a className="btn butn-gard border-0 text-white wow fadeInUp">
                  <span>How We Works</span>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/choose_us/choose_lines.svg"
        alt=""
        className="choose-us-img"
      />
      <img
        src="/assets/img/choose_us/choose_brands.png"
        alt=""
        className="choose-us-brands"
      />
      <img
        src="/assets/img/choose_us/choose_bubbles.png"
        alt=""
        className="choose-us-bubbles"
      />
    </section>
  );
};

export default ChooseUs;
