# Country Info API Server

This is the backend server for the Country Info application, built using Nest.js. It provides API endpoints for retrieving information about countries, including available countries, detailed country info, border countries, historical population data, and flag images.

## Features

- **Get Available Countries**: Retrieve a list of all available countries.
- **Get Country Info**: Retrieve detailed information about a specific country, including:
  - Border countries
  - Historical population data
  - Flag image URL

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)
- [Nest CLI](https://docs.nestjs.com/cli/overview) (optional but recommended)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/country-info-api.git
   cd country-info-api
2. **Install dependencies:**
   ```bash
   npm install
3. **Create `.env` file: Create a `.env` file in the root directory and add the following environment variables**
    ```bash
    # .env
    PORT=3000
## Running the Application
1. **Start the development server:**
    ```bash
    npm run start
2. **The server will start on `http://localhost:3000` by default.**