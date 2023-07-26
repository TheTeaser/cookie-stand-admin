import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <h2 className="mb-4 text-2xl font-bold">Login</h2>
      <div className="flex flex-col mb-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 bg-green-600 border"
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-green-600 rounded">
        Login
      </button>
    </form>
  );
}
