import { useState } from "react";

function Search() {
  const [username, setUsername] = useState(""); // يخزن اسم المستخدم المدخل

  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على زر البحث
    console.log("Searching for user:", username);
    // هنا لاحقاً سنستدعي API للبحث
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // تحديث state عند كتابة المستخدم
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
