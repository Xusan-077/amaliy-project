export default function NewsItem({}) {
  return (
    <li className="home__item">
      <div
        className="item__img-div"
        onClick={() => navigate(`/news/${item.id}`)}
      ></div>
      <div className="item__content">
        <div className="item__bottom">
          <span className="item__source-name">{source?.name}</span>
          <div className="item__like" onClick={handleAddtoLike}>
            <i
              className={`bi ${
                like.find((el) => el.id === item.id)
                  ? "bi-heart-fill active"
                  : "bi-heart"
              } text-[18px]`}
            ></i>
          </div>
        </div>
        <h2 className="item__title">
          <h3 className="item__text" href={item.url}>
            {title}
          </h3>
        </h2>
      </div>
    </li>
  );
}
