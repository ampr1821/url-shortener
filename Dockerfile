FROM node:lts

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install
RUN openssl req -nodes -new -x509 -keyout server.key -out server.crt -config cert.cnf

EXPOSE 443

ENTRYPOINT [ "node", "server.js" ]