FROM node:8.4.0-alpine

EXPOSE 3000

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app
RUN npm install

USER node

CMD ["npm","start"]