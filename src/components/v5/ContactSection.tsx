"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { BUSINESS_INFO, VERIFIED_SERVICES } from "@/lib/constants";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [workType, setWorkType] = useState("");
  const [location, setLocation] = useState("");
  const [requirement, setRequirement] = useState("");

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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    const data = new FormData(event.currentTarget);
    const required = ["name", "company", "phone", "location", "workType", "requirement"];
    if (required.some((key) => !String(data.get(key) ?? "").trim())) {
      setFormError("Please complete the required project details before continuing.");
      return;
    }
    const message = `Hello Kwality Interiors, I would like to discuss a project. Name: ${data.get("name")}. Company: ${data.get("company")}. Phone: ${data.get("phone")}. Email: ${data.get("email") || "Not provided"}. Location: ${data.get("location")}. Work type: ${data.get("workType")}. Requirement: ${data.get("requirement")}.`;
    window.open(
      `https://wa.me/919849183165?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <section id="contact" className="v5-section bg-[#05070a] border-b border-white/10">
      <div className="v5-container">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          {/* Direct Communication Channels */}
          <div>
            <p className="v5-kicker">10 / CONTACT</p>
            <h2 className="v5-display mt-5">DISCUSS YOUR PROJECT.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/55">
              Tell us what you are planning, where the work is located and what scope you need.
              The form prepares a project brief for WhatsApp; direct phone call and official email remain immediately available.
            </p>

            <div className="mt-10 space-y-5 text-sm">
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
              <div className="contact-line">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
            </div>
          </div>

          {/* Structured B2B Project Enquiry Form */}
          <form
            onSubmit={onSubmit}
            className="grid gap-4 border border-white/10 bg-white/[.02] p-5 md:grid-cols-2 md:p-8"
          >
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
              <span>Email</span>
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
              <span>Work type *</span>
              <select
                className="field"
                name="workType"
                required
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
              >
                <option value="">Select a verified service</option>
                {VERIFIED_SERVICES.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
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
                placeholder="Tell us the scope, approximate size, tonnage, or immediate site requirement."
              />
            </label>

            <label className="field-label md:col-span-2">
              <span>Optional drawing / BOQ (attach after contact)</span>
              <input
                className="field file:mr-4 file:border-0 file:bg-amber-400 file:px-3 file:py-2 file:font-semibold"
                name="upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.dwg,.xlsx,.xls,.doc,.docx"
              />
              <small className="mt-1 block text-[11px] text-white/35">
                This handoff prepares a WhatsApp message with your project details; it does not upload files to a server. Drawing/BOQ sharing is currently handled through WhatsApp or email after initial enquiry.
              </small>
            </label>

            <div className="md:col-span-2 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                {formError && <p className="text-xs text-red-300">{formError}</p>}
                {submitted && !formError && (
                  <p className="text-xs text-emerald-300">
                    WhatsApp draft opened with your project details.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300"
              >
                <Send className="h-4 w-4" />
                Discuss Your Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
