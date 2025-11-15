import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CommentItem from "../components/CommentItem";

export default function Home() {
  const { t } = useTranslation();

  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState();

  async function get() {
    try {
      setIsLoading(true);
      const res =
        await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c
  `);

      setIsLoading(false);

      setNews(res.data.articles);
    } catch (err) {
      setError(err.massage);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, []);

  console.log(news);

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home__inner">
            <h2 className="home__title">{t("main.titel")}</h2>

            <div className="home__content">
              <div className="home__right">
                <ul className="home__list">
                  {isLoading
                    ? Array.from({ length: 10 }).map((_, index) => (
                        <li key={index} className="home__item skeleton-item">
                          <div className="item__img-div">
                            <div className="skeleton skeleton-img"></div>
                          </div>
                          <div>
                            <h2 className="skeleton skeleton-title"></h2>
                            <div className="item__bottom">
                              <span className="skeleton skeleton-source"></span>
                              <span className="skeleton skeleton-date"></span>
                            </div>
                          </div>
                        </li>
                      ))
                    : error
                    ? `${error}`
                    : news.map((el, index) =>
                        index < 12 ? (
                          <CommentItem
                            news={news}
                            item={el}
                            id={index + 1}
                            key={index}
                            {...el}
                          />
                        ) : (
                          ""
                        )
                      )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
