const express = require('express'),
    server = express();
const path = require('path');
require(dotenv).config();
const nodeMailer = require('nodemailer');

const port = process.env.PORT || 8080


server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));



async function mainMail(name, email, subject, message) {
    const transporter = await nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.PASSWORD,
        }
    });
    const mailOption = {
        from: p
    }
}

server.get('/contact', (req, res) => {
    res.sendFile('/contact.html', { root: __dirname });
});

server.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname });
});

server.get('/about', (req, res) => {
    res.sendFile('/about.html', {
        root: __dirname
    });
});
server.get('/gallery', (req, res) => {
    res.sendFile('/gallery.html', {
        root: __dirname
    });
});



server.listen(port, () => {
    console.log(`Express server started at port ${port}`);
});
