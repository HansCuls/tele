const fs = require('fs');
const path = require('path');

module.exports = (bot) => {
    setInterval(() => {
        let dir = './temp';
        fs.readdir(dir, (err, files) => {
            if (err) return;

            files.forEach(file => {
                fs.unlink(path.join(dir, file), err => { if (err) console.log(err); });
            });
        });

        console.log("🧹 Pembersihan file selesai.");
    }, 604800000); // 7 hari
};
