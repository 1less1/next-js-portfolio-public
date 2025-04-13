FROM node:20.18-alpine AS base

WORKDIR /usr/src/app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the application code to the working directory
FROM base AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

# Production image
FROM base AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./

# Create a non-root user for security
RUN addgroup --system nodejs && adduser --system --ingroup nodejs node_user

ENV NODE_ENV=production
ENV TELEMETRY_DISABLED=1
ENV LOG_LEVEL=info

# Change file ownership to the non-root user for better security
RUN chown -R node_user:nodejs /usr/src/app

USER node_user

EXPOSE 3001
ENV PORT=3001

# Start the app with the main.js file
CMD ["node", "main.js"]
