FROM node:12

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 4003:4003

CMD ["npm", "start"]

