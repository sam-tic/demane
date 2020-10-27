const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')
const mail = require('nodemailer')

const pdfTemplate = require('./document')

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//post

app.post('/create-pdf', (req, res) => {
    //console.log(req.body)
    let filee = `forms/result${req.body.id}.pdf`
    pdf.create(pdfTemplate(req.body), {}).toFile(filee, (err) => {
        if (err) {
            res.send(Promise.reject())
        }

        console.log('pdf created !')
        res.send({ file: filee })
    })
})

var transporter = mail.createTransport({
    service: 'gmail',
    auth: {
        user: 'samtic.info@gmail.com',
        pass: 'Khadra@@1916'
    }
})

app.get('/email-sent', (req, res) => {
    console.log(req.query.file)


    var mailOptions = {
        from: 'samtic.info@gmail.com',
        to: 'info.sam.tic@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        attachments: [{ // file on disk as an attachment
            filename: 'formulaire.pdf',
            path: req.query.file // stream this file
        }],
    }

    transporter.sendMail(mailOptions, function(error, info) {

        if (error) {
            res.send(Promise.reject())
        }

        console.log('Email sent: ' + info.response + ' - ' +
            req.query.file);
        res.send(Promise.resolve())


    })
})

//--------------

//-------------





//get 

// app.get('/fetch-pdf', (req, res) => {
//     res.sendFile(`${__dirname}/result1.pdf`)
// })

//----------- send email 
// var transporter = mail.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'samtic.info@gmail.com',
//         pass: 'Khadra@@1916'
//     }
// });

// var mailOptions = {
//     from: 'samtic.info@gmail.com',
//     to: 'info.sam.tic@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!',
//     attachments: [{ // file on disk as an attachment
//         filename: 'formulaire.pdf',
//         path: 'result1.pdf' // stream this file
//     }],
// };

// transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

var server = app.listen(port, () => { console.log(port) })
server.setTimeout(500000);