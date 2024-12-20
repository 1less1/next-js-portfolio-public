# Use the official Node.js image as the base image
FROM node:20.18-alpine AS base

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install dependencies only when needed
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the application code to the working directory
FROM base AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

# Build the application (if needed)
RUN npm run build

# Production image, copy all the files and run the application
FROM base AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./

# Set environment variables
ENV NODE_ENV=production

# Expose the port your application will run on
EXPOSE 4000

# Define the command to run your application
CMD ["node", "index.js"]