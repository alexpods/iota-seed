FROM node:9.3.0-alpine

RUN mkdir -p /iota-seed
WORKDIR /iota-seed

COPY . .
RUN npm install --production

CMD ["node", "cli"]
