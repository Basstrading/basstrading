"use client";

import { useEffect, useRef } from "react";

const SDK_SRC =
  "https://www.paypal.com/sdk/js?client-id=BAAjqwOHWV7_5QE2n8z25lKD3UIIPZx6JU3UU5_fXXm-eUsAezGGClGuWIjNiPVDdNQBnoQmV-G3i7Z6_k&components=hosted-buttons&disable-funding=venmo&currency=EUR";
const HOSTED_BUTTON_ID = "U27PJUA65WXU4";
const CONTAINER_ID = `paypal-container-${HOSTED_BUTTON_ID}`;

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (opts: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

export default function PayPalButton() {
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;

    const render = () => {
      if (rendered.current || !window.paypal) return;
      const target = document.getElementById(CONTAINER_ID);
      if (!target) return;
      target.innerHTML = "";
      window.paypal
        .HostedButtons({ hostedButtonId: HOSTED_BUTTON_ID })
        .render(`#${CONTAINER_ID}`);
      rendered.current = true;
    };

    if (window.paypal) {
      render();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SDK_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = SDK_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", render);
    return () => script?.removeEventListener("load", render);
  }, []);

  return (
    <>
      <div className="price-divider">ou</div>
      <div className="paypal-wrap">
        <div id={CONTAINER_ID} />
      </div>
    </>
  );
}
