var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 4000;

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
        //   host: 'smtp.gmail.com',
        //   port: 465,
        //   secure: true,
        //   auth: {
        //       user: '',
        //       pass: ''
        //   }
        service: 'gmail',
        auth: {
                user: '',
                pass: ''
            }
      });
      let mailOptions = {
          from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
          to: 'bearlikecode@gmail.com', // list of receivers
          subject: 'test', // Subject tape
          text: 'Plaintext version of the message', // plain text body
          html: ``
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
