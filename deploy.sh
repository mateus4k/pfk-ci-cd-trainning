#!/bin/bash

cd pfk
git pull

source ~/.nvm/nvm.sh
pkill node
forever stop src/index.js
npm install
forever start src/index.js
