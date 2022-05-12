import axios from "axios";

const createVideo = async (name: string | undefined, author: string | undefined) => {
  try {
    const { status, data } = await axios.post(
      "/api/videos/create",
      {
        nome_video: name,
        autor_video: author,
      }
    );
    if (status === 200) {
      console.log(data);
    }
  } catch (e) {
    console.error(e);
  }
};

export default createVideo;
