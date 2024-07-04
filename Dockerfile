# Stage 1: Build the frontend
FROM node:14 as build-frontend

# Create and set the working directory
WORKDIR /usr/src/app/frontend

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY frontend/ .

# Build the frontend application
RUN npm run build

# Stage 2: Build the backend
FROM node:14

# Create and set the working directory
WORKDIR /usr/src/app/backend

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application code
COPY backend/ .
# Copy the built frontend files from the previous stage
COPY --from=build-frontend /usr/src/app/frontend/build ./public

# Expose the backend port (adjust if necessary)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
