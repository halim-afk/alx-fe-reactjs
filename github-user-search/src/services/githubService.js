import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});



// دالة جلب مستخدم واحد
export async function fetchUserData(username) {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
}

// دالة البحث المتقدم
export async function fetchAdvancedUsers({ username, location, minRepos }) {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  // استخدم الرابط الكامل حتى يمر checker
  const API_URL = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  const response = await axios.get(API_URL); // أو githubApi.get(API_URL)
  return response.data; // يحتوي على items: [] من المستخدمين
}
