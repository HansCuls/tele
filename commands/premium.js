const fs = require('fs');
const moment = require('moment');

module.exports = (bot) => {
    bot.onText(/\/addprem (\d+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const senderId = msg.from.id;
        const targetUser = match[1];

        if (senderId !== 123456789) { // Ganti dengan ID developer
            return bot.sendMessage(chatId, "❌ *Hanya admin yang bisa menambah premium!*", { parse_mode: "Markdown" });
        }

        let premiumUsers = JSON.parse(fs.readFileSync('./config/premium.json', 'utf8'));
        let expiryDate = moment().add(30, 'days').format('YYYY-MM-DD');

        premiumUsers[targetUser] = expiryDate;
        fs.writeFileSync('./config/premium.json', JSON.stringify(premiumUsers));

        bot.sendMessage(chatId, `✅ User ${targetUser} sekarang premium sampai ${expiryDate}`);
    });

    // Auto remove expired premium users
    setInterval(() => {
        let premiumUsers = JSON.parse(fs.readFileSync('./config/premium.json', 'utf8'));
        let now = moment().format('YYYY-MM-DD');

        Object.keys(premiumUsers).forEach(userId => {
            if (premiumUsers[userId] < now) {
                delete premiumUsers[userId];
            }
        });

        fs.writeFileSync('./config/premium.json', JSON.stringify(premiumUsers));
    }, 86400000); // Cek setiap hari
};
