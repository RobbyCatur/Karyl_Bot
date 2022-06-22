let handler = async (m, { text, conn, isOwner, isAdmin, args }) => {
	if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
  if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
await conn.groupParticipantsUpdate(m.chat, [usr], "remove"); return;
}
  if (!m.mentionedJid[0]) throw `tag yang mau dikick`;
  let users = m.mentionedJid.filter(
    (u) => !(u == ownerGroup || u.includes(conn.user.jid))
  );
  for (let user of users)
    if (user.endsWith("@s.whatsapp.net"))
      await conn.groupParticipantsUpdate(m.chat, [user], "remove");
};
handler.help = ['kick', '-'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.fail = null
handler.limit = true

module.exports = handler

