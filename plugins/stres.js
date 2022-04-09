let handler = async (m, { text }) => {
  let fs = require('fs')

let user = global.db.data.users[m.sender]
let isi = `Perkenalkan watashi *${conn.getName(m.sender)}* , watashi mencintai *${text}* dengan tulus dan penuh kasih sayang, watashi tidak tahan dengan hinaan kalian yg kalian berikan terhadap *${text}* . *${text}* selalu menangis dikamarnya setiap malam karena hinaan kalian. "shine, shine, shine" hanya kata itulah yang ada dipikiran watashi tpi watashi hanya manusia lemah yang tak berdaya jika dikroyok banyak orang. Suatu saat kemudian ada orang biadab memfitnah *${text}* dengan membuat video skandal lalu menyebarkannya di website pornografi. Amarah dan aura merah menyelimuti watashi tanpa disadari darah menetes dari mata watashi secepat kilat watashi menengok cermin lalu watashi melihat rambut watashi belahan menjadi putih lalu ada kagune di punggung watashi lalu sosok kaneki muncul dari dalam cermin tanpa berkata apapun dia memberikan maskernya dan langsung pergi melompati jendela. Watashi langung mencuci masker itu karena bau tengik mulut kaneki membekas di masker itu. Perut Watashi tiba tiba merasa lapar, watashi mencoba indomie buatan *${text}* lalu watashi muntah muntah 馃槚, lalu terlintas dipikiran watashi jadi berita itu benar ! ghoul memang harus memakan manusia karena watashi masih mempunya jiwa manusia akhirnya watashi memakan tangan sendiri. Meskipun tidak menghilangkan rasa lapar setidaknya ini cukup untuk berdiri lalu memangsa siapapun yang menghina istri watashi. no mercy no cry u must die, watashi tak segan segan membunuh kalian jika kalian menghina *${text}* .`

 conn.reply(m.chat, isi, m)
}

handler.help = ['stres <nama orgnya>']
handler.tags = ['stres']
handler.command = /^stres$/i
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