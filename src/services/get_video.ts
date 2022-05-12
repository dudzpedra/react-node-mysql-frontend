import axios from "axios";
import { Video } from "../types";

const getVideo = async (
  id: string | undefined,
  setVideo: (video: Video) => void
) => {
  try {
    const { status, data } = await axios.get(
      `/api/videos/${id}`
    );
    if (status === 200) {
      setVideo(data[0]);
    }
  } catch (e) {
    console.error(e);
  }
};

export default getVideo;
