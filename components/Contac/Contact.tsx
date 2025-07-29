"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status) setStatus(null); // Clear status on new input
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ws4ph4l", // Your EmailJS service ID
        "template_d5gfrnq", // Your EmailJS template ID
        formData,
        "cRsVc4uGsEyiSu6rZ" // Your EmailJS public key
      )
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus({ type: "error", message: "An error occurred. Please try again." });
        console.error("Email send error:", error);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <h2 className={styles.formTitle}>
        Looking for a Custom Journal Designed Just for You?
      </h2>
      <p className={styles.formSubtitle}>
        Let’s bring your ideas to life. Whether you need a personalized notebook,
        a self-care planner — I’ll design it to match your style and goals. Message me now and
        let’s create something beautiful together!
      </p>

      <label htmlFor="name" className={styles.label}>
        Name
      </label>
      <input
        id="name"
        className={styles.input}
        type="text"
        name="name"
        placeholder="Your full name"
        value={formData.name}
        onChange={handleChange}
        required
        aria-required="true"
        aria-describedby="name-desc"
      />
      <small id="name-desc" className={styles.visuallyHidden}>
        Please enter your full name.
      </small>

      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        id="email"
        className={styles.input}
        type="email"
        name="email"
        placeholder="your.email@example.com"
        value={formData.email}
        onChange={handleChange}
        required
        aria-required="true"
        aria-describedby="email-desc"
      />
      <small id="email-desc" className={styles.visuallyHidden}>
        Please enter a valid email address.
      </small>

      <label htmlFor="message" className={styles.label}>
        Message
      </label>
      <textarea
        id="message"
        className={styles.textarea}
        name="message"
        placeholder="Write your message here..."
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        aria-required="true"
        aria-describedby="message-desc"
      />
      <small id="message-desc" className={styles.visuallyHidden}>
        Please enter your message.
      </small>

      <button className={styles.button} type="submit" aria-live="polite">
        Send
      </button>

      {status && (
        <p
          className={`${styles.statusMessage} ${
            status.type === "success" ? styles.success : styles.error
          }`}
          role="alert"
          aria-live="assertive"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
