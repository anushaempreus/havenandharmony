"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
};

const interestOptions = [
  "General enquiry",
  "Yoga & Pilates classes",
  "A retreat",
  "Accommodation",
];

const inputBase =
  "w-full rounded-lg border border-forest/20 bg-white/60 px-4 py-3 text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest";

export default function ContactForm() {
  const params = useSearchParams();
  const interestParam = params.get("interest");
  const guestsParam = params.get("guests");
  const defaultInterest = interestOptions.includes(interestParam ?? "")
    ? (interestParam as string)
    : "General enquiry";
  const defaultMessage =
    interestParam === "Accommodation" && guestsParam
      ? `Hi, I'd like to enquire about the accommodation for ${guestsParam} guest${
          guestsParam === "1" ? "" : "s"
        }.`
      : "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { interest: defaultInterest, message: defaultMessage },
  });

  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function onSubmit(data: FormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-forest/20 bg-white/60 p-8 text-center">
        <p className="font-[family-name:var(--font-display)] text-2xl text-forest">
          Thank you
        </p>
        <p className="mt-2 text-ink/70">
          Your message is on its way. Barbara will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            className={inputBase}
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-coral-deep">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputBase}
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-coral-deep">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="text-ink/40">(optional)</span>
          </label>
          <input id="phone" className={inputBase} {...register("phone")} />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium">
            I'm interested in
          </label>
          <select id="interest" className={inputBase} {...register("interest")}>
            <option>General enquiry</option>
            <option>Yoga & Pilates classes</option>
            <option>A retreat</option>
            <option>Accommodation</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputBase}
          {...register("message", { required: "Please add a short message" })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-coral-deep">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-coral-deep">
          Something went wrong sending your message. Please email us directly or
          try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-forest px-7 py-3 text-sm font-semibold text-bone transition-colors hover:bg-forest-deep disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
