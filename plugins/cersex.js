let axios = require("axios");
let handler = async(m, { conn, text }) => {

    //if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#lirik my love*', m)

  await m.reply('Sedang di proses kak:b')
	axios.get(`http://docs-jojo.herokuapp.com/api/cersex`).then ((res) => {
	 	let hasil = `~> *Judul* : ${res.data.result.judul}\n\n${res.data.result.cersex}`

    conn.sendFile(m.chat, res.data.result.img, 'carsex.jpeg', hasil, m)
	})
}
handler.help = ['cersex']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^cersex$/i


module.exports = handler



