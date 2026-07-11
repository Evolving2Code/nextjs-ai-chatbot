# 🤖 Next.js AI Chatbot

A lightweight, full-stack AI chatbot built from scratch using the Next.js App Router, optimized specifically for high-performance mobile and web layouts.

---

## 🏗️ Architectural Blueprint

### 1. File Structure Map
src/
├── app/
│   ├── page.tsx          # Main Chat UI Shell (Task #2)
│   ├── layout.tsx        # Global providers & HTML metadata
│   └── api/
│       └── chat/
│           └── route.ts  # Edge-optimized AI Streaming API (Task #3)
├── components/
│   ├── chat-box.tsx      # Scrolling message history window
│   └── chat-input.tsx    # Mobile-optimized text input field
└── lib/
    └── db.ts             # Relational database pipeline (Task #5)

### 2. Core Technical Flow
1. Frontend (UI): React components manage user input state and instantly append messages to a local array for zero-latency UI updates.
2. API (Route Handler): A Next.js API route handles communication with the AI provider using streaming protocols to drastically lower Time-To-First-Token (TTFT).
3. Storage (Persistence): Messages are securely cataloged in a lightweight schema to maintain conversational context across sessions.

---

## 🛠️ Local Development

### Prerequisites
- Node.js & pnpm package manager

### Getting Started
# Install dependencies
pnpm install

# Run the local development server
pnpm dev
