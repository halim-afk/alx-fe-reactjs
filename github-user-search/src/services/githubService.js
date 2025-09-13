import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

// جلب بيانات مستخدم واحد
export async function fetchUserData(username) {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
}

// البحث المتقدم عن المستخدمين
export async function fetchAdvancedUsers({ username, location, minRepos }) {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await githubApi.get(`/search/users?q=${encodeURIComponent(query)}`);
  return response.data; // يحتوي على items: [] من المستخدمين
}
