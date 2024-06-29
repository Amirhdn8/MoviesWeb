import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6812128337844011898f7472d7100ac1",
  },
});
