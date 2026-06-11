# Start Your Project Booking Form Refactor

## Goal
Refactor `pages/Booking.tsx` from a consultation-focused Calendly page into a conversion-focused “Start Your Project” page that collects MVP/project details, sends the response to the site owner via EmailJS, shows a success summary, and then invites the user to book a Calendly meeting.

## Current State
- `pages/Booking.tsx` currently centers on a free 30-minute consultation and embeds a Calendly inline widget.
- EmailJS is already installed in `package.json`.
- Existing `.env.example` already documents EmailJS keys:
  - `EMAILJS_PUBLIC_KEY`
  - `EMAILJS_SERVICE_ID`
  - `EMAILJS_TEMPLATE_ID`

## Planned Changes

### 1. Page positioning and copy
Replace consultation language with “Start Your Project” positioning:
- Main heading should focus on starting the user’s MVP/project.
- Intro copy should explain that answering the questions helps Bestricky understand the idea, MVP scope, AI needs, design needs, references, timeline, and budget before scheduling a meeting.
- Replace the old “What You’ll Get” consultation bullets with project intake benefits, such as:
  - Clear MVP understanding
  - AI feature assessment
  - UI/UX direction
  - Timeline and budget alignment
  - Faster, more accurate project quote

### 2. Project intake form
Build a real form in `pages/Booking.tsx` with:
- Name input
- Email input
- Six required textarea questions:
  1. Briefly describe your startup idea or the problem you want to solve
  2. What core features do you want in your MVP, e.g. login, dashboard, payments, AI?
  3. Do you need AI features in your application? If yes, explain briefly
  4. Do you already have designs or should I handle UI/UX for your project?
  5. Do you have any reference websites or apps similar to what you want built?
  6. What is your expected timeline and budget for this MVP?
- Submit button labelled “Send Project Details”.
- Loading state while sending.
- Basic validation using native required fields.

### 3. EmailJS submission
Use `@emailjs/browser` directly from the React component:
- Import `emailjs` from `@emailjs/browser`.
- Initialize EmailJS with `import.meta.env.VITE_EMAILJS_PUBLIC_KEY` or `import.meta.env.EMAILJS_PUBLIC_KEY`, depending on project convention.
- Send the form data to the configured EmailJS service/template.
- Include template params for:
  - Name
  - Email
  - Startup idea/problem
  - Core MVP features
  - AI feature requirements
  - Design/UI/UX needs
  - Reference websites/apps
  - Timeline and budget
  - Submitted date
- Show a friendly error message if EmailJS fails.

### 4. Success confirmation
After a successful EmailJS send:
- Hide the form and show a success panel.
- Display a clear confirmation message, e.g. “We’ve received your project details.”
- Write out a summary of what the user submitted, grouped by question.
- Keep the tone reassuring and professional.
- Add a Calendly CTA below the summary:
  - “Book a meeting to discuss your project”
  - Use the existing Calendly URL unless a different one is provided.

### 5. Calendly placement
Keep Calendly available, but move it after form submission:
- The primary flow should be: answer questions → send via EmailJS → see summary → book Calendly meeting.
- Render the Calendly inline widget only in the success panel to avoid distracting users before they complete the form.
- Preserve the existing Calendly script-loading logic and URL unless updated.

## Files to Edit
- `pages/Booking.tsx`

## Validation
After implementation:
- Run `npm run build` to verify TypeScript/React build correctness.
- Manually test the form flow in the browser:
  - Submit empty form and confirm required fields block submission.
  - Submit with test answers and confirm EmailJS sends successfully.
  - Confirm the success summary matches submitted answers.
  - Confirm Calendly appears after successful submission.

## Assumptions
- Use the existing Calendly URL already present in `pages/Booking.tsx` unless a new Calendly link is provided.
- EmailJS should send from the browser using public EmailJS keys, matching the existing dependency.
- The EmailJS template should be configured in EmailJS to accept the form fields listed above.

## Required External Details
To complete the EmailJS integration successfully, the environment must include:
- EmailJS public key
- EmailJS service ID
- EmailJS template ID
- An EmailJS template that receives the submitted project details and forwards them to the desired recipient email.
