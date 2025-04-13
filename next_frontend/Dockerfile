FROM node:20.18-alpine AS base

WORKDIR /usr/src/app

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /usr/src/app

RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 --ingroup nextjs next_user
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Ensure the .next/cache directory exists and is writable
RUN mkdir -p /usr/src/app/.next/cache && chmod -R 777 /usr/src/app/.next/cache

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV LOG_LEVEL=info

USER next_user

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "start"]
