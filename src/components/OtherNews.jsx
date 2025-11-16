import { useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

export default function OtherNews({ urlToImage, title, publishedAt, item }) {
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
    <li className="flex items-center gap-[15px] mt-[25px]">
      <img
        src={urlToImage}
        onClick={handleMove}
        className="otherItem-img "
        alt=""
      />
      <div className="">
        <h2 className="otherItem-title">{title}</h2>

        <div className="relative">
          <span className="otherItem-span">
            {new Date(publishedAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            <div className="item__like" onClick={handleAddtoLike}>
              <i
                className={`bi ${
                  like.find((el) => el.title == item.title)
                    ? "bi-heart-fill active"
                    : "bi-heart"
                } text-[18px]`}
              ></i>
            </div>
          </span>
        </div>
      </div>
    </li>
  );
}
