FROM mhart/alpine-node:16

WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
# RUN npm install
# RUN npm ci --only=production
RUN yarn --production --silent 

COPY . .

CMD [ "yarn", "start" ]