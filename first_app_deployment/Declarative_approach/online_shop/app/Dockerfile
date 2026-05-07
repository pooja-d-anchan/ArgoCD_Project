FROM node:20-alpine

WORKDIR /app

# Copy package files first (layer caching)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY src ./src

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
