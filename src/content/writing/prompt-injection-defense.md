---
title: "Notes on Prompt Injection Defense"
date: 2024-01-15
summary: "Why filtering is insufficient and why structural separation is the only robust path forward."
tags: ["Security", "LLM"]
featured: true
---

Prompt injection remains the number one vulnerability for LLM applications. In this note, I argue that input filtering (heuristics, perplexity checks) is mathematically destined to fail against an adaptive adversary.

The only robust defense is **structural separation**: ensuring that user input is never placed in the same context channel as system instructions, or treating the LLM as an untrusted component within a larger trusted system.
