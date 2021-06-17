FROM node:alpine

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

RUN npm run build

# Add your OpenWeatherMaps API key
ENV api_key=

CMD npm start
