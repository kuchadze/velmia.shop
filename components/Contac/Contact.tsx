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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ws4ph4l", // EmailJS service ID
        "template_d5gfrnq", // EmailJS template ID
        formData,
        "cRsVc4uGsEyiSu6rZ" // EmailJS public key
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
      <h2>Contact</h2>
      <label>
        Name
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}
