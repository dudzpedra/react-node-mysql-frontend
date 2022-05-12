import axios from "axios";

const updateVideo = async (
  name: string | undefined,
  author: string | undefined,
  id: string | undefined
) => {
  try {
    const { status, data } = await axios.put(
      "/api/videos/update",
      {
        nome_video: name,
        autor_video: author,
        id: id,
      }
    );
    if (status === 200) {
      console.log(data);
    }
  } catch (e) {
    console.error(e);
  }
};

export default updateVideo;
