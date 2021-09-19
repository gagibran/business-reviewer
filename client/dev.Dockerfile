FROM node:16
EXPOSE 1000
WORKDIR /app/
COPY ./package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]