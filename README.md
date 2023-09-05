# Poshly-Word Counter

## Table of Contents
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd text-analyzer-app
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

Now, you should be able to access the application in your web browser at `http://localhost:3000`.

## Usage

The application allows you to:

- Analyze text by counting the number of words.
- Toggle between light and dark modes for a personalized experience.

## Features

### Word Count
- The main feature of this application is to count the number of words in the input text.

### Dark and Light Mode
- You can switch between dark and light modes by clicking the mode toggle button in the navigation bar.
- Dark mode provides a visually appealing interface with a dark background, while light mode offers a clean and bright design.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the source code for the React application.
  - `components/`: Contains React components used in the application.
    - `Navbar.js`: The navigation bar component.
    - `TextForm.js`: The text input and analysis component.
    - `Alert.js`: The alert component for displaying notifications.
    - `About.js`: The about page component.
  - `App.js`: The main application component.
- `App.css`: CSS styles for the application.
- `index.js`: Entry point for the React application.
- `README.md`: This README file.
