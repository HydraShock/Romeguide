"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./inquiry-form.module.css";

const contactEmail = "romeguideservices@gmail.com";
const contactPhoneDisplay = "06 687 8411";
const contactPhoneHref = "+39066878411";

const guestOptions = [
  "1 guest",
  "2 guests",
  "3-4 guests",
  "5-8 guests",
  "9+ guests",
] as const;

const interestOptions = [
  "Ancient Rome history and archaeology",
  "Vatican and artistic masterpieces",
  "Christian heritage and sacred sites",
  "Private walking route through Rome neighborhoods",
  "Family-friendly private touring",
  "Art and architecture focus",
  "Day trips from Rome",
  "Tours in Italy beyond Rome",
  "Not sure yet - I want recommendations",
] as const;

const languageOptions = [
  "English",
  "Italian",
  "Spanish",
  "French",
  "German",
  "Other",
] as const;

const categoryOptions = [
  "Ancient Rome Tour",
  "Vatican Tour",
  "Christian Rome Tour",
  "Walking Tours",
  "Family-Friendly Tours",
  "Art & Architecture",
  "Day Trips from Rome",
  "Tours in Italy",
  "Tailor-Made Private Tour",
] as const;

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  travelDates: string;
  guests: string;
  interestedIn: string;
  preferredLanguage: string;
  tourCategory: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  travelDates: "",
  guests: "",
  interestedIn: "",
  preferredLanguage: "",
  tourCategory: "",
  message: "",
};

function parseIsoDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}

function formatDateLabel(isoDate: string) {
  try {
    const parsedDate = parseIsoDate(isoDate);

    if (Number.isNaN(parsedDate.getTime())) {
      return isoDate;
    }

    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(parsedDate);
  } catch {
    return isoDate;
  }
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please share your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please add your email so we can reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.travelDates.trim()) {
    errors.travelDates = "Please tell us your expected travel dates.";
  }

  if (!values.guests.trim()) {
    errors.guests = "Please select your group size.";
  }

  if (!values.interestedIn.trim()) {
    errors.interestedIn = "Please select your main interest.";
  }

  if (!values.preferredLanguage.trim()) {
    errors.preferredLanguage = "Please choose your preferred language.";
  }

  if (!values.tourCategory.trim()) {
    errors.tourCategory = "Please choose a tour category.";
  }

  if (!values.message.trim()) {
    errors.message = "Please describe your ideal experience.";
  } else if (values.message.trim().length < 30) {
    errors.message = "Please add a little more detail so we can tailor your plan.";
  }

  return errors;
}

