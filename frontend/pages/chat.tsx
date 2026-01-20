
import { useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  async function send() {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });
    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Support Chat</h2>
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
      <p>{reply}</p>
    </div>
  );
}
