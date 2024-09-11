import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const TopNav = () => {
  const [active, setActive] = useState("en");

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLangChange = (lang) => {
    setActive(lang);
  };

  const getLangStyle = (lang) => {
    return {
      color: active === lang ? "white" : "#D3D3D3",
      cursor: "pointer",
      padding: "10px",
      background: "transparent",
      border: "none"
    };
  };

  // const handleMouseLeave = (event) => {
  //   const dropdown = event.target.classList.contains("dropdown")
  //     ? event.target
  //     : event.target.closest(".dropdown");
  //   const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
  //   const dropDownMenu = dropdown.querySelector(".dropdown-menu");

  //   dropDownToggler?.classList?.remove("show");
  //   dropDownMenu?.classList?.remove("show");
  // };

  return (
    <div className="top-navbar style-1">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="top-links">
                <div className="text text-white">
                  <i className="fas fa-bullhorn"></i>
                  <strong>{t("nowHiring")}</strong>
                  <span>
                    {" "}
                    <a href="#" className="p-0">
                      <u>{t("jobPosition")}</u>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="r-side">
                <div className="socail-icons d-flex justify-content-center align-items-center">
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
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <button
                  style={getLangStyle("en")}
                  onClick={() => changeLanguage("en")}
                  onClickCapture={() => handleLangChange('en')}
                >
                  EN
                </button>
                <button
                  style={getLangStyle("ru")}
                  onClick={() => changeLanguage("ru")}
                  onClickCapture={() => handleLangChange('ru')}
                >
                  RU
                </button>
                <button
                  style={getLangStyle("uz")}
                  onClick={() => changeLanguage("uz")}
                  onClickCapture={() => handleLangChange('uz')}
                >
                  UZ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
