// CREATED BY JOHANNES (MY GURU)
// gh nya? https://github.com/johannes2803
// CREDITS NYA JGN DI HAPUS YA BANH
// PENAMBAHAN AUDIO BY RI
// follow ya banh https://github.com/FahriAdison
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
wm = global.wm
let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
//*****************FOTO USER*********************
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 try {
 	pp = await conn.profilePictureUrl(m.sender, 'image')
} catch (e) {

  } finally {
}
//*****************BAGIAN MENU*********************
let tags = {
  'main': 'MENU UTAMA',
  'game': 'MENU GAME',
  'rpg': 'MENU RPG',
  'xp': 'MENU EXP',
  'premium': 'MENU PREMIUM',
  'group': 'MENU GROUP',
  'absen': 'MENU ABSEN',
  'vote': 'MENU VOTE',
  'owner': 'MENU OWNER',
  'islam': 'MENU ISLAMI',
  'quran': 'MENU ALQURAN',
  'fun': 'MENU FUN',
  'sticker': 'MENU CONVERT',
  'maker': 'MENU MAKER',
  'github': 'MENU GITHUB',
  'internet': 'INTERNET',
  'kerang': 'MENU KERANG',
  'anime': 'MENU ANIME',
  'animsearch': 'ANIME SEARCH',
  'downloader': 'DOWNLOADER',
  'hentai': 'MENU MININGDOSA',
  'tools': 'MENU TOOLS',
  'advanced': 'ADVANCED',
  'quotes': 'MENU QUOTES',
  'info': 'MENU INFO',
  'nulis': 'MENU NULIS',
  'suara': 'MENU VN',
  'stalk': 'MENU STALK',
  
}
const defaultMenu = {
  before: `
  ───────━┅ *D A S H B O A R D* ┅━───────
  
    「 *U S E R* 」
☂︎ *Name:* %name
☂︎ *Status:* user ${wm}
☂︎ *Limit:* %limit
☂︎ *Role:* %role
☂︎ *Level:* %level 
☂︎ *Xp:* %exp / %maxexp
☂︎ *Total Xp:* %totalexp
☂︎ *Premium:* ${global.prem ? '✅' : '❌'}

  「 *T O D A Y* 」
☂︎ *Days:* %week %weton
☂︎ *Date:* %date
☂︎ *Islamic Date:* %dateIslamic
☂︎ *Time:* %time

  「 *I N F O* 」
☂︎ *Bot Name:* ${wm}
☂︎ *Lib*: Baileys-MD
☂︎ *${Object.keys(global.db.data.users).length}* *Pengguna*
☂︎ *Prefix:* [. / #]
☂︎ *Uptime:* %uptime
☂︎ *Mode:* ${global.opts['self'] ? 'Self' : 'publik'}
☂︎ *Database:* %rtotalreg dari %totalreg
☂︎ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* *Chat Terbanned*
☂︎ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned

⃝▣「 *I N F O  C M D* 」
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣──···
  %readmore`.trimStart(), 
   header: '⃝▣             「 *%category* 」',
   body: '│☂︎ %cmd %isPremium %islimit',
   footer: '▣──···\n',
    after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let bzz = fs.readFileSync('./audio/pale.mp3')
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true)
    let template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
			         templateMessage: {
             hydratedTemplate: {
                 hydratedContentText: text.trim(),
                 hydratedFooterText: 'Made By Johannes\nMy Guru',
                 "headerType": "DOCUMENT", 
                 "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ah9LXq1Z_XnRLzlVnZSt6_yWxC6mp20xTpZRSJxc7TUP.enc",
            "mimetype": "application/pdf",
            "title": "johannes.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "99999999999999",
            "pageCount": 99999999999999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "Marin-MD Bot WhatsApp",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": await (await require('node-fetch')(pp)).buffer(),},
                 hydratedButtons: [{
                     urlButton: {
                         displayText: 'MY WEB',
               url: 'https://youtube.com/channel/UC3zScvuQfMxqiTC5x_JUEng'
             }

           },
             {
             urlButton: {
               displayText: 'MY GROUP',
               url: 'https://chat.whatsapp.com/GngfXIF8XmgHf9Gm7MQFps'
             }

           },
           {
            quickReplyButton: {
              displayText: 'Owner',
              id: '.owner',
            }

          },
              {
            quickReplyButton: {
              displayText: 'SC',
              id: '.sc',
                     }
                 }
                 ]
             }
         }
     }), { userJid: m.sender, quoted: m});
     //conn.reply(m.chat, text.trim(), m)
     return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}