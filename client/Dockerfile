FROM node

RUN npm install -g http-server
RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

COPY package*.json ./
RUN npm install
COPY . /usr/src/app/client
RUN npm run build

EXPOSE 8040
CMD [ "http-server", "dist"]