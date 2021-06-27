FROM node:10-alpine as build-step

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH 

# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent  
RUN npm install react-scripts@3.4.1 -g

COPY . ./ 

# will start app  
CMD ["npm", "start"]  

