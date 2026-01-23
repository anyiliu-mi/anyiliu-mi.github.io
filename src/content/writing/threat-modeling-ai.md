---
title: "Threat Modeling for AI-Enabled Systems"
date: 2023-06-05
summary: "Adapting STRIDE for non-deterministic components."
tags: ["Threat Modeling"]
featured: true
---

Standard threat modeling assumes deterministic components. AI components introduce non-determinism and "probabilistic failure modes."

How do we represent an LLM in a Data Flow Diagram (DFD)? Is it a process? A data store? An external entity? I propose treating it as a **"Probabilistic Oracle"** with a specific trust boundary.
