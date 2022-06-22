export default function handler(req, res) {
  console.log("This is the data ");
  console.log(req.body);
  console.log(process.env.ADMIN_USER);
  console.log(process.env.EMAIL_USERNAME);
  console.log(process.env.EMAIL_PASSWORD);
  const { email } = req.body;
  const { fullname } = req.body;
  const { message } = req.body;
  const { subject } = req.body;
  const nodemailer = require("nodemailer");
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: process.env.PORT,
    auth: {
      user: "ab94162b793d55",
      pass: "4eb0205473bf3f",
    },
  });
  const mailOptions = {
    from: email, // Sender address
    to: process.env.ADMIN_USER,
    subject: subject, // Subject line
    text: message, // Plain text body
    name: fullname,
  };
  try {
    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(`Error is ${err}`);
      } else {
        console.log(`Information is ${info}`);
      }
    });
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
  }
  res.status(200).end(JSON.stringify({ message: "Success" }));
}
