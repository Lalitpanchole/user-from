import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleInput = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // ✅ fixed
      console.log(token);
      const res = await axios.get(
        "http://localhost:5000/api/user/profile",
        {
          headers: {
          Authorization: `Bearer ${token}`
          },
        }
      );

      console.log("User Data:", res.data);
      setUser(res.data.user);

      alert("Show now data ✅");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "❌ Failed to fetch profile");
    }
  };

  return (
    <div>
      <form onSubmit={handleInput}>
        <button type="submit">Get Profile</button>
      </form>

      {/* ✅ Correct condition */}
      {user ? (
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
