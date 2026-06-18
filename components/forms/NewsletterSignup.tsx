"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function submit() {
    if (!/^\S+@\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interest: "Newsletter" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-lg text-bone/90">
        Lovely — you&rsquo;re on the list. See you soon. ✦
      </p>
    );
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Your email"
        aria-label="Your email"
        className="flex-1 rounded-full border border-bone/30 bg-bone/10 px-5 py-3 text-bone placeholder:text-bone/50 focus:border-bone/60 focus:outline-none"
      />
      <button
        type="button"
        onClick={submit}
        disabled={status === "sending"}
        className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-bone transition-colors hover:bg-coral-deep disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Keep in touch"}
      </button>
    </div>
  );
}
