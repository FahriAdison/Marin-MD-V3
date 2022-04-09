let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=MIMINGANZ')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.result.female, 'cwe.jpg', 'Cewe', m)
conn.sendFile(m.chat, json.result.male, 'pria.jpg',  'Cowo', m)

}
handler.help = ['ppcp', 'ppcouple']
handler.tags = ['internet']
handler.command = /^ppcp|ppcouple|couple$/i


module.exports = handler
