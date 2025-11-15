import { useNavigate } from "react-router-dom";

import useAppContext from "../hooks/useAppContext";

export default function CommentItem({ title, id, source, item }) {
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
    navigate(`/news/${id}`);
  }

  console.log("like", like);

  return (
    <li className="home__item">
      <div className="item__img-div" onClick={handleMove}></div>
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
        <h2 className="item__title">
          <a className="item__text" href={item.url}>
            {title}
          </a>
        </h2>
      </div>
    </li>
  );
}
