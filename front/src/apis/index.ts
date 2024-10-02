import axios from "axios";

const getApiHost = () => {
  const api = "https://fe-adv-project-together-dallaem.vercel.app/1";
  return api;
};
const api = axios.create({
  baseURL: getApiHost(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
api.interceptors.request.use((request: any) => {
  const token = localStorage.getItem("token");
  if (!request.headers.Authorization) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

export default api;
