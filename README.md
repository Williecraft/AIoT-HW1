# Personal Web Portfolio

## Project Summary
A modern, responsive personal portfolio website built for Che-Wei Chang. The website highlights personal information, educational background, and ongoing research in Natural Language Processing (NLP) and Table Retrieval. It features a sleek design inspired by modern web aesthetics with dynamic elements like a live local time display.

## Overview
This project serves as a digital space to showcase academic and professional milestones. The current version includes:
- **Hero Section:** A welcoming landing area with a structured, geometric layout and an inspiring quote.
- **Dynamic Time Display:** Real-time local time tracking powered by JavaScript.
- **Education Section:** Details about the ongoing pursuit of a Computer Science and Engineering (CSE) degree at National Chung Hsing University (NCHU).
- **Research Section:** Information regarding an under-submission research paper exploring Inductive Graph Neural Networks for Table Retrieval within the NLP domain.
- **Responsive Design:** Optimized to deliver a seamless viewing experience across both desktop and mobile devices.

## Completed Tasks

### Web Development
- Created the core structure using semantic **HTML5**.
- Designed a premium, fully responsive UI using **CSS3**, utilizing custom fonts (Montserrat and Syne), flexbox layouts, and careful attention to text alignment and overflow prevention.
- Implemented **JavaScript** to handle dynamic functionality, specifically the live real-time local clock.

### Git & GitHub Integration
- Initialized a local Git repository.
- Configured Git user credentials (Name and Email).
- Committed the initial set of files (`index.html`, `style.css`, `script.js`).
- Linked the local repository to a remote GitHub repository (`https://github.com/Williecraft/AIoT-HW1.git`).
- Successfully pushed the `main` branch to the remote origin.

## File Structure
```
Personal Web/
│
├── index.html       # The main HTML structure of the portfolio.
├── style.css        # The styling rules and responsive media queries.
├── script.js        # The logic for dynamic elements like the live clock.
└── README.md        # Project documentation and overviews.
```

## Future Recommendations
- **Project Showcase Expansion:** Add a dedicated section or page to display other academic and personal coding projects.
- **Contact Form:** Implement a functional contact section (potentially integrating a backend or a service like Formspree) to allow visitors to reach out directly.
- **Interactive Animations:** Introduce scroll-based animations (e.g., using Intersection Observer) to make the sections reveal dynamically as the user scrolls.
- **Dark/Light Mode Toggle:** Allow users to manually toggle between color themes for improved accessibility and user preference.
- **Multi-language Support (i18n):** Since the user is at a university in Taiwan, adding a toggle for traditional Chinese text could improve local marketability.
- **CI/CD Pipeline:** Set up GitHub Actions to automatically deploy changes to GitHub Pages or another hosting provider (e.g., Vercel, Netlify) whenever a push is made to the `main` branch.
