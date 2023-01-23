FROM node:current-alpine3.10

WORKDIR /app
COPY webbylabMovies/ .
RUN npm install
RUN ls

EXPOSE 3000
CMD [ "npm", "run", "start" ]