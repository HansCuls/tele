const fs = require('fs');
const os = require('os');
const moment = require('moment');

module.exports = (bot) => {
    bot.onText(/\/status/, (msg) => {
        const chatId = msg.chat.id;
        const adminId = 123456789; // Ganti dengan ID developer

        if (msg.from.id !== adminId) return bot.sendMessage(chatId, "❌ Anda tidak memiliki izin.");

        let uptime = moment.duration(process.uptime(), 'seconds').humanize();
        let premiumUsers = JSON.parse(fs.readFileSync('./config/premium.json', 'utf8'));
        let totalPremium = Object.keys(premiumUsers).length;
        
        bot.sendMessage(chatId, `
📊 *Status Bot*
- Uptime: ${uptime}
- Total Premium: ${totalPremium}
- RAM: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB Free
- CPU: ${os.cpus().length} Cores
`, { parse_mode: "Markdown" });
    });
};
