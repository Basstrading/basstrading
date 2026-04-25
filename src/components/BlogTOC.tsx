"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

export default function BlogTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = item.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <div className="toc">
      <div className="toc-title">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width="14"
          height="14"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
          <line x1="3" y1="18" x2="18" y2="18" />
        </svg>{" "}
        Sommaire
      </div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
