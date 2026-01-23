---
title: "Prompt Injection Eval Harness"
year: 2023
category: "Tooling"
summary: "A comprehensive test suite for evaluating LLM resistance to prompt injection attacks."
featured: true
tags: ["Security", "Evaluation", "Red Teaming"]
links:
  code: "https://github.com/anyiliu-mi"
---

## Overview
A CLI tool and library for automated red-teaming of LLM applications. It includes a dataset of over 500 adversarial prompts, covering direct injection, goal hijacking, and leak attempts.

## Key Features
- **Automated Grading**: Uses a strong judge model to verify attack success.
- **Extensible**: Plugin system for adding new attack vectors.
- **Reporting**: Generates PDF compliance reports.
