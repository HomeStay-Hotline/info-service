FROM node:14
WORKDIR /home/alexyi164/HR/SDC/info-service
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3001
EXPOSE 3001
CMD ["npm", "start"]