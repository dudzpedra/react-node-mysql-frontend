import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/use-form";
import createVideo from "../../services/create-video";
import UIButton from "../ui/UIButton";
import "./style.sass";

const VideoForm = () => {
  const name = useForm();
  const author = useForm();
  const navigate = useNavigate();

  const submit = async (ev: any) => {
    ev.preventDefault();
    await createVideo(name.value, author.value);
    navigate("/videos", { replace: true });
  };

  return (
    <div className="video-form-wrapper">
      <h2>Fill out the form to create a new video:</h2>
      <form className="video-form" onSubmit={submit}>
        <label htmlFor="nome">Course name</label>
        <input required type="text" name="nome" id="nome" {...name} />
        <label htmlFor="author">Course author</label>
        <input required type="text" name="author" id="author" {...author} />
        <UIButton>Create</UIButton>
      </form>
      <nav>
        <Link to="/">Go Back</Link>
      </nav>
    </div>
  );
};

export default VideoForm;
