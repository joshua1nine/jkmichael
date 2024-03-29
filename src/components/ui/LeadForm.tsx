"use client";

import { useEffect, useRef } from "react";
import { sendLeadEmail } from "../../app/actions/sendLeadEmail";
import { useFormState } from "react-dom";

export const LeadForm = () => {
  const [formState, formAction] = useFormState(sendLeadEmail, {
    message: "",
    errors: undefined,
  });

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message === "success" && ref.current) {
      ref.current.reset();
    }
  }, [formState.message]);

  return (
    <form ref={ref} className="space-y-4" action={formAction}>
      <div className="flex flex-col">
        <label className="mb-2 font-medium leading-none" htmlFor="name">
          Name
        </label>
        <input
          className="flex h-12 w-full rounded-md text-gray-900 bg-white px-3 py-2 text-sm ring-offset-orange file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-100 focus:ring-orange focus:border-orange focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-medium leading-none" htmlFor="email">
          Email
        </label>
        <input
          className="flex h-12 w-full rounded-md text-gray-900 bg-white px-3 py-2 text-sm ring-offset-orange file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-100 focus:ring-orange focus:border-orange focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          id="email"
          name="email"
          required
        />
        <label className="hidden" aria-hidden htmlFor="company">
          Company
        </label>
        <input
          className="hidden"
          aria-hidden
          id="company"
          name="company"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-medium leading-none" htmlFor="message">
          Tell me about your business and the problems you are trying to solve
        </label>
        <textarea
          className="text-gray-900 flex min-h-[80px] w-full rounded-md bg-white px-3 py-2 text-sm ring-offset-orange placeholder:text-gray-300 focus-visible:outline-none focus:ring-orange focus:border-orange disabled:cursor-not-allowed disabled:opacity-50"
          rows={10}
          id="message"
          name="message"
          required
        />
      </div>
      <input
        className="hidden"
        autoComplete="off"
        type="text"
        id="company"
        name="company"
        placeholder="Your company name here"
      />
      <button
        className="py-2 px-6 rounded-md w-full bg-orange text-white"
        type="submit"
      >
        Submit
      </button>
      {formState.message && (
        <p className="bg-green rounded-lg px-3 py-2 text-gray-900">
          Thank you! I look forward to talking with you!
        </p>
      )}
    </form>
  );
};
