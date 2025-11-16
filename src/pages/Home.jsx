import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CommentItem from "../components/CommentItem";
import OtherNews from "../components/OtherNews";

export default function Home() {
  const { t } = useTranslation();

  const [news, setNews] = useState([]);
  const [newNews, setNewNews] = useState([]);
  const [apple, setApple] = useState([]);
  const [tesla, setTesla] = useState([]);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);

  async function getNews() {
    try {
      setIsLoading(true);
      const res =
        await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c
  `);

      setIsLoading(false);

      setNewNews(res.data.articles);
    } catch (err) {
      setError(err.message || "getda xatolik");
    } finally {
      setIsLoading(false);
    }
  }

  async function get() {
    try {
      setIsLoading(true);
      const res =
        await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c
  `);

      setIsLoading(false);

      setNews(res.data.articles);
    } catch (err) {
      setError(err.message || "getda xatolik");
    } finally {
      setIsLoading(false);
    }
  }

  async function getApple() {
    try {
      setIsLoading(true);
      const res =
        await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2025-11-15&to=2025-11-15&sortBy=popularity&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c

  `);

      setIsLoading(false);

      setApple(res.data.articles);
    } catch (err) {
      setError(err.message || "getda xatolik");
    } finally {
      setIsLoading(false);
    }
  }

  async function getTesla() {
    try {
      setIsLoading(true);
      const res = await axios.get(`
https://newsapi.org/v2/everything?q=tesla&from=2025-10-16&sortBy=publishedAt&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c

  `);

      setIsLoading(false);

      setTesla(res.data.articles);
    } catch (err) {
      setError(err.message || "getda xatolik");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    get();
    getNews();
    getApple();
    getTesla();

    if (error) {
      setModal(true);
    }
  }, [error]);

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__top">
              <span className="modal__title">Error</span>
            </div>
            <div className="modal__bottom">
              <p className="modal__text">{error}</p>
            </div>
          </div>
        </div>
      )}

      <section className="web">
        <div className="container">
          <div className="web__inner">
            <div className="home__inner">
              <div className="home__inner__top">
                <h2 className="home__title">{t("main.titel")}</h2>
                <div className="home__content">
                  <div className="home__right">
                    <ul className="home__list">
                      {isLoading
                        ? Array.from({ length: 14 }).map((_, index) => (
                            <li
                              key={index}
                              className="home__item skeleton-item"
                            >
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
                            index < 14 ? (
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
              <div className="home__inner__bottom">
                <h2 className="home__title">{t("main.secontTitle")}</h2>

                <div className="home__content">
                  <div className="home__right">
                    <ul className="home__list--active">
                      {isLoading
                        ? Array.from({ length: 5 }).map((_, index) => (
                            <li
                              key={index}
                              className="home__item skeleton-item"
                            >
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
                        : newNews?.map((el, index) =>
                            index < 5 ? (
                              <CommentItem
                                thin
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
            <div className="home__top">
              <div className="otherNews__div">
                <h2 className="home__title">Apple</h2>

                <ul className="otherNews__list">
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, index) => (
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
                    : apple?.map((el, index) =>
                        index < 5 ? (
                          <OtherNews item={el} key={index} {...el} />
                        ) : (
                          ""
                        )
                      )}
                </ul>
              </div>
              <div className="otherNews__div">
                <h2 className="home__title">Tesla</h2>

                <ul className="otherNews__list">
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, index) => (
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
                    : tesla?.map((el, index) =>
                        index < 5 ? (
                          <OtherNews item={el} key={index} {...el} />
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
