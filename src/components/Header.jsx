import { useState } from "react";
import Logo from "../assets/images/Logo.svg";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [isSearch, setIsSearch] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo-link">
            <img src={Logo} alt="" className="header__logo" />
          </Link>

          <div className="header__left">
            <div className="header__seacr-div">
              {!isSearch && (
                <button
                  className="header__search-btn"
                  onClick={() => setIsSearch(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
              )}

              {isSearch && (
                <div className="header__search-icon-div">
                  <div className="header__search-icon">
                    <i className="bi bi-search"></i>
                  </div>

                  <input
                    className="header__search"
                    type="text"
                    placeholder={t("header.search")}
                  />
                  <button
                    className="header__search-cancle"
                    onClick={() => setIsSearch(false)}
                  >
                    <i class="bi bi-x"></i>
                  </button>
                </div>
              )}
            </div>
            <div className="header__saralanganlar">
              <ul className="header__list">
                <li className="header__item">
                  <Link className="header__link" to="/">
                    {t("header.home")}
                  </Link>
                </li>
                <li className="header__item">
                  <Link className="header__link" to="/saralanganlar">
                    {t("header.sorted")}
                  </Link>
                </li>
              </ul>
            </div>
            <select
              onChange={(evt) => i18n.changeLanguage(evt.target.value)}
              className="header__language-select"
            >
              <option value="uz">uz</option>
              <option value="en">en</option>
              <option value="ru">ru</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
