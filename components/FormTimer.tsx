"use client";

import { useEffect, useRef } from "react";

/** Hidden field recording when the form was rendered — used as a spam time trap. */
export default function FormTimer() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.value = String(Date.now());
  }, []);

  return <input ref={ref} type="hidden" name="started_at" defaultValue="" />;
}
