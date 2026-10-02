"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Phone,
  Mail,
  Clock, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Calendar,
  ArrowUpRight
} from "lucide-react";
import { Icons } from "./Icons";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { profileData } from "@/data/profile";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profileData.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFeedbackMessage(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to deliver message. Please reach out via email directly.";
      setStatus("error");
      setFeedbackMessage(errorMessage);
    }
  };

  const linkedInLink = profileData.socialLinks.find((s) => s.name === "LinkedIn");

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto lg:mx-0 mb-16 text-center lg:text-left">
          <Badge variant="indigo" size="md" className="mb-3">
            <Sparkles className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s build something <br className="hidden sm:inline" />
            <span className="text-indigo-600 dark:text-indigo-400">extraordinary together.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Whether you have an internship, full-time role, or collaborative project, I&apos;d love to connect. Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Layout Grid: Info Column (Left) & Form Column (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <Card className="p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                Direct Channels
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/70 hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate min-h-[44px] inline-flex items-center"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-current" />
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              {linkedInLink && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/70 hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-1.5">
                    <Icons.linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={linkedInLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate min-h-[44px] inline-flex items-center gap-1.5"
                    >
                      <span>{linkedInLink.handle || "linkedin.com/in/anfas-arshad"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  </div>
                </div>
              )}

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/70 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Phone / WhatsApp</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate min-h-[44px] inline-flex items-center"
                  >
                    {profileData.phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0"
                    title="Copy phone to clipboard"
                    aria-label="Copy phone number to clipboard"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-current" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/70 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Location</span>
                </div>
                <div className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100">
                  {profileData.location}
                </div>
              </div>

              {/* Availability & Response Time meta */}
              <div className="space-y-2 pt-2 text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Response Time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Open to Full-Time, Part-Time & Graduate Roles</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Status Banners */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Success!</strong>
                        <span>{feedbackMessage}</span>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 flex items-start gap-3 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Submission Issue</strong>
                        <span>{feedbackMessage}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Silva"
                      className="w-full px-4 py-3 min-h-[44px] text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 min-h-[44px] text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Anfas, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-3 min-h-[140px] text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    isLoading={status === "loading"}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto min-h-[48px] px-8"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
