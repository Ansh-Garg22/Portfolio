import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running!');
});

// Email Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log("Received email request:", { name, email });

    // Validate credentials presence
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing EMAIL_USER or EMAIL_PASS in .env file");
        return res.status(500).json({ success: false, message: 'Server configuration error: Missing email credentials.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`, // Sender address (must be authenticated user)
        to: process.env.EMAIL_USER,
        replyTo: email, // This allows you to hit "Reply" and send to the user
        subject: `Portfolio: New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: 'Failed to send email. Check server logs.' });
    }
});

// Export the Express API
export default app;

// Only start the server if running directly (not via Vercel)
if (process.env.NODE_ENV !== 'production' && process.argv[1].endsWith('server.js')) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
} else if (!process.env.VERCEL) {
    // Fallback for local concurrently dev where argv might differ
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
