"use client";

import { useState, type FormEvent } from "react";
import {
  CloseIcon,
  SendIcon,
  CheckCircleIcon,
  MessageSquareIcon,
} from "@/components/icons";
import { SocialLinks } from "@/components/social-links";
import type { ContactFormData, Dictionary, InquiryTopic } from "@/types";
import { delay } from "@/lib/utils";

interface ContactModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly dictionary: Dictionary;
}

const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  topic: "project",
  message: "",
};

export const ContactModal = ({ isOpen, onClose, dictionary }: ContactModalProps) => {
  const t = dictionary.contactModal;

  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      // Simulate form submission delay
      await delay(800);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setIsSubmitted(false);
  };

  const updateField = <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 my-auto w-full max-w-lg rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 fade-in duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.closeButton}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-accent hover:text-foreground active:scale-95"
        >
          <CloseIcon className="size-4" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="flex flex-col items-center py-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
              <CheckCircleIcon className="size-7" />
            </div>

            <h3
              id="contact-modal-title"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              {t.successTitle}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.successMessage}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-foreground px-6 py-2.5 text-sm font-semibold text-background shadow-xs transition-all hover:opacity-90 active:scale-95"
              >
                {t.closeButton}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent active:scale-95"
              >
                {t.sendAnother}
              </button>
            </div>
          </div>
        ) : (
          /* Contact Form */
          <div>
            <div className="mb-6 flex items-start gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl border border-border/80 bg-accent/70 text-foreground">
                <MessageSquareIcon className="size-5" />
              </div>
              <div className="pr-6">
                <h2
                  id="contact-modal-title"
                  className="text-lg sm:text-xl font-bold tracking-tight text-foreground"
                >
                  {t.modalTitle}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {t.modalSubtitle}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    {t.nameLabel} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    {t.emailLabel} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Topic / Inquiry Type */}
              <div>
                <label
                  htmlFor="contact-topic"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                >
                  {t.topicLabel}
                </label>
                <select
                  id="contact-topic"
                  value={formData.topic}
                  onChange={(e) => updateField("topic", e.target.value as InquiryTopic)}
                  className="w-full rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {Object.entries(t.topicOptions).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                >
                  {t.messageLabel} <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-2.5 text-sm font-semibold text-background shadow-sm transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t.submittingButton}</span>
                ) : (
                  <>
                    <SendIcon className="size-4" />
                    <span>{t.submitButton}</span>
                  </>
                )}
              </button>
            </form>

            {/* Direct Social Links */}
            <div className="mt-6 border-t border-border/50 pt-5 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                {t.orConnectDirectly}
              </p>
              <SocialLinks />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
