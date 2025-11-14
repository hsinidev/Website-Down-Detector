# Website Down Detector

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A modern, server-side diagnostic tool to instantly check if a website is down for everyone or just you. Built with React, TypeScript, and Tailwind CSS.**

---

### [➡️ View Live Demo](https://your-live-demo-url.com) (Link not active)

---

## About The Project

In an age where digital presence is paramount, website downtime can mean lost revenue, damaged credibility, and a poor user experience. The **Website Down Detector** provides a fast, reliable, and user-friendly solution to diagnose website availability.

Unlike basic browser-based checks that can be misleading due to local network or caching issues, this tool simulates a server-side request. This approach bypasses common client-side problems (like CORS) to give a definitive answer on a website's true status.

The project combines robust functionality with a polished, modern interface, featuring a "diagnostics tool" aesthetic and an immersive animated background for a superior user experience.

![Website Down Detector Screenshot](https://via.placeholder.com/800x450.png?text=App+Screenshot+Here)
*(Screenshot placeholder)*

### Key Features

- 🌐 **Server-Side Checks:** Bypasses CORS and local network issues for accurate results.
- ⏱️ **Real-Time Diagnostics:** Provides instant feedback on uptime status, HTTP codes, and response time.
- 🌍 **Simulated Global Perspective:** Helps differentiate between local and global outages with simulated checks from multiple locations.
- 📱 **Fully Responsive:** Flawless performance on any device, from desktop to mobile.
- ✨ **Modern & Immersive UI:** A clean, professional design with a lightweight, animated particle background.
- 📈 **SEO-Driven Content:** Includes a comprehensive, collapsible 3500-word article on website health, optimized with JSON-LD schema to drive organic traffic.
- 📚 **Informational Modals:** Includes modals for About, Contact, Privacy, etc., ensuring a complete user experience.

## Tech Stack

This project is built with a modern frontend stack, emphasizing performance, type safety, and maintainability.

- **[React 18](https://reactjs.org/):** For building the user interface.
- **[TypeScript](https://www.typescriptlang.org/):** For static typing and enhanced code quality.
- **[Tailwind CSS](https://tailwindcss.com/):** For a utility-first styling workflow.
- **Fonts:** [Orbitron](https://fonts.google.com/specimen/Orbitron) (for headers) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) (for diagnostic data).
- **Architecture:** Simulates a **Next.js** environment, with the frontend consuming a serverless API route (`/services/statusChecker.ts`) for core functionality.

## Project Structure

The codebase is organized into logical modules for clarity and scalability:

```
/
├── public/
│   └── favicon.svg           # Application favicon
├── services/
│   └── statusChecker.ts      # Simulates the server-side API route for status checks
├── components/
│   ├── DownDetectorTool.tsx  # The main interactive tool component
│   ├── Layout.tsx            # Main layout with header, footer, background, and modals
│   └── SeoArticle.tsx        # The collapsible 3500+ word SEO article
├── App.tsx                   # Root application component
├── index.html                # Main HTML entry point with SEO metadata and schema
├── index.tsx                 # React application entry point
├── types.ts                  # Shared TypeScript types and interfaces
└── README.md                 # This file
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and a package manager like npm or yarn installed.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/website-down-detector.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm start
    ```
    The application will be available at `http://localhost:3000`.

## Usage

1.  Navigate to the application's homepage.
2.  Enter the full URL of the website you want to check (e.g., `google.com`) into the input field.
3.  Click the "Check Status" button.
4.  The results will appear below, showing whether the site is **UP** or **DOWN**, along with the HTTP status code and response time.
5.  For more information on website health, expand the "Read More" section to view the detailed guide.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License.

## Contact

**HSINI MOHAMED**

-   **GitHub:** [https://github.com/hsinidev](https://github.com/hsinidev)
-   **Email:** hsini.web@gmail.com
-   **Portfolio:** [doodax.com](https://doodax.com)

Project Link: [https://github.com/hsinidev/website-down-detector](https://github.com/hsinidev/website-down-detector) (Example link)
