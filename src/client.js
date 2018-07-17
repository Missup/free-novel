/* jshint esversion: 6 */
import SockJS from 'sockjs-client'
let socket
let url = '192.168.10.222:8081/dmp-admin'
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
