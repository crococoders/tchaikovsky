FROM python:3.7
# Create app directory
WORKDIR /app
COPY ./http_server.py /app
# Install app dependencies
RUN pip install yandex-music --upgrade
RUN pip install jsonpickle
# Bundle app source
EXPOSE 8000
CMD [ "python3", "http_server.py" ]