#!/usr/bin/env bash
export TLSCERT=/etc/letsencrypt/live/api.kwontae.me/fullchain.pem
export TLSKEY=/etc/letsencrypt/live/api.kwontae.me/privkey.pem


docker system prune -f

docker network create kwontaeNet

docker pull taehyun123/myuserstore
docker run -d --network kwontaeNet --name myuserstore --restart unless-stopped \
 -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
 -e MYSQL_DATABASE=$MYSQL_DATABASE \
 taehyun123/myuserstore --wait_timeout=31536000

export REDISADDR=devredis:6379
export SESSIONKEY=$(openssl rand -base64 18)
export JAVA_MYSQL_ADDR=myuserstore:3306
export JAVA_MYSQL_DB=myuserstore
export JAVA_MYSQL_PASS=$MYSQL_ROOT_PASSWORD
export JAVA_MYSQL_USER=root

docker run --name devredis -d --restart unless-stopped \
--network kwontaeNet \
redis

docker run -d --name myrabbitmq --restart unless-stopped \
--network kwontaeNet \
rabbitmq:3-alpine

docker pull taehyun123/messaging
docker run -d --name messageservice --restart unless-stopped \
-e JAVA_MYSQL_ADDR=$JAVA_MYSQL_ADDR \
-e JAVA_MYSQL_DB=$JAVA_MYSQL_DB \
-e JAVA_MYSQL_PASS=$JAVA_MYSQL_PASS \
-e JAVA_MYSQL_USER=$JAVA_MYSQL_USER \
-e MQHOST=myrabbitmq \
-e MQPORT=5672 \
--network kwontaeNet \
taehyun123/messaging

export CONSUMER_ID=3MVG98im9TK34CUVA0sKni7GETEp76OGIhQm.P0c5NvWiUOeIsdLgZzu_wLBw57Wv4HyXjC7CrTfVkcAYku0E
export API_VERSION=v45.0
export CONSUMER_SECRET=E1C0E55FD694F1F8E59602397F16A923A95201980C751B4571D78FB7B650737E
export SECURITY_TOKEN=n0GHEJJc3Z2Iua2OWy3f35c2C
export FORCE_USERNAME=azuqua@healthdata.org.ischool2
export FORCE_PASSWORD=ischool2019
export FORCE_API_ENV=sandbox

docker pull taehyun123/gateway
docker run -d -p 443:443 --restart unless-stopped --name gateway \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
-e TLSCERT=/etc/letsencrypt/live/api.infonexus.me/fullchain.pem \
-e TLSKEY=/etc/letsencrypt/live/api.infonexus.me/privkey.pem \
-e CONSUMER_ID=$CONSUMER_ID \
-e API_VERSION=$API_VERSION \
-e CONSUMER_SECRET=$CONSUMER_SECRET \
-e SECURITY_TOKEN=$SECURITY_TOKEN \
-e FORCE_USERNAME=$FORCE_USERNAME \
-e FORCE_PASSWORD=$FORCE_PASSWORD \
-e FORCE_API_ENV=$FORCE_API_ENV \
taehyun123/gateway

