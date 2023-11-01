import nodemailer from "nodemailer";

export function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587 ,
    auth: {
      user: "4b39f922f7bf1a",
      pass: "a9b4dbe073a2f3",
    },
  });

  const mailOptions = {
    from: "leykhoaqk@gmail.com",
    to: "leykhoaqk@gmail.com",
    subject: "Test Email",
    text: "Hello, this is a test email from Nodemailer!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.send(error);
    } else {
      console.log("Email sent:", info.response);
      res.send(error);
    }
  });
}
