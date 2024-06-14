FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN pwd && npm install
COPY . ./
ENTRYPOINT [ "npm", "start" ]