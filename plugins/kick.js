let handler = async (m, { conn, args }) => {
  let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
  await conn.groupRemove(m.chat, [who])
}
handler.help = ['kick', '-'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

