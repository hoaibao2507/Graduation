const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cung cấp các file tĩnh trong thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
    console.log(`Hãy gửi link này cho bạn bè nhé!`);
});