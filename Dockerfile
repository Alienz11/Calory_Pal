# Use Node.js 16.14.3 as base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files for frontend
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy package.json and package-lock.json files for backend
COPY package*.json ./
RUN npm install

# Copy all frontend and backend files to the container
COPY frontend/ ./frontend/
COPY backend/ ./backend/

#Arguments
ARG MONGO_URI
ARG SECRET

# Set environment variables
ENV PORT=4000
ENV MONGO_URI=$MONGO_URI
ENV SECRET=$SECRET
ENV NODE_ENV=production

# Expose ports for frontend and backend
EXPOSE 4000
EXPOSE 5000

CMD cd frontend && npm start & cd backend && npm start