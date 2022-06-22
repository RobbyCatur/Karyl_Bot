let handler = async (m, { conn }) => {
  let teks = `
*RULES BOT YANG WAJIB DITAATI!*
1. Dilarang mengirim foto, video, file, atau dokumen apapun yang bersifat pribadi
2. Bot tidak menyimpan apapun yang anda kirim (kecuali anda sendiri yang menyimpan di bot)
3. Bot hanya mencatat nama, umur, dan nomor anda di database
4. *NO SPAM!* Spam di gc auto banned. Spam di PC (private chat) akan diblokir!
5. Fitur Bot masih dalam proses pengembangan. Harap maklum karena owner sedang mengkode ulang
6. Segera lapor jika menemukan fitur error/bug/tidak berfungsi
7. Donasi seikhlasnya :v
Sekian dari saya selaku Owner Bot. Terimakasih atas perhatiannya
`.trim()
conn.sendButton(m.chat, teks, '©' + author, 'CREATOR', '.creator', m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i
module.exports = handler