FROM node:19.4.0-alpine3.17
RUN  mkdir -p /usr/node_app/app  \
    && mkdir -p /usr/node_app/node_modules/.cache/vue-loader \
    && mkdir -p /usr/node_app/node_modules/.cache/babel-loader
WORKDIR /usr/node_app
COPY package*.json  ./
RUN chown node:node -R /usr/node_app/node_modules
RUN npm install --omit=optional && npm cache clean --force
ENV PATH /usr/node_app/node_modules/.bin:$PATH
WORKDIR /usr/node_app/app
COPY ./ .
USER node
ENTRYPOINT ["/usr/node_app/app/entrypoint.dev.sh"]
