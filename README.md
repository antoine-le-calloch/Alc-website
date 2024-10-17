# Developer Guide

This guide provide instructions, standards, and best practices 
to ensure effective collaboration and high-quality code.

## 1. Environment Setup

### Prerequisites

- **Node.js** (version 16 or later)
- **npm** (version 7 or later)

### Installation

Run this line in the following two projects:
- The CMS
- The Frontend

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Development

For offline development you can use firebase as follows:

```bash
cd CMS
firebase emulators:start --project project-id
```

## 2. Code standards

- Use Image component from `next/image` for images.
- Use Link component from `next/link` for links.
- Use container from tailwindcss for each section.