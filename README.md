# simple-rtmp-server
Using `alfg/docker-nginx-rtmp` to build a RTMP server contains a simple WEB UI and APIs.

* Nginx 1.19.7 (Mainline version compiled from source)
* nginx-rtmp-module 1.2.1 (compiled from source)
* ffmpeg 4.4 (compiled from source)
* Default HLS settings (See: [nginx.conf](/nginx/nginx.conf))
* node.js (mhart/alpine-node:16)
* express 14
* vue 2.6
* vuetify 2.4
* video.js 7.11


## 國立虎尾科技大學-行動寬頻網路課程實驗
此專案為一基於NGINX和ffmpeg的RTMP伺服器，包含簡易的WEB介面、後端，並能同時提供多種解析度的即時串流影像(視裝置效能而定)。
完整專案可使用docker-composer建立，旨在方便同學快速建立環境、分析視訊串流效能。

## Usage

### Server
* Pull docker image and run by `docker-compose`
```
docker-compose pull
docker-conpose up -d
```

* Stream live content to
```
rtmp://$SERVER_IP:1935/stream/$STREAM_KEY
```

### StreamLabs (mobile devices)
* Log in with `Custon RTMP Server`
* URL: `rtmp://$SERVER_IP:1935/stream`
* Stream Key: `test`

### OBS Configuration (PC)
* Stream Type: `Custom Streaming Server`
* URL: `rtmp://$SERVER_IP:1935/stream`
* Stream Key: `test`

### Watch stream
* Streaming list
```
http://$SERVER_IP:8080/
```
![](https://i.imgur.com/q9N3t5x.png)

* Watch stream
```
http://$SERVER_IP:8080/$STREAM_KEY
```
![](https://i.imgur.com/Cv6a7X4.jpg)

* HLS stream: `http://$SERVER_IP:8080/live/$STREAM_KEY.m3u8`
* RTMP stream: `rtmp://$SERVER_IP:1935/stream/$STREAM_KEY`

### Resources
* https://github.com/alfg/docker-nginx-rtmp
* https://github.com/arut/nginx-rtmp-module
* https://videojs.com/


### ~~Get drug more, get high more. Then, heaven will be close :)~~