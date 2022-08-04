export default function MainCard(props) {
  return (
    <div className="card" key={props.index}>
      <img
        src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
        alt="영화 포스터"
      />
      <div className="info">
        <h2>
          {props.movie.original_title} ( {props.movie.title} )
        </h2>
      </div>
    </div>
  );
}
