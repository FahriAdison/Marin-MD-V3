let fetch = require('node-fetch')
let handler = async (m, { args }) => {
  let res = await fetch(global.API('xteam', '/spammer/olx', {no: args[0]}, 'APIKEY'))
  let json = await res.json()
  if (json.result) m.reply(` ${json.result}`)
    else throw `Error!\n\n${json}`
}
handler.help = ['olx'].map(v => v + ' <nomer>')
handler.tags = ['fun']
handler.command = /^(olx)$/i

handler.limit = 7

module.exports = handler
