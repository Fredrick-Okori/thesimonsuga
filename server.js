const express = require('express'),
    server = express();
const path = require('path');
require('dotenv').config({ path: '../.env' })
const nodemailer = require('nodemailer');




const port = process.env.PORT || 8080


server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));



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
server.get('/contact', (req, res) => {
    res.sendFile('/contact.html', { root: __dirname });
});


const contactAddress = 'info@thesimonsuga.com';


server.post('/contact', async (req, res, next) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
            user: "info@thesimonsuga.com",
            pass: "Cof%fgsz45",
        },
    });
    const mailOption = {
        //build email option
        from: [contactAddress, req.body.email],
        to: [req.body.email],
        from: `${req.body.name}`,
        subject: `${req.body.subject}`,
        text: req.body.message
    }

    //send mail
    transporter.sendMail(mailOption, (req, res, error, info) => {
        console.log(error);
    })
});

server.listen(port, () => {
    console.log(`Express server started at port ${port}`);
});
