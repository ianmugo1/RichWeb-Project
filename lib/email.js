import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,  // Gmail email address from .env.local
    pass: process.env.GMAIL_PASSWORD, // Gmail password from .env.local
  },
});

export const sendOrderConfirmationEmail = async ({ customer, items, totalPrice }) => {
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,  // Gmail email address
    to: customer.email,  // Customer email from order data
    subject: 'Order Confirmation from Krispy Kreme',
    text: `Hello ${customer.name},\n\nThank you for your order at Krispy Kreme!\n\nOrder Summary:\n\n${items
      .map((item) => `${item.pname} x${item.quantity}`)
      .join('\n')}\n\nTotal Price: €${totalPrice.toFixed(2)}\n\nWe will process your order shortly.\n\nBest regards,\nKrispy Kreme`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send order confirmation email');
  }
};