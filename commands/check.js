module.exports = (bot) => {
    bot.onText(/\/check/, (msg) => {
        bot.sendMessage(msg.chat.id, `🆔 ID Anda: ${msg.from.id}\n👥 Grup: ${msg.chat.title || "Bukan dalam grup"}`);
    });
};

const fs = require('fs');

module.exports = (bot) => {
    const premiumFile = './config/premium.json';
    let premiumUsers = JSON.parse(fs.readFileSync(premiumFile, 'utf8'));

    bot.onText(/\/checkprem/, (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;

        if (premiumUsers[userId]) {
            let expiry = new Date(premiumUsers[userId].expires);
            bot.sendMessage(chatId, `✅ *Anda adalah user premium.*\n📅 *Masa aktif:* ${expiry.toLocaleDateString()}`, { parse_mode: "Markdown" });
        } else {
            bot.sendMessage(chatId, "❌ Anda *bukan* user premium. Gunakan /buyprem untuk membeli.", { parse_mode: "Markdown" });
        }
    });
};

