"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="faq-sec">
      <div className="sec-center">
        <div className="sec-label">FAQ</div>
        <h2 className="sec-title">Questions frequentes</h2>
      </div>
      <div className="faq-list">
        {items.map((item, i) => (
          <div key={i} className={`fi${active === i ? " active" : ""}`}>
            <button
              className="fq"
              onClick={() => setActive(active === i ? null : i)}
            >
              {item.question}
              <span className="fq-icon">+</span>
            </button>
            <div className={`fa${active === i ? " open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
