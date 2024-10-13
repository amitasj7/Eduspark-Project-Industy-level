const nodemailer = require("nodemailer");
const { modelName } = require("../models/OTP");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "Eduspark || Education - by Amit ASJ",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
