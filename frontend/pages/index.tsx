
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:5000/auth/login", { method: "POST" })
      .then(res => res.json())
      .then(user => localStorage.setItem("user", JSON.stringify(user)));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>SERENOVA 🌱</h1>
      <p>Anonymous mental wellness support</p>
      <a href="/chat">Go to Chat</a>
    </main>
  );
}
