1. create(update) docker image: sudo docker build -t flaskapp:latest .
2. find tag and image id of created(updated) image: sudo docker images
3. login to the dockerhub account (sudo docker login --username=nartayzhanybekov)
4. sudo docker tag <image id> nartayzhanybekov/tchaikovsky:flaskapp
5. sudo docker push nartayzhanybekov/tchaikovsky:flaskapp
