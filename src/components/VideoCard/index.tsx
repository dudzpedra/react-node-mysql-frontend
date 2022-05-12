import "./style.sass";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getVideo from "../../services/get_video";
import { Video } from "../../types";
import useForm from "../../hooks/use-form";
import updateVideo from "../../services/update-video";
import UIButton from "../ui/UIButton";

const VideoCard = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const name = useForm();
  const author = useForm();

  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    getVideo(id, setVideo);
  }, [id]);

  const update = async (event: any) => {
    event.preventDefault();
    await updateVideo(name.value, author.value, id);
    navigate("/videos", { replace: true });
  };
  return (
    <div>
      <div className="card-wrapper">
        <h2>{video && video.nome_video}</h2>
        <h3>{video && video.autor_video}</h3>
        <form onSubmit={update}>
          <h2>Fill out the form to update this course:</h2>
          <label htmlFor="name">New Course Name</label>
          <input required type="text" name="name" id="name" {...name} />
          <label htmlFor="author">New Author</label>
          <input required type="text" name="author" id="author" {...author} />
          <UIButton>Update</UIButton>
        </form>
        <nav>
          <Link to="/videos">GO BACK</Link>
        </nav>
      </div>
    </div>
  );
};

export default VideoCard;
