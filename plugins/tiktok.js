const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Mana link tiktoknya?'
  else m.reply('Proses')
  let res = await fetch('https://hadi-api.herokuapp.com/api/tiktok/?url=' + args[0])
  let json = await res.json()
  let vid = json.result.video.nowm
  if (!json.result.video.nowm) throw `Link download tidak ditemukan ಥ_ಥ`
  let me = conn.user.name
  conn.sendFile(m.chat, vid, 'tiktok.mp4', `${me} Tiktok Downloader`, m)
}
handler.help = ['tiktok', 'tik', 'tt']
handler.tags = ['downloader']
handler.command = /^(tt|tik|tiktok)$/i
module.exports = handler
