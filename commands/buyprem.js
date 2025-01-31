module.exports = (bot) => {
    bot.onText(/\/buyprem/, (msg) => {
        bot.sendMessage(msg.chat.id, `
💎 *Beli Premium* 💎
🔹 *Keuntungan Premium:*
   ✅ Download video YouTube, TikTok, Instagram
   ✅ Akses fitur culik member
   ✅ Bebas akses semua fitur bot

💰 *Harga Premium:* Rp10.000/bulan  
📌 *Metode Pembayaran:*  
- QRIS: [Klik Disini](https://imgbb.com/qris)  
- Dana: 08123456789  
- Ovo: 08123456789  
- Gopay: 08123456789  

📩 *Setelah transfer, kirim bukti pembayaran ke admin:* @username_admin  
`, { parse_mode: "Markdown" });
    });
};
