---
id: 1
title: Create Project Constitution
stage: constitution
date_iso: 2025-01-01
surface: agent
model: Qwen
feature: none
branch: main
user: Lenevo
command: /sp.constitution
labels: ["constitution", "setup", "documentation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/spec-template.md
  - .specify/templates/tasks-template.md
tests: []
prompt_text: |
  /sp.constitution Create a comprehensive technical book and interactive documentation site built with Docusaurus.

  The book is a capstone-level educational resource titled "Physical AI & Humanoid Robotics: Bridging Digital Intelligence with the Physical World".

  It is based on the following course outline:

  Course Focus: AI Systems in the Physical World – Embodied Intelligence.
  Goal: Bridge the gap between digital AI (the "brain") and physical robotic bodies. Students apply AI knowledge to control humanoid robots in simulated and real environments using modern robotics tools.

  Quarter Overview: Introduces Physical AI using ROS 2, Gazebo/Unity simulation, NVIDIA Isaac Sim/ROS, and Vision-Language-Action models for natural human-robot interaction.

  Modules:
  - Module 1: The Robotic Nervous System (ROS 2)
    - Middleware for robot control
    - Nodes, Topics, Services
    - Bridging Python AI agents to ROS via rclpy
    - URDF for humanoid robot descriptions

  - Module 2: The Digital Twin (Gazebo & Unity)
    - Physics simulation (gravity, collisions)
    - High-fidelity rendering and HRI in Unity
    - Sensor simulation: LiDAR, Depth Cameras, IMUs

  - Module 3: The AI-Robot Brain (NVIDIA Isaac™)
    - Isaac Sim for photorealistic simulation and synthetic data
    - Isaac ROS: Hardware-accelerated VSLAM and navigation
    - Nav2 for bipedal humanoid path planning

  - Module 4: Vision-Language-Action (VLA)
    - Convergence of LLMs and robotics
    - Voice-to-Action using OpenAI Whisper
    - LLM-based cognitive planning: Translate natural language commands (e.g., "Clean the room") into ROS 2 action sequences
    - Capstone Project: Autonomous Humanoid – Voice command → Planning → Navigation → Object detection → Manipulation

  The final output must be a professional Docusaurus-based static site that serves as both an interactive textbook and course companion:
  - Use modern Docusaurus v3+ features: MDX for interactive code blocks, diagrams (Mermaid), embedded simulations (if possible), and searchable docs.
  - Structure: Homepage intro, sidebar navigation following the modules, dedicated capstone section, glossary, references.
  - Include practical labs, code snippets (Python, ROS 2, Isaac Sim), diagrams, and step-by-step tutorials.
  - Tone: Educational, clear, engaging for advanced AI/robotics students.
  - Ensure accessibility, responsive design, dark/light mode support.
  - Prioritize accuracy, safety considerations in robotics, and real-world applicability.

  Constitution Principles (immutable guidelines that ALL future spec, plan, tasks, and implementation MUST follow):
  1. All content must be technically accurate and based on current best practices in ROS 2, NVIDIA Isaac, Gazebo/Unity, and VLA models as of 2025.
  2. Use Docusaurus exclusively for the site – no alternatives.
  3. Favor MDX for rich content: executable code snippets, Mermaid diagrams for architectures, embedded YouTube/IFrame for demos.
  4. Structure strictly follows the 4 modules + intro + capstone.
  5. Every module must include: Theory, Tools/Libraries, Hands-on Labs (with code), Challenges, and Quiz/Reflection questions.
  6. Emphasize embodied intelligence, physical laws, and safe human-robot interaction.
  7. Code examples must be runnable, well-commented, and use Python where possible.
  8. Site must be SEO-friendly, fast-loading, and include versioned docs if future updates are planned.
  9. Never introduce unrequested features; stay faithful to the course outline.
  10. Output only clean, production-ready Markdown/MDX files compatible with Docusaurus.

  Generate a complete, high-quality constitution.md that establishes these as the governing principles for the entire project.
response_text: |
  Created a comprehensive project constitution for "Physical AI & Humanoid Robotics: Bridging Digital Intelligence with the Physical World" with 10 core principles as requested. The constitution includes:
  1. Technical accuracy and best practices
  2. Docusaurus-exclusive implementation
  3. Rich interactive content with MDX
  4. Strict module structure adherence
  5. Comprehensive educational content
  6. Embodied intelligence focus
  7. Executable and well-documented code
  8. Performance and SEO optimization
  9. Scope fidelity
  10. Production-ready output

  Updated the following templates to align with the new constitution:
  - .specify/templates/plan-template.md
  - .specify/templates/spec-template.md
  - .specify/templates/tasks-template.md

  The constitution file is now properly created at .specify/memory/constitution.md with all required principles and governance information.
outcome: |
  Successfully created the project constitution and updated related templates to align with the new principles for the Physical AI & Humanoid Robotics educational resource.
evaluation: |
  The constitution was created with all 10 required principles and properly integrated into the project structure. All related templates were updated to include constitution compliance checks. The PHR has been created to document this work.
---

# Create Project Constitution

## Summary
Created a comprehensive project constitution for the "Physical AI & Humanoid Robotics: Bridging Digital Intelligence with the Physical World" educational resource, along with updating related templates to ensure alignment with the new principles.

## Details
- Created the main constitution file at `.specify/memory/constitution.md` with 10 core principles
- Updated plan template to include constitution compliance check
- Updated spec template to include constitution compliance check
- Updated tasks template to include constitution compliance check
- Created this PHR to document the changes
