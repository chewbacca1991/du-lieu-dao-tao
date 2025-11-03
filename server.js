const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/du_lieu_dao_tao';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với nền tảng Dữ Liệu Đào Tạo!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});