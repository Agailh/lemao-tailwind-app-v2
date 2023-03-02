import axios from "axios";

const getChannel = async (channelId, apiKey) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA2xCBPpDKSqVs2m7TLc_RvXoY2uaOODbo&part=snippet&id=UCZLZ8Jjx_RN2CXloOmgTHVg`);
    return response.data.items[0];
  } catch (error) {
    console.error(error);
  }
};

export default getChannel;
