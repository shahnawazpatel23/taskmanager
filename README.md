# Task Management Application

A simple task management application built with Next.js, Server Actions, and MongoDB.

## Features

- Manage tasks in a simple and efficient manner.
- Backend API routes using Next.js.
- Simple user interface for viewing and managing tasks.

## Project Structure

```
app/
├── components/     # UI components
├── db/             # Database connection files
├── lib/            # Utility functions
└── page.js         # Main page entry
next.config.js      # Next.js configuration
package.json        # Project metadata and dependencies
```

## Prerequisites

Ensure that the following are installed on your system:

- Node.js (v16 or higher)
- MongoDB (locally or cloud instance)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
MONGODB_URI=<your-mongodb-uri>
```

### 4. Run the Development Server

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.



