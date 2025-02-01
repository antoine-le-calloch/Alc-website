# Developer Guide

This guide provides instructions, standards, and best practices 
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
npm install
```

### Development

To start the CMS:

```bash
cd CMS
npm run dev
```

To start the frontend:

```bash
cd Frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For offline development you can use firebase as follows:

```bash
cd CMS
firebase emulators:start --project project-id
```

To export data from firestore:

```bash
cd CMS
firebase emulators:export ./dump --project project-id
```

To start firestore with exported data:

```bash
cd CMS
firebase emulators:start --import=./dump --project project-id
```

To start firestore with exported data and save data on shutdown:

```bash
cd CMS
firebase emulators:start --import=./dump --export-on-exit --project project-id
```

## 2. Code standards

- Use Image component from `next/image` for images.
- Use Link component from `next/link` for links.
- Use container from tailwindcss for each section.
