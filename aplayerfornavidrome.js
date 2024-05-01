class PlayerElement extends HTMLElement {
  constructor() {
    super();
    this.id = "player";
  }
  connectedCallback() {

    if (window.APlayer && window.fetch) {
      this.parsec()
    }
  }

  disconnectedCallback() {
    if (!this.lock) {
      this.aplayer.destroy()
    }
  }
  camelize(str) {
    return str
      .replace(/^[_.\- ]+/, '')
      .toLowerCase()
      .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase())
  }

  parsec()
  {
    let server = {}
    for (let i = 0; i < this.attributes.length; i += 1) {
      server[this.camelize(this.attributes[i].name)] = this.attributes[i].value
    }
    let keys = [
      'baseurl','lrcapi','username','password'
    ]
    this.meta = {}
    for (let key of keys) {
      this.meta[key] = server[key]
    }

     this.aplayerinit(this.meta)
  }

  aplayerinit(server)
{
  console.log('\n' + ' %c APlayerForNavidrome v' + '1.0' + ' %c https://github.com/maytom2016/aplayerfornavidrome.js' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
  this.authenticate(server)
      .then(
          auth =>( this.keepalive(server.baseurl, auth.token,auth.id),
          this.getSongs(server.baseurl,auth.token,auth.id))
      .then(allSongs => {
      var json1=this.makesongjson(allSongs,server,auth.subsonicSalt,auth.subsonicToken);
      let div = document.createElement('div')
      this.appendChild(div)

      var player = new APlayer({
      element:div,
      fixed: true,
      order: 'list',
      loop: 'all',
      lrcType: 3,
      audio: json1

    });

    this.aplayer=player;
  }))
  .catch(error => {
      // 处理错误情况
      console.error(error);
  });
}
async  authenticate(server) {
  // 为Navidrome认证API接口
  const authUrl = server.baseurl+"/auth/login";
  const credentials = { username:server.username, password:server.password };

  try {
    const response = await fetch(authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'user-agent': 'Dart/3.3 (dart:io)',    
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const data = await response.json();

    // 来获取token\id
    const token = data.token;
    const id = data.id;
    const subsonicSalt=data.subsonicSalt;
    const subsonicToken=data.subsonicToken;
    // console.log(id);
    return {token,id,subsonicSalt,subsonicToken};
  } catch (error) {
    console.error('Authentication failed:', error);
    throw error;
  }
}
async  keepalive(baseurl, token,clientId) {
const liveurl=baseurl+"/api/keepalive/keepalive";
const headers = new Headers({
    'user-agent': 'Dart/3.3 (dart:io)',
    'x-nd-authorization': 'Bearer ' +token,
    'accept-encoding': 'gzip',
    'x-nd-client-unique-id': +clientId
});
fetch(liveurl, { method: 'GET', headers: headers })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response;
    })
.then(response => response.text()) // assuming the response is text
.then(text => {
    //success
    })
.catch(error => {
    console.error('Keepalive failed:', error);
});
}

async  getSongs(baseurl, token,clientId) {
const songsUrl = baseurl+"/api/song?_end=500&_order=ASC&_sort=title&_start=0";
// 准备请求的Headers
var headers = new Headers({
'X-ND-Authorization': 'Bearer ' + token,
'Accept-Encoding': 'gzip',
'X-ND-Client-Unique-Id': clientId
});
try {
  const response = await fetch(songsUrl, {
  method: 'GET',
  headers: headers
});
if (!response.ok) {
  throw new Error('Network response was not ok: ' + response.statusText);
}

const data = await response.json();

const allSongs = data; 
return allSongs;
} catch (error) {
console.error('Failed to get songs:', error);
}
}

 makesongjson(allSongs,server,subsonicSalt,subsonicToken) {
var allmusic = [];
var json={};
for (var i = 0; i < allSongs.length; i++) {
    var song = allSongs[i];
    json={title:song.title,
          author:song.artist,
          url:server.baseurl+"/rest/stream?u="+server.username+"&t="+subsonicToken+"&s="+subsonicSalt+"&f=json&v=1.15.0&c=Stream+Music&id="+song.id+"&format=raw&maxBitRate=0",
          pic:server.baseurl+"/rest/getCoverArt?u="+server.username+"&t="+subsonicToken+"&s="+subsonicSalt+"&f=json&v=1.15.0&c=Stream+Music&id="+song.albumId+"&size=600",
          lrc:server.lrcapi+"/api/v1/lyrics/single?title="+song.title+'&artist='+song.artist
    }
    allmusic.push(json)
}
return allmusic;
}
}

if (window.customElements && !window.customElements.get('afn-js')) {
  window.PlayerElement = PlayerElement
  window.customElements.define('afn-js', PlayerElement)
}



    
    