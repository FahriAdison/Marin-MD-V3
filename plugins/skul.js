const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `http://docs-jojo.herokuapp.com/api/skull-makeup?image_url=${url}`
    conn.sendFile(m.chat, wanted, '', 'Wajahnya ganti g sih ?', m)
 } catch (e) {
   m.reply('Mungkin wajah tidak terdeteksi')
  }
}
handler.help = ['skullmakeup']
handler.tags = ['filterwjh', 'maker']
handler.command = /^skullmakeup$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
