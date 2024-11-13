# TS-dashboard 🚀

TS-dashboard is a dashboard application built using React, TypeScript, Vite, and Chakra UI. The application includes various components such as tables, filter forms, line charts, and statistics. It leverages React Query for data fetching and state management, and Vitest with React Testing Library for testing.

## Live Demo 🌐

Check a deployment application [LIVE](https://tsdashboard.petroweb.pl)



## Table of Contents 📚

- [Features](#features ✨)
- [Installation](#installation 📦)
- [Getting Started](#getting-started 🛠️)
- [Project Structure](#project-structure 📂)
- [Components](#components 🧩)
- [Technologies Used](#technologies-used 💻)
- [Testing](#testing 🧪)
- [Authors](#authors 👥)
- [License](#license 📜) 

## Features ✨

- **Responsive Design** 📱💻: Optimized for both desktop and mobile devices.
- **Data Visualization** 📊: Interactive charts using Recharts.
- **Data Tables** 📋: Feature-rich tables with pagination and filtering.
- **State Management** ⚛️: Efficient data fetching and caching with React Query.
- **Custom Components** 🛠️: Reusable components like cards, buttons, inputs, and tables.
- **Theming** 🎨: Customizable themes with Chakra UI.
- **Testing** ✅: Comprehensive test suite using Vitest and React Testing Library.

## Installation 📦

To install all dependencies, run:

```bash
npm install
```

## Getting Started 🛠️

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
├── vite.config.ts
├── vitest.config.ts
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── __tests__/
│   │   ├── AsideBarMenu.test.tsx
│   │   ├── UsersTable.test.tsx
│   │   ├── ...
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
│   │   ├── UsersTable.tsx
│   │   └── UsersTableFilterForm.tsx
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   │   ├── useAsideMenu.tsx
│   │   └── useUsersData.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Users.tsx
│   │   └── Events.tsx
│   ├── setupTest.ts
│   ├── types/
│   ├── utils/
│   │   ├── dashboardDataUtils.ts
│   │   ├── tableUtils.ts
│   │   └── ...
│   └── vite-env.d.ts
├── theme.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
```

## Key Directories and Files 🗂️
- src/components/: Contains reusable UI components like Button, Card, Input, Stat, Table, and more.
- src/pages/: Pages like Dashboard, Users, and Events that compose the components to build the application views.
- src/hooks/: Custom hooks like useUsersData and useEventsData for data fetching and state management.
- src/utils/: Utility functions for data generation, sorting, pagination, and other helpers.
- src/tests/: Test files for components and utilities to ensure code reliability.

## Components 🧩

- **AsideBarMenu**
  - **Location**: `AsideBarMenu.tsx`
  - **Description**: Provides a collapsible side navigation menu with links to different pages. Utilizes the `useAsideMenu` hook for managing the state of the menu.

- **UsersTable**
  - **Location**: `UsersTable.tsx`
  - **Description**: Displays a paginated and filterable table of user data. Fetches data using the `useUsersData` hook and allows sorting and pagination through utility functions.

- **LineChartCard**
  - **Location**: `LineChartCard.tsx`
  - **Description**: Renders a line chart within a card layout using Recharts. Displays data trends over time.

- **DashboardStats**
  - **Location**: `DashboardStats.tsx`
  - **Description**: Shows key statistics in a dashboard view using the `Stat` component. Provides quick insights into data metrics.

## Custom Hooks ⚙️

- **useUsersData**
  - **Location**: `useUsersData.tsx`
  - **Description**: Manages fetching, caching, and updating of user data using React Query. Handles data persistence and synchronization.

- **useEventsData**
  - **Location**: `useEventsData.tsx`
  - **Description**: Similar to `useUsersData`, but for event data. Implements data sorting and storage utilities.

## Utilities 🛠️
 
- **Data Generation**
  - **Location**: `src/utils/dataGeneration.ts`
  - **Description**: Contains functions like `generateEventsData` to create mock data for testing and development purposes.

- **Table Utilities**
  - **Location**: `tableUtils.ts`
  - **Description**: Provides functions for data pagination, sorting, and filtering within tables.


Technologies Used 💻
- React ⚛️: For building the user interface.
- TypeScript 📝: For adding static typing to JavaScript.
- Vite ⚡: For fast development and build tooling.
- Chakra UI 🎨: For UI components and theming.
- React Query 🔍: For data fetching and state management.
- React Router 🛤️: For client-side routing.
- Recharts 📊: For data visualization and charting.
- Vitest 🧪: For unit testing and test runner.
- React Testing Library 🧩: For testing React components.

## Testing 🧪

Tests are written using Vitest and React Testing Library to ensure application reliability and correctness.
```bash
npm run test
```

## Authors 👥

petroweb

## Licence 📜
MIT