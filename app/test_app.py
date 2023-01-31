from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.secret_key = 'Hello socket'
socket_io = SocketIO(app, cors_allowed_origins="*")

app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)

cors = CORS(app)


@app.route('/start_match', methods=['GET', 'POST'])
@cross_origin(allow_headers=['*'])
def start_match():
    return { "connected" }, 200

@socket_io.on('connect')
def test_connect():
    print("1 machine connected")
    emit('after connect',  {'data': 'Woke up'})


@socket_io.on('after connect')
@cross_origin(allow_headers=['*'])
def after_connect():
    print("After machine- connected")

if __name__ == "__main__":
    # socketio.run(app, port=4445, host = socket.gethostbyname(socket.gethostname()),debug='true')
    socket_io.run(app, port=4445, host="127.0.0.1", debug='true')
    # app.run(host='0.0.0.0', port=4445, debug='true')