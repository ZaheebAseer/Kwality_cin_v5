"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faq";
import { Reveal, RevealHeading } from "@/components/motion";
import { ChevronDown, HelpCircle, AlertTriangle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const isDev = process.env.NODE_ENV !== "production";

  // Production Safety: Include ONLY confirmed FAQs in production builds
  const visibleFaqs = FAQS.filter((f) => isDev || f.confirmed);

  // Accordion open item state (first confirmed item open by default)
  const [openId, setOpenId] = useState<string | null>(visibleFaqs[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // FAQPage Schema LD+JSON (ONLY includes questions shown in production)
  const productionConfirmedFaqs = FAQS.filter((f) => f.confirmed);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productionConfirmedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="v5-section border-b border-white/10 bg-[#07090e] text-white"
      aria-label="Frequently Asked Questions"
    >
      {/* FAQPage Structured Data (Confirmed questions only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-amber-400" />
                10 / TECHNICAL &amp; OPERATIONAL FAQ
              </p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-4 max-w-4xl">
              COMMON QUESTIONS. CONFIRMED ANSWERS.
            </RevealHeading>
          </div>
          <Reveal
            level="l3"
            className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55"
          >
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Factual Transparency
            </p>
            Answers strictly derived from Kwality Interiors verified operational capabilities,
            statutory registrations, and client project records.
          </Reveal>
        </div>

        {/* Dev Warning Banner */}
        {isDev && (
          <div className="mt-8 rounded border border-dashed border-amber-500/40 bg-amber-500/5 p-4 text-xs font-mono text-amber-300">
            [DEV PREVIEW: FAQ System]: Questions marked with amber badges contain{" "}
            <code>[CONFIRM: ...]</code> placeholders. They are strictly HIDDEN in production builds
            per PRD Section 8 until verified operational rates and timelines are confirmed.
          </div>
        )}

        {/* Accordion List */}
        <div className="mt-12 max-w-4xl divide-y divide-white/10 border-y border-white/10">
          {visibleFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="flex w-full items-center justify-between text-left py-2 gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    {!faq.confirmed && (
                      <span className="inline-flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-mono px-2 py-0.5 rounded">
                        <AlertTriangle className="h-3 w-3" /> DEV ONLY
                      </span>
                    )}
                    <span className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 text-white/50 shrink-0 transition-transform duration-300 group-hover:text-amber-400 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="pt-2 pb-4 text-sm leading-relaxed text-white/75"
                  >
                    {!faq.confirmed ? (
                      <div className="rounded bg-amber-500/10 border border-amber-500/30 p-3 font-mono text-xs text-amber-300">
                        {faq.answer}
                      </div>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
