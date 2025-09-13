import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState(""); // input value
  const [user, setUser] = useState(null);       // user data
  const [loading, setLoading] = useState(false);// loading state
  const [error, setError] = useState(null);     // error state

  const handleSearch = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    if (!username) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data); // حفظ بيانات المستخدم
    } catch (err) {
      setError("Looks like we cant find the user"); // رسالة الخطأ
    } finally {
      setLoading(false); // انتهاء التحميل
    }
  };

  return (
    <div>
      {/* form البحث */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub User..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* عرض حالة التحميل */}
      {loading && <p>Loading...</p>}

      {/* عرض رسالة الخطأ */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* عرض بيانات المستخدم */}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} alt="avatar" width="100" />
          <h3>{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
