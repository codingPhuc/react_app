from node:20 as base
workdir /usr/local/app/backend

from base as backend-base
copy ./package.json ./package.json
run npm install cors --save && npm install
copy ./ ./

cmd ["npm", "start"]
# CMD ["npm", "start"]