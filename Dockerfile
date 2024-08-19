FROM node:20-alpine AS deps

COPY package*.json ./

RUN npm ci

FROM node:20-alpine AS builder

WORKDIR /app

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED=1

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ARG NODE_ENV=development

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=${NODE_ENV}

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD HOSTNAME="0.0.0.0" node server.js
