export default function MainCard(props) {
  return (
    <div className="card">
      <div className="img-wrap">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
          alt="영화 포스터"
        />
      </div>
      <div className="info">
        <h2 className="info-title">
          {props.movie.original_title} ( {props.movie.title} )
        </h2>
        <span>개봉일 {props.movie.release_date}</span>
      </div>
      <style jsx>
        {`
          .card {
            margin-bottom: 40px;
          }

          .img-wrap {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            overflow: hidden;
          }

          img {
            height: 100%;
          }

          .info-title {
            font-size: 16px;
          }
        `}
      </style>
    </div>
  );
}
