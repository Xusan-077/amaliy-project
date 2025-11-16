import { useEffect, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import axios from "axios";
import CommentItem from "../components/CommentItem";

export default function DetailPage({}) {
  const [news, setNews] = useState([]);
  const { newData, like, setLike } = useAppContext();

  const [show, setShow] = useState(false);

  function handleAddtoLike() {
    const inLike = like.find((el) => el.title == newData.title);

    if (inLike) {
      setLike(like.filter((el) => el.title != newData.title));
    } else {
      setLike([...like, newData]);
    }
  }

  async function get() {
    const res =
      await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c
  `);

    setNews(res.data.articles);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <section className="detail">
      <div className="container">
        <div className="detail__inner">
          <div className="detail__right">
            <h2 className="detail__title">{newData.title}</h2>
            <div className="detail__top">
              <span className="detail__source">{newData.source.name}</span>
              <div className="detail__like" onClick={handleAddtoLike}>
                <i
                  className={`bi ${
                    like.find((el) => el.title === newData.title)
                      ? "bi-heart-fill active"
                      : "bi-heart"
                  } text-[18px]`}
                ></i>
              </div>
            </div>

            <div className="detail__img">
              <img src={newData.urlToImage} alt="" className="detai__img" />
            </div>

            <p className="detail__description">{newData.description}</p>
            <p className="detail__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aliquam minima ab provident, in corrupti ea adipisci modi
              excepturi iste tempore architecto, quae quas officia libero.
              Eveniet sint pariatur corrupti omnis asperiores. Nesciunt corrupti
              aliquid minima sapiente ad quisquam error quo, in, earum deserunt
              sint exercitationem saepe cum recusandae architecto voluptatem
              quos temporibus aliquam voluptatum? Eos, recusandae, dolore quasi,
              accusantium ut tempora ipsa officiis pariatur accusamus nihil ea
              officia soluta sunt quaerat quibusdam praesentium aut laborum
              possimus nulla magni atque corporis quas ratione! Nam cumque
              aliquid, provident, aliquam placeat suscipit alias molestias
              saepe, corporis numquam exercitationem vero expedita impedit
              assumenda!
            </p>
            <p className="detail__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aliquam minima ab provident, in corrupti ea adipisci modi
              excepturi iste tempore architecto, quae quas officia libero.
              Eveniet sint pariatur corrupti omnis asperiores. Nesciunt corrupti
              aliquid minima sapiente ad quisquam error quo, in, earum deserunt
              sint exercitationem saepe cum recusandae architecto voluptatem
              quos temporibus aliquam voluptatum? Eos, recusandae, dolore quasi,
              accusantium ut tempora ipsa officiis pariatur accusamus nihil ea
              officia soluta sunt quaerat quibusdam praesentium aut laborum
              possimus nulla magni atque corporis quas ratione! Nam cumque
              aliquid, provident, aliquam placeat suscipit alias molestias
              saepe, corporis numquam exercitationem vero expedita impedit
              assumenda!
            </p>
          </div>
          <div className="detail__left">
            <ul
              className={`${show ? "detail__list--active" : "detail__list"} `}
            >
              {news.map((el, index) => (
                <CommentItem item={el} key={index} {...el} />
              ))}
            </ul>

            <button onClick={() => setShow(true)} className="show-more">
              Show All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
