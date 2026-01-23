---
title: "LLM-Assisted Threat Modeling"
year: 2024
category: "Security"
summary: "A framework for using Large Language Models to potential security threats in software architectures."
featured: true
tags: ["LLM", "Security", "AI", "Threat Modeling"]
links:
  paper: "#"
  code: "#"
---

## Problem
Traditional threat modeling is manual, time-consuming, and requires specialized expertise. As software systems grow in complexity, keeping threat models up-to-date becomes a bottleneck.

## Approach
We developed a pipeline that ingests system design documents and code snippets, then prompts an ensemble of LLMs to identify potential threats based on STRIDE and Attack Trees. The system includes a verification step to reduce false positives.

## Results
- **Efficiency**: Reduced initial threat modeling time by 60%.
- **Coverage**: Identified subtle logic flaws often missed by human reviewers.
- **Adoption**: Successfully piloted with internal dev teams.
