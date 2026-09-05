"use client";

import { useEffect, useState } from "react";

export function TypingHeadline({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, 75);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <>
      {visibleText}
      <span aria-hidden="true" className="q-type-caret" />
      <span className="sr-only">{text}</span>
    </>
  );
}
