# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

This is a comprehensive web development learning repository organized by technology stack and complexity levels. The codebase contains practical examples, exercises, and projects across frontend and backend technologies including HTML/CSS, Tailwind CSS, JavaScript (Foundation & Advanced), Node.js, Express.js, React, and PostgreSQL.

## Project Structure Architecture

The repository follows a numbered directory structure indicating learning progression:

- **01 HTML/**: Static HTML components (Button, Cards, CursorEffect, Forms, Navbar)
- **02 CSS/**: Core CSS concepts and layouts (Flexbox, Grid, Responsive Design)
- **03 Tailwind/**: Tailwind CSS setup with build configuration
- **04 JS Foundation/**: JavaScript fundamentals organized by parts (data types, conditions, loops, functions, OOP)
- **06 JS Advanced/**: Advanced JavaScript concepts (closures, promises, async/await, prototypal inheritance)
- **07 REACT/**: Multiple React projects using Vite as build tool
- **08 PGSQL/**: PostgreSQL scripts for database operations (DDL, DML, DCL, TCL, Joins, Normalization)
- **09 NODE-JS/**: Basic Node.js examples and JSON task storage
- **10 EXPRESS-JS/**: Project management backend API with comprehensive features
- **11 BACKEND/**: Simple Express servers and CRUD operations

## Common Development Commands

### Tailwind CSS (03 Tailwind/)
```bash
# Build Tailwind CSS (run from 03 Tailwind/ directory)
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### Node.js Express Applications
```bash
# Development server with auto-reload (any Express project)
npm run dev

# Production server
npm run start

# For projects without package.json scripts
node index.js
nodemon index.js
```

### React Projects (07 REACT/)
All React projects use Vite and have consistent scripts:
```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Express.js Project Management API (10 EXPRESS-JS/)
```bash
# Development with auto-reload
npm run dev

# Production
npm run start
```

## Key Technologies & Configurations

### React Projects Setup
- **Build Tool**: Vite 6.x
- **React Version**: 19.x
- **Styling**: Tailwind CSS 4.x with PostCSS
- **Linting**: ESLint 9.x with React-specific rules
- **Module Type**: ES Modules (`"type": "module"`)

### Express.js Backend Architecture
The Project Management API (`10 EXPRESS-JS/`) implements:
- **Authentication**: JWT-based with refresh tokens, email verification
- **Authorization**: Role-based (admin, project_admin, member)
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Multer middleware for task attachments
- **Email**: Nodemailer with Mailgen for templates
- **Security**: bcrypt for passwords, express-validator for input validation

### API Endpoint Structure (Express Project)
- `/api/v1/auth/` - Authentication routes
- `/api/v1/projects/` - Project CRUD and member management
- `/api/v1/tasks/` - Task and subtask management
- `/api/v1/notes/` - Project notes
- `/api/v1/healthcheck/` - System status

### Database Structure (PostgreSQL)
Scripts demonstrate:
- Data Definition Language (DDL) - table creation and modification
- Data Manipulation Language (DML) - CRUD operations
- Data Control Language (DCL) - permissions and access control
- Transaction Control Language (TCL) - transaction management
- Advanced queries with JOINs and normalization examples

## Development Patterns

### JavaScript Learning Progression
1. **Foundation** (part1-7): Basic syntax → OOP concepts → prototypes
2. **Advanced**: Closures → Promises → async/await → generators
3. **Data Structures**: Array methods with focus on `reduce()` and `map()`

### React Component Patterns
- Functional components with hooks (useState, useEffect, useContext)
- Custom hooks for reusable logic
- Props-based component composition
- Context API for state management
- Tailwind CSS for styling with utility classes

### Express.js API Patterns
- Middleware-based architecture for authentication and validation
- Role-based authorization with permission matrices
- RESTful endpoint design with proper HTTP status codes
- File upload handling with security considerations
- Error handling with consistent response formats

## Running Single Components/Tests

### Run Individual JavaScript Files
```bash
# From JS Foundation or Advanced directories
node filename.js
```

### Run Specific React Project
```bash
# Navigate to specific React project directory first
cd "07 REACT/projectName"
npm run dev
```

### Test Database Scripts
```bash
# Connect to PostgreSQL and run individual scripts
psql -U username -d database_name -f "script_name.sql"
```

### Test API Endpoints
The Express project includes a comprehensive API with authentication. Set up environment variables for:
- MongoDB connection string
- JWT secrets
- Email service configuration
- File upload paths

## Environment Requirements

- **Node.js**: ES Modules support required (`"type": "module"` in package.json)
- **PostgreSQL**: For database examples and chai_store.sql demo database
- **MongoDB**: For the Express.js project management API
- **Email Service**: SMTP configuration for authentication features

## File Organization Principles

- Examples progress from simple to complex within each technology section
- Each React project is self-contained with its own dependencies
- Backend examples demonstrate both simple CRUD and production-ready APIs
- Database scripts are organized by SQL command categories
- JavaScript examples are grouped by concept with incremental complexity
