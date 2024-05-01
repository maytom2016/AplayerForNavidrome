# AplayerForNavidrome
**English** | [中文](https://github.com/maytom2016/AplayerForNavidrome/blob/main/README.md)
[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square&label=LICENSE)](https://github.com/maytom2016/AplayerForNavidrome/blob/master/LICENSE)
![GitHub Stars](https://img.shields.io/github/stars/maytom2016/AplayerForNavidrome?style=flat-square&label=Stars&logo=github)
![GitHub Forks](https://img.shields.io/github/forks/maytom2016/AplayerForNavidrome.svg?style=flat-square&label=Forks&logo=github)

## Reminder
AplayerForNavidrome.js should be referenced before aplayer, otherwise there may be no control over the lyrics displayed hidden.
## How to use 

### 1、Import AplayerForNavidrome.js
```
<script src="http://fastly.jsdelivr.net/gh/maytom2016/AplayerForNavidrome@v1.0/min/aplayerfornavidrome.min.js" defer></script>
```

### 2、Import Aplayer
```
<link rel="stylesheet" href="https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.css">
<script src="https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.js"></script>
```
### 3、Config Navidrome_Server
```
<afn-js
   baseurl=http://YourNavidrome_Server
   lrcapi=http://YourLrcapi_Server
   username=Your_NavidromeUsername
   password=Your_NavidromePassword
   >
</afn-js>
```
### 4、Config Aplayer Style（Optional）
```
<link rel="stylesheet" href="http://fastly.jsdelivr.net/gh/maytom2016/AplayerForNavidrome@v1.0/min/aplayerstyle.min.css">
```
## Thanks to the following projects and authors

https://github.com/metowolf/MetingJS

https://github.com/DIYgod/APlayer

https://github.com/navidrome/navidrome

https://github.com/HisAtri/LrcApi
