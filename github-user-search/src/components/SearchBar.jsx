import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // نستدعي الخدمة

function SearchBar() {
  const [username, setUsername] = useState("");   // يخزن اسم المستخدم المدخل
  const [user, setUser] = useState(null);         // يخزن بيانات المستخدم
  const [loading, setLoading] = useState(false);  // حالة التحميل
  const [error, setError] = useState(null);       // حالة الخطأ

  // دالة عند الضغط على Search
  const handleSearch = async () => {
    if (!username) return; // إذا الحقل فاضي ما يعملش بحث
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* input + زر البحث */}
      <input
        type="text"
        placeholder="Search GitHub User..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* حالات العرض */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
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

export default SearchBar;
