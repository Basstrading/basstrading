"use client";

import { useEffect, useRef } from "react";

const SDK_SRC =
  "https://www.paypal.com/sdk/js?client-id=BAAjqwOHWV7_5QE2n8z25lKD3UIIPZx6JU3UU5_fXXm-eUsAezGGClGuWIjNiPVDdNQBnoQmV-G3i7Z6_k&components=hosted-buttons,messages&enable-funding=paylater&disable-funding=venmo&currency=EUR";
const HOSTED_BUTTON_ID = "U27PJUA65WXU4";
const CONTAINER_ID = `paypal-container-${HOSTED_BUTTON_ID}`;
const AMOUNT = "1290.00";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (opts: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
      Messages?: (opts: Record<string, unknown>) => { render: (sel: string) => void };
    };
  }
}

export default function PayPalCheckout() {
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
      <div className="pp-msg-wrap">
        <div
          data-pp-message
          data-pp-amount={AMOUNT}
          data-pp-currency="EUR"
          data-pp-buyer-country="FR"
          data-pp-style-layout="text"
          data-pp-style-logo-type="primary"
          data-pp-style-text-color="white"
        />
      </div>
      <div className="pp-wrap">
        <div id={CONTAINER_ID} />
      </div>
    </>
  );
}
