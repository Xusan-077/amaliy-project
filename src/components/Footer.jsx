import { Link } from "react-router-dom";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import telegram from "../assets/icons/telegram.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";

import appstore from "../assets/icons/appstore.svg";
import googleplay from "../assets/icons/googleplay.svg";
import appgallary from "../assets/icons/appgallary.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <Link to="/" className="footer__logo-link">
              <img
                src="https://qalampir.uz/assets/brand/Symbol.svg"
                alt=""
                className="footer__logo"
              />
            </Link>
          </div>
          <div className="footer__right">
            <div className="footer__top">
              <div className="footer__top-left">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link className="footer__link" to="/sayt-haqida">
                      {t("footer.list.item1")}
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" to="/bizdes">
                      {t("footer.list.item2")}
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" to="/aloqa">
                      {t("footer.list.item3")}
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" to="/arxiv">
                      {t("footer.list.item4")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer__icons">
                <img src={facebook} alt="" className="footer__icon" />
                <img src={instagram} alt="" className="footer__icon" />
                <img src={telegram} alt="" className="footer__icon" />
                <img src={twitter} alt="" className="footer__icon" />
                <img src={youtube} alt="" className="footer__icon" />
              </div>
            </div>
            <div className="footer__middle">
              <p className="footer__text">
                {t("footer.company")}
                <br />
                {t("footer.firstText")}
                <br />
                <br />
                {t("footer.secontTitle")}
                <br />
                <br />
                {t("footer.secondText")}
                <br />
                {t("footer.thiredText")}
              </p>
              <div className="footer__action-icons">
                <img src={appstore} alt="" className="footer__action-icon" />
                <img src={googleplay} alt="" className="footer__action-icon" />
                <img src={appgallary} alt="" className="footer__action-icon" />
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__span-div">
                <span className="footer__span">16+</span>
              </div>
              <span className="footer__bottom-span">
                {t("footer.bottomTitle")}
              </span>
              <Link to="/" className="footer__logo-link">
                <img
                  src="https://qalampir.uz/assets/brand/Symbol.svg"
                  alt=""
                  className="footer__logo--active"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
