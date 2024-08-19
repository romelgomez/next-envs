FROM node:20-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD HOSTNAME="0.0.0.0" node server.js

# Error: Cannot find module 'next/dist/compiled/find-up'

# docker build --progress=plain --no-cache -t maryline/nextjs-example:0.0.1 -f Dockerfile .

# docker run -p 3000:3000 maryline/nextjs-example:0.0.1
