# GBDCollab Portal Revamp

This is a repo that will include frontend and backend code for the collaborator portal

# Client Side

**Using HTTPS with nginx + docker**
**Make sure to change the server name in deafult.conf file.**
The NGINX Docker container keeps its default configuration file at `/etc/nginx/conf.d/default.conf`. You can get a copy of this file by executing these commands on your development machine:
```
docker run -d --name tmp-nginx nginx
docker cp tmp-nginx:/etc/nginx/conf.d/default.conf default.conf
docker rm -f tmp-nginx
```
This spins-up a new NGINX container, copies the `/etc/nginx/conf.d/default.conf` inside the container to the current directory on your machine, and stops/removes the container.

Open the `default.conf` file and notice that it contains one `server {}` configuration block for HTTP. You need to modify it so that it looks like this, replacing `your-host-name.com` with your host name:
```
server {
    listen       80;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    server_name your-host-name.com; #REPLACE `your-host-name.com` with your host name!
    return 301 https://$server_name$request_uri;
}

server {
    listen       443 ssl;
    ssl_certificate /etc/letsencrypt/live/your-host-name.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-host-name.com/privkey.pem;

    # ...rest of default configuration...
}
```
This configuration tells NGINX to support HTTP connections on port 80, but automatically redirect those requests to the equivalent HTTPS URL. It also tells NGINX to support HTTPS connections on port 443, and tells NGINX where to find your certificate and private key.

For more details on NGINX configuration files, see their [Beginner's Guide](http://nginx.org/en/docs/beginners_guide.html).

After you modify the `default.conf` add this line to your `Dockerfile` to replace the `default.conf` as you build your web client docker container image:
```
ADD default.conf /etc/nginx/conf.d/default.conf
```
# Server Side

## Backend Server

To continue working on this branch, please go to the branch by using this command: git checkout backend_development.
This whole package is written in GoLang so please set up the Go environment before cloning this repo.
[Example](https://medium.com/@AkyunaAkish/setting-up-a-golang-development-environment-mac-os-x-d58e5a7ea24f)
Make sure to include [this](https://github.com/nimajalali/go-force) package **Critical Third Party Dependency**
### Current status

Currently, there are two endpoints available in auth.go, /v1/authorize and /v1/password_update.
This is an example of a build script used for development.
```
#!/usr/bin/env bash
echo "Building Linux Executable..."
GOOS=linux go build
echo "Building Docker Container Image..."
docker build -t myImage . #REPLACE with your image name.
echo "Cleaning Up..."
go clean
docker image prune -f
```
This is an example of a deploy script.
```
#!/usr/bin/env bash
echo "running build script"
./build.sh
docker push myImage #REPLACE with your image
#REPLACE cloudInstance with your cloud instance address
ssh cloudInstance  'bash -s' < provision.sh 
```

This is an example of a provision script that is being piped into the cloudInstance
For CONSUMER_ID & CONSUMER_SECRET, refer to [here](https://auth0.com/docs/connections/social/salesforce)
This script will export required environment variables and launch the docker container.
```
#!/usr/bin/env bash
export TLSCERT=fullchaim.pem #REPLACE fullchaim.pem with a full path such as /etc/letsencrypt/live/example.com/fullchaim.pem
export TLSKEY=privkey.pem #REPLACE privkey.pem with a full path such as /etc/letsencrypt/live/example.com/privkey.pem
export CONSUMER_ID=consID #REPLACE consID with an actual consumer ID from Salesforce
export API_VERSION=v45.0 #REPLACE with the version of your prod/sandbox environment
export CONSUMER_SECRET=consSecret #REPLACE consSecret with an actual consumer secret from Salesforce
export SECURITY_TOKEN=securityToken #REPLACE securityToken with your account security token
export FORCE_USERNAME=example@example.com #REPLACE with your salesforce account username
export FORCE_PASSWORD=examplePassword #REPLACE with your salesforce account password
export FORCE_API_ENV=env #REPLACE with the api environment you wish to connect to.

docker pull myImage #REPLACE with your proper docker image name
docker stop myContainerName #REPLACE with your docker container name
docker rm myContainerName #REPLACE with your docker container name
docker system prune -f

#REPLACE containerName and myImage with yours.
docker run -d -p 443:443 --restart unless-stopped --name containerName \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
-e TLSCERT=$TLSCERT \
-e TLSKEY=$TLSKEY \
-e CONSUMER_ID=$CONSUMER_ID \
-e API_VERSION=$API_VERSION \
-e CONSUMER_SECRET=$CONSUMER_SECRET \
-e SECURITY_TOKEN=$SECURITY_TOKEN \
-e FORCE_USERNAME=$FORCE_USERNAME \
-e FORCE_PASSWORD=$FORCE_PASSWORD \
-e FORCE_API_ENV=$FORCE_API_ENV \
myImage
```

Currently, cors_test.go and auth_test.go are all commented out due to a complete design pivot.
If you wish to add any other microservices in different tech stack, you can simply add the endpoints in main.go
Look into using mux golang to learn more.
