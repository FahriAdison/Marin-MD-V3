const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Papah-Chan;;;'
                    + 'FN: Papah-Chan\n' // full name
                    + 'ORG:Papah;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=17608914335:+1 760-891-4335\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Papah', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler