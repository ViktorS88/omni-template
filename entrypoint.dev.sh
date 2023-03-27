#!/bin/sh
cp /usr/node_app/package.json /usr/node_app/app/package.json
cp /usr/node_app/package-lock.json /usr/node_app/app/package-lock.json
npm run uiserve &
npm run serve
exec "$@"
