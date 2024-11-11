# TS-dashboard

TS-dashboard is a dashboard application built using React, TypeScript, Vite, and Chakra UI. The application includes various components such as tables, filter forms, line charts, and statistics.

## Live Demo 🌐

Check a deployment application [LIVE](https://tsdashboard.petroweb.pl)

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Testing](#testing)
- [Authors](#authors)
- [License](#license)

## Installation 📦

To install all dependencies, run:

```bash
npm install
```

## Running the Application 🛠️

To run the application in development mode, use:

```bash
npm run dev
```

To build the application for production, use:

```bash
npm run build
```

## Project Structure 📂
```bash
TS-dashboard/
├── .gitignore
├── eslint.config.js
├── index.html
├── jest.config.js
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── AsideBarMenu.tsx
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── DashboardStats.tsx
│   │   ├── Input/
│   │   ├── LineChartCard.tsx
│   │   ├── Navigation/
│   │   ├── Stat/
│   │   ├── Table/
│   │   ├── ui/
│   │   ├── UsersTable.tsx
│   │   └── UsersTableFilterForm.tsx
│   ├── contexts/
│   │   └── useUsersContext.tsx
│   ├── hooks/
│   │   ├── useAsideMenu.tsx
│   │   └── useUsersData.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   ├── types/
│   └── vite-env.d.ts
├── theme.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Technologies 

- React
- TypeScript
- Vite
- Chakra UI
- React Query
- React Router
- Recharts
- Jest

## Testing

Tests are written using Jest. To run the tests, use:
```bash
npm run test
```

## Authors 

[petroweb](https://petroweb.pl)

## Licence 📜
MIT