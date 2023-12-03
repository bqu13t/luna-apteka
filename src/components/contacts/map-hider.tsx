"use client";

import { useState, useEffect } from "react";

export default function MapHider() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(true);
    }, 15000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <div className={`map-block ${hidden ? "hidden" : ""}`}></div>;
}
