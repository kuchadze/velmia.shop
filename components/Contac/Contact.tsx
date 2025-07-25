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

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ws4ph4l", // EmailJS service ID
        "template_d5gfrnq", // EmailJS template ID
        formData,
        "cRsVc4uGsEyiSu6rZ" // Public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("An error occurred. Please try again.");
          console.error("FAILED", error);
        }
      );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>
        Looking for a Custom Journal Designed Just for You?
      </h2>
      <p className={styles.formSubtitle}>
        Let’s bring your ideas to life. Whether you need a personalized notebook,
        a self-care planner — I’ll design it to
        match your style and goals. Message me now and let’s create something
        beautiful together!
      </p>

      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.label}>
        Message
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Write your message here..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Send
      </button>

      {status && <p className={styles.statusMessage}>{status}</p>}
    </form>
  );
}
