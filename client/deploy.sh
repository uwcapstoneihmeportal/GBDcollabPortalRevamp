#!/usr/bin/env bash

echo "Running Build Script"
./build.sh
echo "Deploying the Docker Image"

echo "Pushing Docker Image"
docker push dlangner2019/infonexus

echo "Running Provision Script on ec2 Instance"
ssh ec2-user@ec2-3-14-243-3.us-east-2.compute.amazonaws.com 'bash -s' < provision.sh
