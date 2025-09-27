import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter with direct credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "manjikavi8@gmail.com",      // your Gmail
        pass: "bmzblkfiqwtfqjrj",          // your App Password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <manjikavi8@gmail.com>`,
      to: "manjikavi8@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>Portfolio Contact Form</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
