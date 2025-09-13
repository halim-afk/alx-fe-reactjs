import axios from "axios";

const API_URL = "https://api.github.com";

const githubApi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export default githubApi;
