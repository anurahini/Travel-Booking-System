# ✈️ Travel Booking System

A modern, responsive Travel Booking web application built with **React.js (Create React App)**.
This project was designed as a **DevOps Jenkins Freestyle / Pipeline deployment exercise** — it
has no backend, no external services, and builds with zero configuration.

## Features

- Professional header with logo, title, and navigation
- Hero section with call-to-action
- Booking form with full client-side validation (add booking, clear form)
- Six destination cards (image, country, description, price, rating, book button)
- Booking Summary Dashboard: total bookings, domestic trips, international trips, total travelers
- Recent booking card + full booking list with delete functionality
- Empty state when no bookings exist
- Footer with company info and social icons
- Fully responsive (desktop, tablet, mobile)
- Glassmorphism cards, smooth hover animations, gradient theme

## Tech Stack

- React.js (Create React App)
- Functional components + Hooks (`useState`, `useMemo`, `useEffect`)
- Plain CSS (Flexbox + Grid, no UI frameworks)
- No backend / no database — all state is managed in-memory with React

## Project Structure

```
travel-booking-system/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── BookingForm.jsx
│   │   ├── DestinationCard.jsx
│   │   ├── DestinationList.jsx
│   │   ├── Dashboard.jsx
│   │   ├── BookingSummary.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
```

This generates an optimized `build/` folder ready for deployment.

## Jenkins Deployment

This project requires **no additional configuration** to build in CI. Both a
**Jenkins Freestyle Project** and a **Jenkins Pipeline** can build it using:

```bash
npm install
npm run build
```

### Example Jenkinsfile

```groovy
pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }
}
```

The `build/` directory contains static assets that can be served by any static
web server (Nginx, Apache, S3, etc.) after the pipeline completes.

## License

This project is provided for educational and DevOps training purposes.
