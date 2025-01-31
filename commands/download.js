const fs = require('fs');
const axios = require('axios');

module.exports = (bot) => {
    let premiumUsers = {};

    try {
        premiumUsers = JSON.parse(fs.readFileSync('./config/premium.json', 'utf8'));
    } catch (err) {
        console.error("Gagal membaca premium.json:", err);
    }

    bot.onText(/\/yt (.+)/, async (msg, match) => {
        if (!premiumUsers[msg.from.id]) {
            return bot.sendMessage(msg.chat.id, "❌ Fitur ini hanya untuk pengguna premium.");
        }

        let url = match[1];
        let apiUrl = `https://api.example.com/youtube/download?url=${encodeURIComponent(url)}`;

        try {
            let res = await axios.get(apiUrl);
            bot.sendVideo(msg.chat.id, res.data.videoUrl);
        } catch (err) {
            console.error("Gagal mengunduh video:", err);
            bot.sendMessage(msg.chat.id, "⚠️ Gagal mengunduh video.");
        }
    });
};
