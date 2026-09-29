"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ShieldCheck, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Capability", href: "/#capability" },
    { label: "The Work", href: "/#work" },
    { label: "Proof", href: "/#proof" },
    { label: "About", href: "/#people" },
    { label: "Contact", href: "/#contact" },
  ];
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-base/90 backdrop-blur-md border-b border-steel-border py-3 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-white/5 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Firm Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none"
            aria-label="Kwality Interiors - Return to Home"
          >
            <div className="w-10 h-10 rounded bg-gradient-to-br from-amber-industrial to-amber-dark flex items-center justify-center font-bold text-slate-base text-xl tracking-tighter shadow-md transition-transform group-hover:scale-105">
              KI
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-steel-50 uppercase group-hover:text-amber-industrial transition-colors">
                  Kwality Interiors
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase bg-white/5 text-steel-400 px-1.5 py-0.5 rounded border border-white/10">
                  Estd. 2019
                </span>
              </div>
              <p className="text-[11px] text-steel-400 font-mono tracking-wider">
                Industrial Construction & Fabrication
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-steel-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = false;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "transition-colors duration-150 relative py-1 hover:text-amber-industrial",
                    isActive
                      ? "text-amber-industrial font-semibold"
                      : "text-steel-300"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-industrial rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Direct Contact Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-mono text-steel-300 hover:text-amber-industrial px-3 py-2 rounded border border-steel-border bg-slate-surface1/60 hover:border-amber-industrial/40 transition-colors"
              aria-label={`Call Kwality Interiors at ${BUSINESS_INFO.formattedPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-industrial" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>

            <Link href="/#contact">
              <Button size="sm" variant="primary" className="gap-1.5">
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-steel-300 hover:text-steel-50 hover:bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-industrial"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-over Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-slate-base/95 backdrop-blur-xl border-b border-steel-border z-40 px-6 py-8 flex flex-col justify-between">
          <nav className="flex flex-col gap-5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-steel-200 hover:text-amber-industrial py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-steel-500" />
              </Link>
            ))}
          </nav>

          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-2 text-xs text-steel-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-safety-cyan" />
              <span>GSTIN: {BUSINESS_INFO.gstin}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 p-3 rounded-md bg-slate-surface2 border border-steel-border text-steel-100 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-industrial" />
                <span>Call Now</span>
              </a>

              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center p-3 rounded-md bg-amber-industrial text-slate-base text-sm font-bold"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
