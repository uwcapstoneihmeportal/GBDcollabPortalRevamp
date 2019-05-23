#!/usr/bin/env bash

docker pull dlangner2019/infonexus
docker stop messages
docker rm messages
docker system prune -f
docker run -d -p 80:80 -p 443:443 --restart unless-stopped --name messages -v /etc/letsencrypt:/etc/letsencrypt:ro dlangner2019/infonexus