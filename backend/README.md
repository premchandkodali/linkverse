# Backend Express.js Project

This folder contains the backend implementation of the project using Express.js. Below is a brief overview of the structure and purpose of the files within the `src` directory.

## Directory Structure

- **src/app.ts**: The entry point of the application. It initializes the Express app, sets up middleware, and defines the routes.
  
- **src/controllers/index.ts**: Contains the `IndexController` class, which handles the logic for the root route of the application.

- **src/routes/index.ts**: Defines the routing for the application. It utilizes the `IndexController` to manage the root route.

- **src/types/index.ts**: Contains TypeScript interfaces that extend the Express library's Request and Response interfaces for better type safety.

## Getting Started

1. **Install Dependencies**: Run `npm install` to install the required packages.
2. **Compile TypeScript**: Use `tsc` to compile the TypeScript files.
3. **Run the Application**: Start the server using `node dist/app.js` (or the appropriate command based on your setup).

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.