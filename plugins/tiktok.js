let fetch = require('node-fetch')
let handler = async (m, {command, conn, text, args}) => {
  if (!text) throw `Harap masukkan link tiktok`
  else m.reply('Proses')
  let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
  let json = await res.json()
  let me = conn.user.name
  conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${me} Tiktok Downloader`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['general']
handler.command = /^(tiktok)$/i
module.exports = handler
