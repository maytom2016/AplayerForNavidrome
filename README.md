# AplayerForNavidrome
**中文** | [English](https://github.com/maytom2016/AplayerForNavidrome/blob/main/EN_README.md)

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square&label=LICENSE)](https://github.com/maytom2016/AplayerForNavidrome/blob/master/LICENSE)
![GitHub Stars](https://img.shields.io/github/stars/maytom2016/AplayerForNavidrome?style=flat-square&label=Stars&logo=github)
![GitHub Forks](https://img.shields.io/github/forks/maytom2016/AplayerForNavidrome.svg?style=flat-square&label=Forks&logo=github)

## 提醒
AplayerForNavidrome.js要引用在aplayer前，否则可能出现无法控制歌词显示隐藏。

## 使用方法 


### 一、引入 AplayerForNavidrome.js
```
<script src="http://fastly.jsdelivr.net/gh/maytom2016/AplayerForNavidrome@v1.0/min/aplayerfornavidrome.min.js" defer></script>
```

### 二、引用Aplayer
```
<link rel="stylesheet" href="https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.css">
<script src="https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.js"></script>
```
### 三、配置服务器参数
```
<afn-js
   baseurl=http://YourNavidrome_Server
   lrcapi=http://YourLrcapi_Server
   username=Your_NavidromeUsername
   password=Your_NavidromePassword
   >
</afn-js>
```
### 四、配置Aplayer样式（可选）
```
<link rel="stylesheet" href="http://fastly.jsdelivr.net/gh/maytom2016/AplayerForNavidrome@v1.0/min/aplayerstyle.min.css">
```
## 感谢以下项目和作者

https://github.com/metowolf/MetingJS

https://github.com/DIYgod/APlayer

https://github.com/navidrome/navidrome

https://github.com/HisAtri/LrcApi
