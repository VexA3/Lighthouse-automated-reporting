FROM node:latest

WORKDIR /var/www/src
COPY ./src /var/ww/src

RUN apt-get update -y
# RUN apt-get install -y libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libglib2.0-0 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libxcb1 libxext6 libxrender1 ca-certificates libnss3 wget
# RUN apt-get install -y chromium
RUN npm install;