let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {

let res = await fetch('https://telegra.ph/file/97e5e587a1d27b7b96701.jpg')
		
	conn.sendButtonImg(m.chat, res, '', wm, 'Iyah bg saya khilaf', `tch`, m)

}

handler.help = ['ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['hentai']
handler.command = /^(ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i

module.exports = handler
