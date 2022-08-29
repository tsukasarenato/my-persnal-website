FROM node:16.17-alpine3.16

WORKDIR /website

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
FROM node:16.17-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
