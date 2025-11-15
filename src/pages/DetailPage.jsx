import { useEffect, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import axios from "axios";
import CommentItem from "../components/CommentItem";

export default function DetailPage({}) {
  const [news, setNews] = useState([]);
  const { newData } = useAppContext();

  console.log("newData", newData);

  function handleAddtoLike() {}

  async function get() {
    const res =
      await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c
  `);

    setNews(res.data.articles);
  }

  useEffect(() => {
    get();
  }, []);

  console.log(news);

  return (
    <section className="detail">
      <div className="container">
        <div className="detail__inner">
          <div className="detail__right">
            <h2 className="detail__title">{newData.title}</h2>
            <div className="detail__top">
              <span className="detail__source">{newData.source.name}</span>
              <div className="detail__like" onClick={handleAddtoLike}>
                {/* <i
                  className={`bi ${
                    like.find((el) => el.id === newData.id)
                      ? "bi-heart-fill active"
                      : "bi-heart"
                  } text-[18px]`}
                ></i> */}
              </div>
            </div>

            <div className="detail__img"></div>

            <p className="detail__description">{newData.description}</p>
          </div>
          <div className="detail__left">
            <ul className="detail__list">
              {news.map((el, index) => (
                <CommentItem item={el} key={index} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
