---
title: "A Practical View of LLM Security Testing"
date: 2023-09-10
summary: "Moving beyond 'jailbreaks' to realistic threat models."
tags: ["Red Teaming", "Testing"]
---

Much of the discourse on LLM security focuses on "jailbreaks"—getting the model to say something naughty. While interesting, this distracts from the real enterprise risks:
1. Indirect injection via RAG users.
2. Exfiltration of PII.
3. Denial of Wallet attacks.

This post outlines a practical testing methodology for enterprise teams.
