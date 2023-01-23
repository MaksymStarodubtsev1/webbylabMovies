FROM node:lts-alpine

WORKDIR /app
EXPO NODE_ENV=development

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

CMD ["npm", "start"]