import axios from "axios";

const getApiHost = () => {
  const api = "https://fe-adv-project-together-dallaem.vercel.app/1";
  return api;
};
const api = axios.create({
  baseURL: getApiHost(),
});

export default api;
