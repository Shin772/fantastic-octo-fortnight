const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public')); // 假设您的HTML文件位于public目录下
app.use(bodyParser.urlencoded({ extended: true }));

// 图片上传路由
app.post('/upload', upload.single('file-upload'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully: ' + req.file.filename);
});

// 登录路由
app.post('/login', (req, res) => {
    // 这里应该有代码来验证用户身份，例如检查数据库中的用户名和密码
    // 这个示例直接返回成功
    res.send('Login successful');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
