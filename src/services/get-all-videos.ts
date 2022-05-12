import axios from "axios";

const baseUrl = "/api/videos";

const getAllVideos = async () => {
  try {
    const { status, data } = await axios.get(baseUrl);
    if (status === 200) {
      console.log(data);
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};

export default getAllVideos;
