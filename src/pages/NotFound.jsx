import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="notFound">
      <img src="" alt="" className="notFound__img" />

      <span className="notFound-titel">404</span>
      <h2 className="notFound__titel">{t("notFound.title")}</h2>
      <p className="notFound__text">{t("notFound.text")}</p>
      <Link className="notFound__back" to="/">
        <i className="bi bi-arrow-left"></i>
        {t("notFound.back")}
      </Link>
    </div>
  );
}
