# Data Model: Physical AI & Humanoid Robotics Documentation

## Overview
This document describes the data model for the Docusaurus-based educational content site for "Physical AI & Humanoid Robotics". Since this is primarily a documentation site with static content, the data model focuses on the structure and relationships of the content rather than traditional data entities.

## Content Entities

### Module
- **name**: string (e.g., "The Robotic Nervous System")
- **slug**: string (e.g., "module1-ros2")
- **title**: string (e.g., "Module 1: The Robotic Nervous System (ROS 2)")
- **description**: string (brief overview of the module)
- **pages**: Page[] (list of pages in the module)
- **labs**: Lab[] (list of labs in the module)
- **order**: number (sequence in the course)

### Page
- **id**: string (unique identifier, e.g., "module1-ros2/intro")
- **title**: string (e.g., "Introduction to ROS 2")
- **slug**: string (e.g., "intro")
- **content**: string (MDX content)
- **module**: Module (parent module)
- **type**: enum ("intro", "theory", "key-concepts", "tools", "challenges", "safety", "quiz")
- **prerequisites**: Page[] (pages that should be completed before this one)
- **related**: Page[] (related pages)

### Lab
- **id**: string (unique identifier, e.g., "module1-ros2/lab1")
- **title**: string (e.g., "Lab 1: Setting up ROS 2 Environment")
- **slug**: string (e.g., "lab1")
- **module**: Module (parent module)
- **objective**: string (what the learner will accomplish)
- **prerequisites**: string[] (requirements before starting the lab)
- **steps**: LabStep[] (ordered list of steps)
- **codeExamples**: CodeExample[] (code snippets for the lab)
- **expectedOutcome**: string (what the learner should achieve)

### LabStep
- **id**: string (unique identifier)
- **title**: string (brief title of the step)
- **description**: string (detailed instructions)
- **codeExample**: CodeExample (optional code for this step)
- **order**: number (sequence in the lab)

### CodeExample
- **id**: string (unique identifier)
- **title**: string (description of the code)
- **language**: string (e.g., "python", "bash", "yaml")
- **code**: string (the actual code snippet)
- **explanation**: string (what the code does)
- **relatedPage**: Page (the page this example belongs to)

### Quiz
- **id**: string (unique identifier)
- **title**: string (e.g., "Module 1 Quiz")
- **module**: Module (parent module)
- **questions**: Question[] (list of quiz questions)
- **passingScore**: number (minimum score to pass)

### Question
- **id**: string (unique identifier)
- **type**: enum ("multiple-choice", "true-false", "short-answer", "reflection")
- **questionText**: string (the actual question)
- **options**: string[] (for multiple choice questions)
- **correctAnswer**: string | number (the correct answer)
- **explanation**: string (why this is the correct answer)

### Resource
- **id**: string (unique identifier)
- **title**: string (e.g., "ROS 2 Documentation")
- **type**: enum ("link", "paper", "tool", "glossary-term")
- **url**: string (for links)
- **description**: string (what this resource provides)
- **relatedModules**: Module[] (modules this resource relates to)

### GlossaryTerm
- **id**: string (unique identifier)
- **term**: string (the term being defined)
- **definition**: string (the definition)
- **category**: string (e.g., "ROS", "AI", "Simulation")
- **relatedTerms**: GlossaryTerm[] (related terms)

## Relationships

- Module contains many Pages and Labs
- Page belongs to one Module
- Lab belongs to one Module
- Lab contains many LabSteps
- Lab contains many CodeExamples
- Module has one Quiz
- Quiz contains many Questions
- Page may reference many CodeExamples
- Resource may be related to many Modules
- GlossaryTerm may be related to many other GlossaryTerms

## Content Validation Rules

1. Each Module must have:
   - At least 8 pages (intro, theory, key-concepts, tools, challenges, safety, quiz, index)
   - At least 3 labs
   - A unique slug that follows the pattern "module{number}-{topic}"

2. Each Page must have:
   - A unique ID within its module
   - A title and MDX content
   - A defined type from the allowed enum values

3. Each Lab must have:
   - A clear objective
   - At least 3 steps
   - At least one code example
   - Prerequisites defined

4. Each Quiz must have:
   - At least 5 questions
   - A defined passing score (typically 70% or higher)

5. Each CodeExample must:
   - Be associated with a specific page or lab
   - Include both the code and an explanation
   - Use Python where possible as per requirements

## State Transitions

For content management purposes:
- Draft → Review → Approved → Published
- Content can be Archived but not deleted to maintain link integrity