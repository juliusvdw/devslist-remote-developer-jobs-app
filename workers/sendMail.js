// ("use strict");
// const nodemailer = require("nodemailer");
// const mg = require("nodemailer-mailgun-transport");

// const config = require("config");
// const gmailClient = config.get("gmailClient");
// const gmailReciever = config.get("gmailReciever");
// const mailgunAPI = config.get("mailgunAPI");
// const mailgunDOmain = config.get("mailgunDomain");

// async function sendMail(name, email, message) {
//   try {
//     // create auth info
//     const mailgunAuth = {
//       auth: {
//         api_key: `${mailgunAPI}`,
//         domain: `${mailgunDOmain}`,
//       },
//     };

//     const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

//     const mailOptions = {
//       from: `${gmailClient}`,
//       to: `${gmailReciever}`,
//       subject: `Devslist contact from ${name} `,
//       text: `${message} Email ${email}`,
//     };

//     // send mail with defined transport object
//     smtpTransport.sendMail(mailOptions, function (error, response) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Successfully sent email.");
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// module.exports = sendMail;
