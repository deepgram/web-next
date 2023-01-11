rtmpdump -r "rtmp://0.0.0.0:1935/live/"$1 --live -o - | python3 stream.py
