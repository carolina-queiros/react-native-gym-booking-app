# Multi-Tenant Gym Class Booking & Management App (React Native & Firebase)

Cross-platform mobile application architecture developed with **React Native** and **Google Cloud Firestore**, designed to manage gym class scheduling, real-time capacity enforcement, QR code attendance validation, and role-based access control across multiple gym tenants.

## System Architecture & Modules

- **[01-requirements-and-ux-flows](./01-requirements-and-ux-flows)** — Complete functional specification (`RFC0-RFC7`, `RFG0-RFG5`, `RFA0-RFA3`), non-functional multi-tenant architecture (`RNF0-RNF1`), and Figma UI/UX screen mapping.
- **[02-firestore-nosql-schema](./02-firestore-nosql-schema)** — Cloud Firestore NoSQL document collections (`gyms`, `users`, `classes`, `bookings`), booking lifecycle state machine (`INSCRITO`, `CANCELADO`, `FEITO`, `FALTA`), and Firebase Security Rules.
- **[03-navigation-and-screens](./03-navigation-and-screens)** — React Native multi-navigator structure (Stack, Bottom Tab, and Drawer navigation) segmented by actor role (`Athlete`, `Manager`, `Administrator`).
- **[04-validation-and-utils](./04-validation-and-utils)** — Client-side input validation utilities, Portuguese phone format regex validators (`+351`), password confirmation checks, and membership fee eligibility guards.

## Tech Stack
- **Mobile Frontend:** React Native (JavaScript / ES6+), React Navigation (Stack, Tab & Drawer)
- **Backend-as-a-Service (BaaS):** Firebase Authentication, Cloud Firestore (NoSQL), Firebase Cloud Messaging
- **UI/UX Prototyping:** Figma (24 responsive mobile screens, custom white-label color themes)