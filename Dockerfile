# Use the official Node.js 20 image as the base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build

# Expose the port the app will run on
EXPOSE 3000

# Start the application in development mode
CMD ["pnpm", "dev"]
