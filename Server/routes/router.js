const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/send", (req, res) => {
  const { enteredEmail, enteredName, message } = req.body;
  const password = process.env.EMAIL;
  console.log(enteredEmail, enteredName, message);
  console.log(password);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Email sent by ${enteredName}`,
    html: `<h1> <u>${enteredName} </u> has send you a email</h1>
     <h3>:Email ${enteredEmail} </h3>  
    <p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Handle the error
      console.log(error);
      res.status(401);
    } else {
      // Handle the success
      console.log("Email sent successfully!");
      res.json("email Send Successfully");
    }
  });
});

module.exports = router;
