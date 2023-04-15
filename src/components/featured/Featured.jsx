import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://i0.wp.com/pinklungi.com/wp-content/uploads/2019/08/Sacred-Games-Guruji.png?fit=1920%2C1280&ssl=1"
        alt=""
      />
      <div className="info">
        <img
          src="https://images.fanart.tv/fanart/sacred-games-5cf6badd11f03.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          nulla facilis omnis ratione dolorum consequuntur accusamus. Sed
          blanditiis odit dignissimos obcaecati quidem eos quasi at minima?
          Alias fugiat eligendi est!
        </span>
        <div className="buttons">
          <Link to="/watch" className="link">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