export default function InquiryForm() {
  const hasAppliedPrefill = useRef(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = Object.keys(errors).length > 0;

  const subject = useMemo(() => {
    const name = values.fullName.trim() || "Guest";
    return `Private Tour Inquiry - ${name}`;
  }, [values.fullName]);

  const messageBody = useMemo(() => {
    return [
      `Full Name: ${values.fullName || "-"}`,
      `Email: ${values.email || "-"}`,
      `Phone / WhatsApp: ${values.phone || "-"}`,
      `Travel Dates: ${values.travelDates || "-"}`,
      `Number of Guests: ${values.guests || "-"}`,
      `Interested In: ${values.interestedIn || "-"}`,
      `Preferred Language: ${values.preferredLanguage || "-"}`,
      `Tour Category: ${values.tourCategory || "-"}`,
      "",
      "Ideal Experience:",
      values.message || "-",
    ].join("\n");
  }, [values]);

  const mailtoHref = useMemo(() => {
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      messageBody,
    )}`;
  }, [messageBody, subject]);

  useEffect(() => {
    if (hasAppliedPrefill.current || typeof window === "undefined") {
      return;
    }

    hasAppliedPrefill.current = true;

    const params = new URLSearchParams(window.location.search);
    const date = params.get("date") ?? "";
    const tour = params.get("tour") ?? "";
    const guests = params.get("guests") ?? "";
    const language = params.get("language") ?? "";
    const pace = params.get("pace") ?? "";
    const startWindow = params.get("startWindow") ?? "";
    const travelerProfile = params.get("travelerProfile") ?? "";
    const name = params.get("name") ?? "";
    const firstName = params.get("firstName") ?? "";
    const lastName = params.get("lastName") ?? "";
    const emailFromQuery = params.get("email") ?? "";
    const phoneFromQuery = params.get("phone") ?? "";
    const combinedName = [firstName, lastName].filter(Boolean).join(" ").trim();

    const hasTriageData = Boolean(
      date ||
        tour ||
        guests ||
        language ||
        pace ||
        startWindow ||
        travelerProfile ||
        name ||
        combinedName ||
        emailFromQuery ||
        phoneFromQuery,
    );

    if (!hasTriageData) {
      return;
    }

    const prefilledMessageLines = [
      date ? `Requested date: ${formatDateLabel(date)}` : "",
      pace ? `Preferred pace: ${pace}` : "",
      startWindow ? `Preferred start window: ${startWindow}` : "",
      travelerProfile ? `Traveler profile: ${travelerProfile}` : "",
    ].filter(Boolean);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues((current) => ({
      ...current,
      fullName: current.fullName || combinedName || name,
      email: current.email || emailFromQuery,
      phone: current.phone || phoneFromQuery,
      travelDates: current.travelDates || (date ? formatDateLabel(date) : ""),
      guests: current.guests || guests,
      preferredLanguage: current.preferredLanguage || language,
      tourCategory: current.tourCategory || tour,
      message:
        current.message ||
        (prefilledMessageLines.length > 0
          ? `${prefilledMessageLines.join("\n")}\n\nPlease tailor the route around these priorities.`
          : ""),
    }));
  }, []);

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) {
        return current;
      }

      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validate(values);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.location.href = mailtoHref;
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={hasErrors ? "booking-form-errors" : undefined}
    >
      {hasErrors ? (
        <p id="booking-form-errors" className={styles.errorBanner} role="alert">
          Please review the highlighted fields before sending your inquiry.
        </p>
      ) : null}

      {submitted ? (
        <p className={styles.successBanner} role="status">
          Thank you. Your inquiry draft is ready. If your email app did not open, send it
          directly to <a href={`mailto:${contactEmail}`}>{contactEmail}</a> or call{" "}
          <a href={`tel:${contactPhoneHref}`}>{contactPhoneDisplay}</a>.
        </p>
      ) : null}

      <div className={styles.gridTwo}>
        <div className={styles.field}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            required
          />
          {errors.fullName ? (
            <p id="fullName-error" className={styles.errorText}>
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="email-error" className={styles.errorText}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.gridTwo}>
        <div className={styles.field}>
          <label htmlFor="phone">Optional Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+39 ..."
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="travelDates">Travel Dates</label>
          <input
            id="travelDates"
            name="travelDates"
            type="text"
            value={values.travelDates}
            onChange={(event) => updateField("travelDates", event.target.value)}
            placeholder="For example: 12-16 June 2026"
            aria-invalid={Boolean(errors.travelDates)}
            aria-describedby={errors.travelDates ? "travelDates-error" : undefined}
            required
          />
          {errors.travelDates ? (
            <p id="travelDates-error" className={styles.errorText}>
              {errors.travelDates}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.gridThree}>
        <div className={styles.field}>
          <label htmlFor="guests">Number of Guests</label>
          <select
            id="guests"
            name="guests"
            value={values.guests}
            onChange={(event) => updateField("guests", event.target.value)}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "guests-error" : undefined}
            required
          >
            <option value="">Select your group size</option>
            {guestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.guests ? (
            <p id="guests-error" className={styles.errorText}>
              {errors.guests}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="interestedIn">Interested In</label>
          <select
            id="interestedIn"
            name="interestedIn"
            value={values.interestedIn}
            onChange={(event) => updateField("interestedIn", event.target.value)}
            aria-invalid={Boolean(errors.interestedIn)}
            aria-describedby={errors.interestedIn ? "interestedIn-error" : undefined}
            required
          >
            <option value="">Choose your main interest</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.interestedIn ? (
            <p id="interestedIn-error" className={styles.errorText}>
              {errors.interestedIn}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="preferredLanguage">Preferred Language</label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={values.preferredLanguage}
            onChange={(event) => updateField("preferredLanguage", event.target.value)}
            aria-invalid={Boolean(errors.preferredLanguage)}
            aria-describedby={errors.preferredLanguage ? "preferredLanguage-error" : undefined}
            required
          >
            <option value="">Select a language</option>
            {languageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.preferredLanguage ? (
            <p id="preferredLanguage-error" className={styles.errorText}>
              {errors.preferredLanguage}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="tourCategory">Tour Type / Category</label>
        <select
          id="tourCategory"
          name="tourCategory"
          value={values.tourCategory}
          onChange={(event) => updateField("tourCategory", event.target.value)}
          aria-invalid={Boolean(errors.tourCategory)}
          aria-describedby={errors.tourCategory ? "tourCategory-error" : undefined}
          required
        >
          <option value="">Choose a tour category</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.tourCategory ? (
          <p id="tourCategory-error" className={styles.errorText}>
            {errors.tourCategory}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message / Describe Your Ideal Experience</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us your must-see priorities, preferred pace, and anything we should consider for your group."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
          rows={7}
        />
        {errors.message ? (
          <p id="message-error" className={styles.errorText}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton}>
          Send Your Inquiry
        </button>
        <p className={styles.submitHint}>
          By submitting, you agree to be contacted by our planning team regarding your request.
        </p>
      </div>
    </form>
  );
}
