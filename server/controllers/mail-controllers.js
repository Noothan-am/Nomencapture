const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendMail = async (req, res) => {
  const { userName, userEmail } = req.body;
  console.log(userName, userEmail);
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

    const userMessage = {
      body: {
        name: userName, // it will show Hi with this name as heading
        intro:
          "Thankyou for filling the form we will get back to you in 2-3 working days", // message after heading
        outro:
          "Need help, or have questions? Just ask your query to this mail ink@become.team, sam@become.team", // end it will be written like this
      },
    };

    const userMail = await MailGenerator.generate(userMessage);
    const userMailOptions = {
      from: userMail,
      to: userEmail,
      subject: "Nomencapture", // main title before opening the mail
      html: userMail,
    };

    const teamMessage = {
      body: {
        name: "Nomencapture Team", // it will show Hi with this name as heading
        intro: `User Has Filled the Form On ${new Date()}`, // message after heading
      },
    };

    const teamMail = await MailGenerator.generate(teamMessage);
    const teamMailOptions = {
      from: teamMail,
      to: userEmail,
      subject: "Nomencapture", // main title before opening the mail
      html: teamMail,
    };

    transport
      .sendMail(userMailOptions)
      .then(async (response) => {
        console.log("response");
        transport.sendMail(teamMailOptions).then(() => {
          return res.status(200).send({
            msg: "Messages sent successfully",
          });
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
