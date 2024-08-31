const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    // Bu örnekte, kullanıcı doğrulama basit bir kontrol ile yapılıyor.
    // Gerçek uygulamada, veritabanı sorgulama yapılmalı.
    if (email === 'test@example.com' && password === 'password') {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
