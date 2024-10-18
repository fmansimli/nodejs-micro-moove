FROM node:20-alpine as builder
WORKDIR /temp-apps/app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

# prod stage

FROM node:20-alpine
WORKDIR /myapps/app

COPY package*.json ./
COPY --from=builder /temp-apps/app/dist/ ./dist

RUN npm install --omit=dev
RUN npm install -g pm2


EXPOSE 3002

CMD ["npm","run","start:pm2"]