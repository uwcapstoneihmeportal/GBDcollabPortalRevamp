#!/usr/bin/env bash
echo "Building npm executable"
npm run-script build

echo "Building Docker Container Image..."
docker build --no-cache -t dlangner2019/infonexus .

echo "Cleaning Up..."
docker image prune -f