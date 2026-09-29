"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageSquare, Phone, Send, Loader2 } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { Reveal, RevealHeading, Stagger } from "@/components/motion";

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [fallbackNotice, setFallbackNotice] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    company: string;
    phone: string;
    workType: string;
    location: string;
    whatsappBriefUrl: string;
  } | null>(null);

  const [workType, setWorkType] = useState("");
  const [location, setLocation] = useState("");
  const [requirement, setRequirement] = useState("");
  const [approxSize, setApproxSize] = useState("");
  const [timeline, setTimeline] = useState("");

  // Listen for commercial bridge events from "Imagine Your Project"
  useEffect(() => {
    const handleBridge = (e: Event) => {
      const customEvent = e as CustomEvent<{
        workType?: string;
        location?: string;
        stage?: string;
      }>;
      if (customEvent.detail) {
        if (customEvent.detail.workType) {
          setWorkType(customEvent.detail.workType);
        }
        if (customEvent.detail.location) {
          setLocation(customEvent.detail.location);
        }
        if (customEvent.detail.stage) {
          setRequirement(
            `Project Stage: ${customEvent.detail.stage}\nRequired Scope: ${customEvent.detail.workType || "Industrial Execution"}\nLocation Context: ${customEvent.detail.location || "To be specified"}`
          );
        }
      }
    };

    window.addEventListener("kwality:project-bridge", handleBridge);
    return () => window.removeEventListener("kwality:project-bridge", handleBridge);
  }, []);

  const generateWhatsappUrl = (payload: {
    name: string;
    company: string;
    phone: string;
    email?: string;
    location: string;
    workType: string;
    approxSize?: string;
    timeline?: string;
    requirement: string;
  }) => {
    const text = `Hello Kwality Interiors, I would like to discuss a project.
• Name: ${payload.name}
• Company: ${payload.company}
• Phone: ${payload.phone}
• Email: ${payload.email || "Not specified"}
• Location: ${payload.location}
• Work Type: ${payload.workType}
• Approximate Size: ${payload.approxSize || "Not specified"}
• Timeline: ${payload.timeline || "Not specified"}
• Requirement: ${payload.requirement}`;
    return `https://wa.me/919849183165?text=${encodeURIComponent(text)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    setFallbackNotice("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      location: String(data.get("location") ?? "").trim(),
      workType: String(data.get("workType") ?? "").trim(),
      approxSize: String(data.get("approxSize") ?? "").trim(),
      timeline: String(data.get("timeline") ?? "").trim(),
      requirement: String(data.get("requirement") ?? "").trim(),
      website_check: String(data.get("website_check") ?? "").trim(),
    };

    if (!payload.name || !payload.company || !payload.phone || !payload.location || !payload.workType || !payload.requirement) {
      setFormError("Please complete all required fields (*).");
      return;
    }

    const whatsappUrl = generateWhatsappUrl(payload);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        setSubmittedData({
          name: payload.name,
          company: payload.company,
          phone: payload.phone,
          workType: payload.workType,
          location: payload.location,
          whatsappBriefUrl: whatsappUrl,
        });
      } else {
        // Fallback to WhatsApp so lead is NEVER lost
        setSubmitted(true);
        setFallbackNotice(
          resData.message || "Email server dispatched to backup. Continue on WhatsApp to deliver your project brief immediately."
        );
        setSubmittedData({
          name: payload.name,
          company: payload.company,
          phone: payload.phone,
          workType: payload.workType,
          location: payload.location,
          whatsappBriefUrl: whatsappUrl,
        });
        // Auto-open WhatsApp on fallback
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      // Network failure fallback
      setSubmitted(true);
      setFallbackNotice("Network issue encountered. Continue directly on WhatsApp to send your requirement without re-typing.");
      setSubmittedData({
        name: payload.name,
        company: payload.company,
        phone: payload.phone,
        workType: payload.workType,
        location: payload.location,
        whatsappBriefUrl: whatsappUrl,
      });
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="v5-section bg-[#05070a] border-b border-white/10">
      <div className="v5-container">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          {/* Direct Communication Channels */}
          <div>
            <Reveal level="l4">
              <p className="v5-kicker">10 / CONTACT &amp; ENQUIRY</p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-5">
              DISCUSS YOUR PROJECT.
            </RevealHeading>
            <Reveal level="l3">
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                Tell us your project scope, location, and timeline requirements. Direct execution by Kwality Interiors across Hyderabad and Telangana.
              </p>
            </Reveal>

            <Reveal level="l4">
              <div className="mt-8 rounded border border-amber-400/30 bg-amber-400/5 p-4 text-xs font-mono text-amber-200">
                <span className="font-semibold text-amber-300 block mb-1">Response Standard:</span>
                Enquiries are reviewed on the same business day.
              </div>
            </Reveal>

            <Stagger level="l4" className="mt-10 space-y-4 text-sm">
              <a className="contact-line" href={`tel:${BUSINESS_INFO.phone}`}>
                <Phone className="h-4 w-4 text-amber-400" />
                <span>{BUSINESS_INFO.formattedPhone}</span>
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </a>
              <a className="contact-line" href={`mailto:${BUSINESS_INFO.email}`}>
                <Mail className="h-4 w-4 text-amber-400" />
                <span>{BUSINESS_INFO.email}</span>
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </a>
              <a className="contact-line" href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>Direct WhatsApp Message</span>
                <ArrowUpRight className="ml-auto h-4 w-4" />
              </a>
              <div className="contact-line">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
            </Stagger>
          </div>

          {/* Form / Thank You State */}
          <div className="border border-white/10 bg-white/[.02] p-5 md:p-8">
            {submitted && submittedData ? (
              <div className="space-y-6 py-6 text-center sm:text-left">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Thank You, {submittedData.name}.
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Your project enquiry for <strong className="text-white">{submittedData.workType}</strong> has been logged.
                  </p>
                  <p className="mt-2 text-xs font-mono text-amber-300">
                    Enquiries are reviewed on the same business day.
                  </p>
                  {fallbackNotice && (
                    <div className="mt-4 p-3 bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 text-left">
                      {fallbackNotice}
                    </div>
                  )}
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={submittedData.whatsappBriefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 text-sm font-bold transition shadow-lg shadow-emerald-500/20"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Continue on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3 text-sm font-semibold transition"
                  >
                    <Phone className="h-4 w-4 text-amber-400" />
                    <span>Call Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedData(null);
                      setFallbackNotice("");
                    }}
                    className="inline-flex items-center justify-center text-xs font-mono text-white/40 hover:text-white underline underline-offset-4 py-2"
                  >
                    Submit another requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
                {/* Honeypot field (hidden from genuine users) */}
                <input
                  type="text"
                  name="website_check"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <label className="field-label">
                  <span>Name *</span>
                  <input className="field" name="name" type="text" required placeholder="Project lead or engineer" />
                </label>

                <label className="field-label">
                  <span>Company *</span>
                  <input className="field" name="company" type="text" required placeholder="Enterprise / contractor name" />
                </label>

                <label className="field-label">
                  <span>Phone *</span>
                  <input className="field" name="phone" type="tel" required placeholder="+91 98490 00000" />
                </label>

                <label className="field-label">
                  <span>Email (optional)</span>
                  <input className="field" name="email" type="email" placeholder="official@company.com" />
                </label>

                <label className="field-label">
                  <span>Project Location *</span>
                  <input
                    className="field"
                    name="location"
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, industrial area, or coordinates"
                  />
                </label>

                <label className="field-label">
                  <span>Service *</span>
                  <select
                    className="field"
                    name="workType"
                    required
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field-label">
                  <span>Approximate Size / Span</span>
                  <select
                    className="field"
                    name="approxSize"
                    value={approxSize}
                    onChange={(e) => setApproxSize(e.target.value)}
                  >
                    <option value="">Select approximate size</option>
                    <option value="Under 5,000 sq ft">&lt; 5,000 sq ft</option>
                    <option value="5,000 - 20,000 sq ft">5,000 - 20,000 sq ft</option>
                    <option value="20,000 - 50,000 sq ft">20,000 - 50,000 sq ft</option>
                    <option value="Above 50,000 sq ft">&gt; 50,000 sq ft</option>
                    <option value="Not sure / Custom span">Not sure / To be surveyed</option>
                  </select>
                </label>

                <label className="field-label">
                  <span>Target Timeline</span>
                  <select
                    className="field"
                    name="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    <option value="">Select target timeline</option>
                    <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                    <option value="1 - 3 months">1 - 3 months</option>
                    <option value="3 - 6 months">3 - 6 months</option>
                    <option value="Planning stage">Planning stage</option>
                  </select>
                </label>

                <label className="field-label md:col-span-2">
                  <span>Requirement *</span>
                  <textarea
                    className="field min-h-32 resize-y"
                    name="requirement"
                    required
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    placeholder="Tell us the scope, tonnage, drawings status, or immediate site requirement."
                  />
                </label>

                <div className="md:col-span-2 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {formError && <p className="text-xs text-red-400">{formError}</p>}
                    <p className="text-[11px] font-mono text-white/40">
                      Files and BOQ can be shared on WhatsApp or email after initial enquiry.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Request a Site Visit</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
