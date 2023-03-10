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

# Set environment variables
ENV PORT=4000
ENV MONGO_URI=mongodb+srv://Alienz11:PDkzEyEdtwdK6PKy@mernapp.w6knu0n.mongodb.net/CaloryPal?retryWrites=true&w=majority
ENV SECRET=alienz11learninghowtoauthenticateinamernstackpersonalprojectcalledcalorypal
ENV NODE_ENV=production

# Expose ports for frontend and backend
EXPOSE 4000
EXPOSE 5000

#docker run -p 4000:4000 -p 5000:5000 \
#  -v /Users/user/Documents/Practice/Concepts/Portfolio_Project/Calory_Pal/backend:/app/backend \
#  -v /Users/user/Documents/Practice/Concepts/Portfolio_Project/Calory_Pal/frontend:/app/frontend \
#  --name calorypal_app \
#  calorypal
# Start frontend and backend apps concurrently
CMD cd frontend && npm start & cd backend && npm start
