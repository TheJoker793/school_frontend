FROM node:18 As build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:latest
COPY --from=build /app/dist/frontend-school/browser/* /usr/share/nginx/html/ 