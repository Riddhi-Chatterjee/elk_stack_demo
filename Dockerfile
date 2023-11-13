FROM --platform=linux/arm64/v8 node:alpine

WORKDIR '/calculator'
ADD . /calculator

COPY package*.json ./
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
