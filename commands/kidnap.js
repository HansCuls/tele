const premiumUsers = JSON.parse(fs.readFileSync('./config/premium.json', 'utf8'));

module.exports = (bot) => {
    bot.onText(/\/kidnap (\-?\d+)/, async (msg, match) => {
        if (!premiumUsers[msg.from.id]) return bot.sendMessage(msg.chat.id, "❌ Fitur ini hanya untuk pengguna premium.");
        
        let groupId = match[1];
        bot.getChatMembersCount(groupId).then((count) => {
            bot.sendMessage(msg.chat.id, `👥 Grup ID: ${groupId}\nJumlah Member: ${count}`);
        }).catch(() => {
            bot.sendMessage(msg.chat.id, "⚠️ Gagal mengambil info grup.");
        });
    });
};
