# MCP MANIFEST & INTEGRATION REGISTRY — KWALITY INTERIORS

**Document Status:** Approved Baseline  
**Project:** Kwality Interiors Official Commercial Website  
**Phase:** Phase 0 — Discovery & Planning  
**Last Updated:** September 2026  

---

## 1. Automated MCP Discovery & Evaluation Overview

In accordance with the **Automatic MCP Discovery, Installation & Configuration Directive**, the environment has been inspected to evaluate required integrations. Rather than cluttering the system with redundant packages, we maintain a lean, high-reliability toolchain that pairs native Antigravity capabilities with specialized Model Context Protocol (MCP) servers.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MCP ECOSYSTEM ARCHITECTURE                      │
├──────────────────────────┬─────────────────────────────────────────────┤
│ BROWSER & VISUAL QA      │ chrome-devtools & playwright                │
├──────────────────────────┼─────────────────────────────────────────────┤
│ TECHNICAL DOCUMENTATION  │ google-developer-knowledge                  │
├──────────────────────────┼─────────────────────────────────────────────┤
│ VERSION CONTROL          │ github-mcp-server                           │
├──────────────────────────┼─────────────────────────────────────────────┤
│ GENERATIVE ASSETS        │ Antigravity Native Image & Asset Engines    │
└──────────────────────────┴─────────────────────────────────────────────┘
```

---

## 2. MCP Server Inventory

| Server Name | Provider / Source | Purpose in Kwality Interiors | Status | Auth Required? | Key Tools Utilized |
|---|---|---|---|---|---|
| **`chrome-devtools`** | `chrome-devtools-mcp@latest` via npx | Visual QA, console log checking, network payload verification, Lighthouse performance audits. | **CONFIGURED & ACTIVE** | No (Local Chrome instance) | `lighthouse_audit`, `take_screenshot`, `list_network_requests`, `list_console_messages`, `resize_page` |
| **`playwright`** | `@playwright/mcp@latest` via npx | Automated cross-device interaction, responsive viewport validation (Desktop 1920px, Tablet 768px, Mobile 375px), click and form tests. | **CONFIGURED & ACTIVE** | No (Local headless/headed browser) | `browser_navigate`, `browser_click`, `browser_take_screenshot`, `browser_resize`, `browser_fill_form` |
| **`google-developer-knowledge`** | `developerknowledge.googleapis.com` | Instant access to authoritative, up-to-date documentation on Web APIs, modern React patterns, and Core Web Vitals best practices. | **CONFIGURED & ACTIVE** | Handled via platform credentials | `search_documents`, `get_documents`, `answer_query` |
| **`github-mcp-server`** | `ghcr.io/github/github-mcp-server` | Repository tracking, commit management, pull request auditing, and branch synchronization. | **CONFIGURED & STANDBY** | GitHub PAT (Optional, when pushing to remote origin) | `create_or_update_file`, `create_pull_request`, `list_commits` |

---

## 3. Native Antigravity Tooling Synergies

Where an MCP server is either redundant or unnecessary, Antigravity's native platform tools provide zero-overhead execution:
- **`generate_image`**: Powers the Category B illustrative asset pipeline (generating photorealistic industrial atmospheric backgrounds and architectural framing scenes).
- **`browser_subagent`**: Conducts autonomous visual verification runs and automatically records session animations for UI reviews.
- **`run_command`**: Drives local Node/npm build processes, Sharp image processing, and Next.js development servers.

---

## 4. Security & Maintenance Rules
1. **Zero Secret Leakage:** No API tokens, passwords, or personal credentials shall ever be committed to Git or exposed in documentation.
2. **Minimalist Integration:** No experimental or unverified third-party MCPs will be loaded without explicit security audit and approval.
3. **Resilience Fallback:** If any MCP tool becomes unresponsive, the system gracefully falls back to native CLI commands (`npx`, `npm run`, native browser subagent).
