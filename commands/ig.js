const axios = require('axios');
const fs = require('fs');

module.exports = (bot) => {
    const premiumUsers = JSON.parse(fs.readFileSync('./config/premium.json', 'utf8'));

    bot.onText(/\/instagram (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id;

        if (!premiumUsers[userId]) {
            return bot.sendMessage(chatId, "❌ Fitur ini hanya untuk pengguna *Premium*. Gunakan /buyprem untuk membeli.", { parse_mode: "Markdown" });
        }

        const url = match[1];
        const apiUrl = `https://api.example.com/instagram?url=${encodeURIComponent(url)}`;

        try {
            let res = await axios.get(apiUrl);
            bot.sendVideo(chatId, res.data.videoUrl, { caption: "📸 *Video Instagram berhasil diunduh!*", parse_mode: "Markdown" });
        } catch (err) {
            bot.sendMessage(chatId, "⚠️ Gagal mengunduh video Instagram.");
        }
    });
};
