import React, { useState, useRef, useEffect } from "react";
import styles from "./AiChat.module.css";

interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

const AiChat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to bottom when new message
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://aertero-bot-69680502444.europe-west1.run.app/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: input }),  // UWAGA: pole nazywa się "text"
});
      const data = await res.json();
      const aiMsg: ChatMessage = { role: "ai", text: data.answer || "Brak odpowiedzi." };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "❌ Błąd połączenia z AI." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      <h3 className={styles.chatTitle}>🤖 Agent AI Aertero</h3>
      <div className={styles.chatBox} ref={chatRef}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.role === "user" ? styles.bubbleUser : styles.bubbleAi
            }
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className={styles.bubbleAi}>
            <span className="opacity-70">Myśli...</span>
          </div>
        )}
      </div>
      <div className={styles.inputBox}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Napisz wiadomość..."
          className={styles.chatInput}
          rows={2}
        />
        <button onClick={handleSend} className={styles.chatButton} disabled={loading || !input.trim()}>
          Wyślij
        </button>
      </div>
    </div>
  );
};

export default AiChat;