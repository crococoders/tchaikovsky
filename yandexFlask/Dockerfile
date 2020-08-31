FROM python:3.7
# Create app directory
WORKDIR /app
COPY . /app
ENV FLASK_APP 'yandex.py'
ENV FLASK_ENV "development"
ENV FLASK_DEBUG True
# Install app dependencies
RUN pip3 --no-cache-dir install -r requirements.txt
# Bundle app source
EXPOSE 5000
CMD flask run --host=0.0.0.0
