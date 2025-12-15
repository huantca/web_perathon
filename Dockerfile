# --- Stage 1: Build the React App ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy source and build
COPY . .
RUN npm run build
# NOTE: If using Vite, the output folder is 'dist'. If Create-React-App, it is 'build'.

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Copy the build output from Stage 1 to Nginx's html folder
# CHANGE '/app/build' to '/app/dist' if you use Vite!
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom Nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]