# Hello World express docker image

### Overview

This image can be use to run a local api that returns a `hello world` message

### Installation

Install Docker
Node JS is not required on your development machine, that is part of this image.

### Running Hello World API locally

Clone repository to a local directory

```
git clone https://github.com/ahmadkhudeish/docker-helloworld-express.git
```

Run

```
npm install
```

```
npm start
```

### Testing the API

Run an instance of the API in one terminal tab
Then open another terminal tab and run the following command

```
npm test
```

### Running the API from a Docker Hub image

Make sure Docker is installed properly.
Pull the latest helloworld-express image by running this command

```
docker pull ahmadkhudeish/helloworld-express
```

Run the following command to start the API

```
docker run -ti -p 3000:3000 ahmadkhudeish/helloworld-express
```

This is the docker hub link
https://hub.docker.com/r/ahmadkhudeish/helloworld-express

### Contents of the Docker file

```
FROM node:10
# Create app directory
WORKDIR /publish
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
```

### Build the image locally

Create and run a container from the image. This will build a container with the tag " helloworld-express" and the dot indicates the Dockerfile location.

```
docker build -t helloworld-express .
```

### View Images

```
docker images
```

### Run your image inside a container

```
docker run -ti -p 3000:3000 helloworld-express
```

### Clean up

Kill the running process

```
docker kill helloworld-express
```

List container instances to be removed

```
docker ps -a
```

Remove container instances
docker rm <container id>

```
docker rm ea0ea
```

Remove images

```
docker rmi helloworld-express
```
