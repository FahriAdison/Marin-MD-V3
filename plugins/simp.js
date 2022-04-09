let handler = async(m, { conn, text }) => {
if (!text) throw `Masukkan query!`
              awikwok = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${text}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${text}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${text} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${text}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
              conn.reply(m.chat, awikwok, m)
}
handler.help = ['simp <pasangan>']
handler.tags = ['stres']
handler.command = /^simp/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
