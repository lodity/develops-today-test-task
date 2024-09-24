# Country Info Client

This is the frontend client for the Country Info application, built using Next.js, React, TypeScript, and Tailwind CSS. It displays a list of available countries and detailed information pages for each country, including population charts and border country details.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Country List Page**: Displays a list of available countries with clickable links to detailed country info pages.
- **Country Info Page**: Displays detailed information about the selected country, including:
  - Country name and flag
  - List of bordering countries with clickable links
  - Population chart over time

## Prerequisites

Ensure you have the following installed on your development environment:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/country-info-client.git
   cd country-info-client
2. **Install dependencies:**
    ```bash
    npm install
3. **Setup Environment Variables: Create a .env.local file in the root directory of the project and add the following environment variable:**
    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:7777/countries
## Running the Application
1. **Clone the repository:**
   ```bash
    npm run dev
2. **Open `http://localhost:3000` in your browser to see the application.**