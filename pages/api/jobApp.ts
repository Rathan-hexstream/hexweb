// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.MAIL_USER,
    to: "careers@hexstream.com",
    subject: `Job Application for ${req.body.title}`,
    html: `<p>Greetings,</p>
    <p>${req.body.name} has applied through our website for the position of ${req.body.title}.</p>
    <p>The details regarding the application are as follows:</p>
    <p>Background: ${req.body.desc}</p>
    <p>CV: <a target="_blank" href=${req.body.cvUrl}> Link </a> </p>
    <p>The contact details of the applicant are as follows:</p>
    <p>Contact Number: ${req.body.phone} </p>
    <p>Contact Email: ${req.body.email} </p>

    <p> Regards, </p>
    <p> HEXstream </p>
    `,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
