import { useNavigate } from "react-router-dom";

import useAppContext from "../hooks/useAppContext";

export default function CommentItem({
  title,
  thin,
  id,
  source,
  urlToImage,
  item,
}) {
  const { like, setLike, setNewData } = useAppContext();

  const navigate = useNavigate();

  function handleAddtoLike() {
    const isLiked = like.find((el) => el.title == item.title);

    if (isLiked) {
      setLike(like.filter((el) => el.title !== item.title));
    } else {
      setLike([...like, item]);
    }
  }

  function handleMove() {
    setNewData(item);
    navigate(`/news/${title}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <li className={`${thin ? "home__item--active" : "home__item"} `}>
      {urlToImage ? (
        <img
          onClick={handleMove}
          src={urlToImage}
          alt=""
          className={`${thin ? "item__img--active" : "item__img"} `}
        />
      ) : (
        <div
          className={`${thin ? "item__img-div--active" : "item__img-div"} `}
          onClick={handleMove}
        ></div>
      )}
      <div className="item__content">
        <div className="item__bottom">
          <span className="item__source-name">{source?.name}</span>
          <div className="item__like" onClick={handleAddtoLike}>
            <i
              className={`bi ${
                like.find((el) => el.title == item.title)
                  ? "bi-heart-fill active"
                  : "bi-heart"
              } text-[18px]`}
            ></i>
          </div>
        </div>
        <h1
          className={`${thin ? "item__text--active" : "item__text"} `}
          href={item.url}
        >
          {title}
        </h1>
      </div>
    </li>
  );
}
