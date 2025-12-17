# EduRescue – Portable Project Memory (Repo Wiki)

This document is the **Portable Project Memory System** for EduRescue.  
যেকোনো নতুন ChatGPT / AI সহকারীকে শুধু এই ডকটি দেখালেই প্রজেক্টের full context পেয়ে যাবে।

---
Tasks for you:
1) Turn this into a GitHub docs structure with:
   - One main Wiki home page
   - 2–4 subpages (e.g., Architecture, Features, Prompts)
   - One in-repo file: PROJECT_WIKI.md (or /docs/PROJECT_WIKI.md)
2) For each page/file:
   - Give me the file/page name
   - Give me the full Markdown content (ready to paste)
   - Tell me exactly where to create it (Wiki vs repo file path)
3) Keep section headings and content as close as possible to this doc, just better organized.

## Section 01: Project Summary

### 1.1 App Name

**EduRescue** – Bangladesh-এর ২৪/৭ Academic Emergency Platform

### 1.2 Goal

Bangladesh-এর SSC / HSC / University / Job-exam students যেন:

- ২৪/৭ সময়ে **academic emergency** অবস্থায়  
- দ্রুত **AI first answer** এবং প্রয়োজনে **human expert verified answer** পায়  
- এক জায়গাতেই problem → solution → saved notes → revision করতে পারে  

### 1.3 Target Users

- **Primary:**  
  - SSC / HSC / University students (Bangladesh, Bangla-first, phone-first)
- **Secondary:**  
  - Job exam aspirants  
  - Subject experts / teachers (as “Experts”)  
  - Light Admin / Ops user (monitor tickets, manage experts/resources)

### 1.4 Problem Statement

Students:

- রাতের বেলা বা exam-এর আগে **panic mode**-এ চলে যায়  
- Private tutor / coaching সবসময় reachable হয় না  
- Facebook group / YouTube search করতে করতে সময় নষ্ট হয়  
- Clear, exam-focused explanation + human verification একসাথে পায় না  

EduRescue solves:

- **Panic → AI answer → optional emergency escalation → verified answer**  
- All within a single, calm, focused interface.  

### 1.5 One-line Pitch

> **EduRescue** is a 24/7 academic emergency platform for Bangladeshi students where AI answers first and human experts verify when it really matters.

---

## Section 02: Feature List (MVP → V2 → Future)

### 2.1 Page List

#### Student Area (MVP)

Routes (Next.js App Router):

- `/student/assistant` – AI Assistant (default after login, main chat)  
- `/student/emergency` – My Emergency Tickets (status list)  
- `/student/notes` – Saved Notes from verified answers  
- `/student/resources` – Curated Resources (syllabus, formula sheets, key links)  
- `/student/dashboard` – Light overview (quick entry into chat & tickets)  
- `/student/conversations/[id]` – Specific conversation view (optional if assistant page already shows details)

#### Expert Area (MVP)

- `/expert/inbox` – Ticket queue (REQUESTED / ASSIGNED / IN_REVIEW)  
- `/expert/conversations/[id]` – Conversation + ticket detail + verify UI

#### Admin/Ops (Post-MVP / simple)

- `/admin` or `/expert/admin` – Basic ticket overview, exports, expert management (can be very minimal initially)

---

### 2.2 Feature Breakdown by Phase

#### MVP (must have)

**Student:**

- Login / Register (basic auth)  
- Land on `/student/assistant` by default  
- Send question (text + optional image)  
- Receive AI answer in chat  
- Escalate to Emergency Help from chat (“Need Human Help?”)  
- See ticket status in `/student/emergency`  
- Save important answers as Notes (`/student/notes`)  

**Expert:**

- Login as Expert  
- See ticket inbox (`/expert/inbox`)  
- Open full conversation context (`/expert/conversations/[id]`)  
- Write verified answer (expert message)  
- Mark ticket VERIFIED  

**Platform:**

- Basic roles: STUDENT / EXPERT / ADMIN  
- Prisma schema in place  
- Minimal API endpoints for chat + tickets + notes  

#### V2 (next wave)

- Better ticket assignment / matching logic  
- Simple analytics for Ops (number of tickets, response time)  
- Basic student history: list of past conversations in assistant  
- More polished Resources (category filters, tags)  
- Basic mobile optimizations & offline handling (as much as feasible)

#### Future (vision)

