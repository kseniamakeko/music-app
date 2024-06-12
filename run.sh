#!/bin/bash

nohup node index.js &

cd app
nohup npm start &