import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  // transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hasnainpak3@gmail.com",
      pass: "ofrdkwxxqtsknyeg",
    },
  });

  // Email options
  let mailOptions = {
    from: email,
    to: "hasnainpak3@gmail.com",
    subject: subject,
    text: `Name: ${name}\n Subject: ${subject} \n Email: ${email}\n\nMessage:\n${message}`,
    replyTo: email,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
