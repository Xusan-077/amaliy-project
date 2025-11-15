import { useTranslation } from "react-i18next";
import CommentItem from "../components/CommentItem";
import useAppContext from "../hooks/useAppContext";

export default function Saralangan() {
  const { like } = useAppContext();

  const { t } = useTranslation();

  return (
    <section className="saralangan">
      <div className="container">
        <div className="saralangan__inner">
          {like.length ? (
            <>
              <h2 className="saralangan__title">{t("header.sorted")}</h2>

              <ul className="home__list">
                {like.map((el, index) => (
                  <CommentItem item={el} key={index} {...el} />
                ))}
              </ul>
            </>
          ) : (
            <p className="saralangan__bosh">{t("header.sorted")} yo`q</p>
          )}
        </div>
      </div>
    </section>
  );
}
