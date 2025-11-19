# Bingo Billionaires

## Overview
A web-based Bingo game application with integrated account management features. Users can play bingo, manage their gambling accounts, deposit/withdraw money, and set spending limits.

## Project Architecture
- **Frontend**: Static HTML, CSS, and JavaScript
- **Server**: Node.js with Express serving static files
- **Database**: MySQL connection mentioned in `pages/node.js` (not currently active)

## Recent Changes
- **2025-11-19**: Initial Replit environment setup
  - Created Express server to serve static files on port 5000
  - Added package.json for dependency management
  - Created home page (index.html) as landing page
  - Configured .gitignore for Node.js project

## File Structure
```
/
├── index.html          # Landing page
├── server.js           # Express server
├── package.json        # Node.js dependencies
├── pages/              # Application pages
│   ├── bingo.html      # Bingo game
│   ├── accountLO.html  # Account page (logged out)
│   ├── accountsLI.html # Account page (logged in)
│   ├── base.html       # Base template
│   ├── changeDetails.html
│   ├── bingoscript.js  # Bingo game logic
│   ├── script.js       # UI interactions
│   ├── bingoStyle.css  # Bingo styling
│   └── style.css       # General styling
├── README.md           # Original project readme
└── HLA.drawio.png      # Diagram
```

## Key Features
- Interactive Bingo game with 81 squares
- User account creation and login
- Balance and spending limit management
- Deposit/withdrawal simulation
- Leaderboard display

## Technology Stack
- HTML5
- CSS3 (with custom animations)
- Vanilla JavaScript
- Node.js + Express

## Known Limitations
- Currently frontend-only (no active database)
- Mock bank account validation
- No real authentication system
- Static user data

## User Preferences
None documented yet.
