"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const WORKER_URL = "https://patient-mouse-5034.officiel-bassgma.workers.dev";
const TG_BOT = "8226810369:AAFi8mLA7jrQzP_5mIIuQcsAzeX-6am300Y";
const TG_CHAT = 5216224966;

interface Msg {
  role: "user" | "assistant";
  content: string;
}

function sendTgNotif(text: string) {
  fetch(`https://api.telegram.org/bot${TG_BOT}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TG_CHAT, text }),
  });
}

function renderMsg(text: string) {
  const urls: string[] = [];
  let t2 = text.replace(/(https?:\/\/[^\s]+)/g, (u) => {
    const k = `__URL${urls.length}__`;
    urls.push(u);
    return k;
  });
  let safe = t2
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  urls.forEach((u, i) => {
    const clean = u.replace(/[.,;!?)]+$/, "");
    const isStripe = clean.includes("buy.stripe.com");
    const tag = isStripe
      ? `<a href="${clean}" target="_blank" rel="noopener" class="chat-link-btn">Reserver ma place &rarr;</a>`
      : `<a href="${clean}" target="_blank" rel="noopener" class="chat-link">${clean}</a>`;
    safe = safe.replace(`__URL${i}__`, tag);
  });
  return safe;
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const contactCaptured = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }, 50);
  }, []);

  function extractContact(allMsgs: Msg[]) {
    if (contactCaptured.current) return;
    const userTexts = allMsgs.filter((m) => m.role === "user").map((m) => m.content);
    const combined = userTexts.join(" ");
    const emailMatch = combined.match(/[\w.-]+@[\w.-]+\.\w{2,}/);
    const phoneMatch = combined.match(
      /(?:\+?\d{1,3}[\s.-]?)?\(?\d{2,4}\)?[\s.-]?\d{2,4}[\s.-]?\d{2,4}/
    );
    if (emailMatch || phoneMatch) {
      let msg = "Contact capture via Chat IA\n\n";
      if (emailMatch) msg += `Email: ${emailMatch[0]}\n`;
      if (phoneMatch) msg += `Tel: ${phoneMatch[0]}\n`;
      msg += `Conversation:\n${userTexts.map((t) => `> ${t}`).join("\n")}`;
      contactCaptured.current = true;
      sendTgNotif(msg);
    }
  }

  function toggleChat() {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen && !initialized.current) {
      initialized.current = true;
      const greeting: Msg = {
        role: "assistant",
        content:
          "Salut ! Je suis l'assistant BASS Trading. Une question sur le mentorat, la methode ou la formation ? Je suis la pour t'aider.",
      };
      setMessages([greeting]);
    }
  }

  async function sendChat() {
    const text = input.trim();
    if (!text) return;
    setInput("");

    const userMsg: Msg = { role: "user", content: text };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    extractContact(newMsgs);
    setTyping(true);
    scrollToBottom();

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs }),
      });
      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        "Desole, je n'ai pas pu repondre. N'hesite pas a candidater directement sur le site !";
      const assistantMsg: Msg = { role: "assistant", content: reply };
      const updated = [...newMsgs, assistantMsg];
      setMessages(updated);
      extractContact(updated);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connexion perdue. Tu peux candidater directement via le formulaire sur le site !",
        },
      ]);
    } finally {
      setTyping(false);
      scrollToBottom();
    }
  }

  return (
    <div className={`chat-widget${open ? " chat-open" : ""}`}>
      <button className="chat-toggle" onClick={toggleChat} aria-label="Ouvrir le chat">
        <svg
          className="chat-icon-open"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <svg
          className="chat-icon-close"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="chat-window">
        <div className="chat-header">
          <div className="chat-header-avatar">
            <Image
              src="/images/bass-presenting.jpg"
              alt="BASS"
              width={36}
              height={36}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="chat-header-name">BASS Assistant</div>
            <div className="chat-header-status">
              <span className="chat-dot" /> En ligne
            </div>
          </div>
        </div>
        <div className="chat-messages" ref={boxRef}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg chat-${msg.role}`}
              dangerouslySetInnerHTML={{ __html: renderMsg(msg.content) }}
            />
          ))}
          {typing && (
            <div className="chat-msg chat-assistant chat-typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
        <div className="chat-input-wrap">
          <input
            type="text"
            id="chatInput"
            placeholder="Pose ta question..."
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendChat()}
          />
          <button onClick={sendChat} className="chat-send" aria-label="Envoyer">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
