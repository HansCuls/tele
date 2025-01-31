const fs = require('fs');

module.exports = (bot) => {
    bot.onText(/\/broadcast (.+)/, (msg, match) => {
        const adminId = 123456789; // Ganti dengan ID developer
        if (msg.from.id !== adminId) return bot.sendMessage(msg.chat.id, "❌ Anda tidak memiliki izin.");

        let users = JSON.parse(fs.readFileSync('./config/premium.json', 'utf8'));
        let users = JSON.parse(fs.readFileSync('./config/user.json', 'utf8'));

        Object.keys(users).forEach(userId => {
            bot.sendMessage(userId, `📢 ${match[1]}`).catch(() => {});
        });

        bot.sendMessage(msg.chat.id, "✅ Pesan berhasil dikirim ke semua user premium.");
    });
};
