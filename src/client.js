// import io from 'socket.io-client'
// import settings from './settings.js'
// const CHAT = {
//   allData: null,
//   isConnect: false,
//   // 断开连接
//   disconnect: function () {
//     this.socket.disconnect()
//     CHAT.isConnect = false
//   },
//   init: function () {
//     // 连接websocket后端服务器
//     this.socket = io.connect(settings.socket)
//     console.log('this.socket', this.socket)
//     this.socket.on('open', function (val) {
//       console.log('已连接', val)
//       CHAT.allData = val
//       CHAT.isConnect = true
//     })
//     // this.socket.emit('open', '11111')
//   }
// }
// export default CHAT

import SockJS from 'sockjs-client'
let socket
let url = '192.168.10.222:8080/dmp-admin'
// let url = '127.0.0.1:8181'
const CHAT = {
  connect: function () {
    try {
      console.log('支持')
      socket = new WebSocket('ws://' + url + '/ws')
      // socket = new WebSocket('ws://' + url)
    } catch (e) {
      console.log('不支持')
      socket = new SockJS('http://' + url + '/sockjs/ws')
      // socket = new SockJS('http://' + url)
      return
    }
    socket.onopen = CHAT.sOpen
    socket.onerror = CHAT.sError
    socket.onmessage = CHAT.sMessage
    socket.onclose = CHAT.sClose
  },
  sOpen: function () {
    console.log('connect success!')
  },
  sError: function (e) {
    console.log('error' + e)
  },
  sMessage: function (msg) {
    console.log('server says:' + msg)
  },
  sClose: function (e) {
    console.log('connect closed:' + e.code)
  },
  send: function () {
    socket.send(document.getElementById('msg').value)
  },
  close: function () {
    socket.close()
  }
}
export default CHAT
