import jsonpickle
from flask import Flask, request, jsonify
import json
import os.path
import time
from user import User
from likedTracks import LikedTracks
from yandex_music.client import Client
from cryptography.fernet import Fernet
import logging
logging.basicConfig(level=logging.CRITICAL)
app = Flask(__name__)

token = ''


@app.route('/auth', methods=['POST'])
def auth():
    global token
    if os.path.isfile("./token.json"):
        with open("token.json") as file:
            cred = json.load(file)
        token = decrypted(cred["token"])
        client = Client.from_token(token)
        user = User(client.me.account.full_name, client.me.account.login,
                    client.me.account.passport_phones[0].phone, client.me.account.client.me.subscription.auto_renewable[0].expires, client.me.account.client.me.default_email, client.me.account.birthday)
        return jsonpickle.encode(user.user_data())
    else:
        try:
            client = Client.from_credentials(username=request.get_json()[
                                             'login'], password=request.get_json()['password'])
            token = client.token
        except:
            return "error"
        else:
            encrypted(token)
            user = User(client.me.account.full_name, client.me.account.login,
                        client.me.account.passport_phones[0].phone, client.me.account.client.me.subscription.auto_renewable[0].expires, client.me.account.client.me.default_email, client.me.account.birthday)
            return jsonpickle.encode(user.user_data())


@app.route('/liked_tracks', methods=['GET'])
def get_liked_tracks():
    if len(token) == 0:
        auth()
    client = Client.from_token(token)
    print(client.me['account']['full_name'])
    liked_tracks = client.users_playlists(3,)[0].tracks
    list_tracks = client.tracks([i.track_id for i in liked_tracks])

    response = {'result': []}
    for trackObj in list_tracks:
        tracks = LikedTracks(
            title=trackObj['title'],
            trackId=trackObj['id'],
            artistName=trackObj['artists'][0]['name'],
            artistId=trackObj['artists'][0]['id'],
            cover=trackObj['cover_uri'],
            duration=trackObj['duration_ms']
        )

        response['result'].append(tracks)

    response = jsonpickle.encode(response)
    return response


@ app.route('/play_track', methods=['GET'])
def play_track():
    if len(token) == 0:
        auth()
    client = Client.from_token(token)
    track_id = client.users_likes_tracks().tracks[0].track.id
    links = client.tracks_download_info(
        track_id=track_id, get_direct_links=True)
    return links[0].direct_link


def encrypted(value):
    key = Fernet.generate_key()
    encoded = value.encode()
    f = Fernet(key)
    encrypted_token = f.encrypt(encoded)
    with open("token.json", "w") as file:
        json.dump({"key": key.decode(), "token": encrypted_token.decode()}, file)


def decrypted(value):
    encoded = value.encode()
    with open("token.json") as file:
        cred = json.load(file)
    key = cred["key"].encode()
    f = Fernet(key)
    decrypted_token = f.decrypt(encoded)
    return decrypted_token.decode()
