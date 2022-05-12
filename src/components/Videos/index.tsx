import "./style.sass";
import { useEffect, useState } from "react";
import getAllVideos from "../../services/get-all-videos";
import { Video } from "../../types";
import { Link } from "react-router-dom";

const Videos = () => {
  const [data, setData] = useState<Video[]>();
  const fetchData = async () => {
    const response = await getAllVideos();
    if (response) setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="videos-wrapper">
      <h1>React, Node and MySQL App</h1>
      <nav>
        <Link to="/">Go Back</Link>
      </nav>
      <div className="videos-grid">
        {data &&
          data.map((video): any => (
            <div className="video-card" key={video.id_video}>
              <Link to={`/videos/${video.id_video}`}>
                <h2>{video.nome_video}</h2>
                <h3>by</h3>
                <h3>{video.autor_video}</h3>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Videos;
