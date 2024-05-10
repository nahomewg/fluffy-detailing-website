# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:20-slim
 
WORKDIR /usr/app
 
# Install dependencies and build the project.
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Run the web service on container startup.
CMD ["node", "dist/server.js"]