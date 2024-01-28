const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendMail = async (req, res) => {
  const { userName, userEmail } = req.body;
  try {
    let service = {
      service: "gmail",
      auth: {
        user: process.env.FROM_ADMIN_MAIL,
        pass: process.env.MAIL_PASS_KEY,
      },
    };

    const transport = nodemailer.createTransport(service);
    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Become",
        link: "https://mailgen.js/",
      },
    });

    const response = {
      body: {
        name: userName, // it will show Hi with this name as heading
        intro:
          "Thankyou for filling the form we will get back to you in 2-3 working days", // message after heading
        outro:
          "Need help, or have questions? Just ask your query to this mail ink@become.team, sam@become.team", // end it will be written like this
      },
    };

    const mail = MailGenerator.generate(response);
    const message = {
      from: mail,
      to: userEmail,
      subject: "Hello", // main title before opening the mail
      html: mail,
    };

    transport
      .sendMail(message)
      .then((response) => {
        return res.status(200).send({
          msg: "message sent successfully",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = sendMail;
