import { ArrowBackOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./watch.scss";
import Video from "../../video/video.mp4";

const Watch = () => {
  return (
    <div className="watch">
        <Link to="/" className="link">
      <div className="back">
        <ArrowBackOutlined />
      </div>
        </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={Video}
      />
    </div>
  );
};

export default Watch;
