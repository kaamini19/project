import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const submit = (e) => {
    e.preventDefault();
    const ok = login({ email });
    if (!ok) setError("Invalid credentials. Try admin@example.com");
  };

  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <label style={{ display: "block", marginTop: 8 }}>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>
        <button type="submit" style={{ marginTop: 12, padding: "8px 12px" }}>
          Sign in
        </button>
        {error && <div style={{ color: "crimson", marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
}