- Institution integration (schools / coaching centers)  
- Group sessions / live classes for trending panic topics  
- Recommendation engine for weak topics  
- Exam-specific bundles (e.g., “HSC Accounting Crash Help”)  
- Paid tiers / subscription plans (with usage counters & limits)

---

### 2.3 Component List (High-level)

**Layout components:**

- `StudentShell` – Overall student layout (sidebar + topbar + content)  
- `StudentSidebar` – Nav items (Dashboard, Assistant, Emergency, Resources, Notes)  
- `StudentTopbar` – Greeting, minimal profile controls  

- `ExpertShell` – Expert layout (sidebar/topbar)  
- `ExpertSidebar` / `ExpertTopbar` – Ticket navigation

**Assistant components:**

- `AIAssistantPage` – AI chat experience for student  
- `ChatShell` – Layout for message list + composer  
- `ChatMessageList` – Displays messages (student / AI / expert)  
- `ChatMessageBubble` – Styled individual messages  
- `ChatComposer` – Input box, send button, optional attachment upload  
- `SuggestedPrompts` – Chips for starter questions  
- `EmergencyEscalationModal` – UI to confirm emergency request  

**Emergency components:**

- `EmergencyRequestsList` – List of emergency tickets (student or expert view)  
- `TicketStatusBadge` – Visual representation of status  
- `TicketDetailCard` – Details view for a single ticket  

**Notes & Resources:**

- `SimplifiedNotesPage` – Shows a list of saved notes  
- `NoteCard` – Individual note  
- `SimplifiedResourcesPage` – Curated list of resources  
- `ResourceCard` – Single resource item  

**UI atoms (shadcn/ui style):**

- `Button`, `Card`, `Badge`, `EmptyState`, `Input`, `Textarea`, `Modal`  
- `Toaster` / Notifications (`sonner` based)  

---

### 2.4 User Flows (Core)

#### Student Flow: Panic → Verified Answer

1. Student logs in → lands on `/student/assistant`.  
2. Types question + optionally uploads an image.  
3. System creates `Conversation` (if new) and student `Message`.  
4. AI is called; AI `Message` is saved & shown in chat.  
5. Student feels unsure → clicks “Need Human Help?”  
6. System creates `EmergencyTicket` linked to that `Conversation`.  
7. Expert sees ticket in `/expert/inbox` (REQUESTED).  
8. Expert opens conversation, writes verified explanation (EXPERT `Message`).  
9. Ticket marked VERIFIED; student sees expert answer in the same chat, plus updated ticket status in `/student/emergency`.  
10. Student clicks “Save as Note” → Note created, appears in `/student/notes`.

#### Expert Flow

1. Expert logs in → lands on `/expert/inbox`.  
2. Sees list of tickets with status & time.  
3. Clicks one → `/expert/conversations/[id]` view: full context (student msgs + AI msgs).  
4. Claims ticket (`ASSIGNED`), moves to `IN_REVIEW`.  
5. Writes verified answer → ticket status `VERIFIED`.  
6. Optionally closes ticket after some time (`CLOSED`).  

---

### 2.5 Pain Points Addressed

**For Students:**

- Panic & confusion at odd hours → ২৪/৭ AI first response.  
- Low trust in pure AI → human expert verification for important questions.  
- Scattered knowledge (FB, YouTube, coaching notes) → centralized Notes & Resources.  

**For Experts:**

- Random DMs & messy requests → structured ticket inbox.  
- No context when student asks → full conversation history visible.  

**For Admin / Ops (future):**

- No visibility of demand → ticket metrics & filters.  
- Hard to manage experts manually → simple assignment & status flows.  

---

## Section 03: Architecture

### 3.1 Route Structure (Next.js 14 – App Router)

```txt
app/
  (auth)/
    login/page.tsx          -> /login
    register/page.tsx       -> /register

  (student)/
    student/
      layout.tsx            -> shared layout for all /student routes
      assistant/page.tsx    -> /student/assistant
      emergency/page.tsx    -> /student/emergency
      notes/page.tsx        -> /student/notes
      resources/page.tsx    -> /student/resources
      dashboard/page.tsx    -> /student/dashboard
      conversations/[id]/page.tsx -> /student/conversations/:id

  (expert)/
    expert/
      layout.tsx            -> shared layout for all /expert routes
      inbox/page.tsx        -> /expert/inbox
      conversations/[id]/page.tsx -> /expert/conversations/:id

  api/
    ... (see API list below)
