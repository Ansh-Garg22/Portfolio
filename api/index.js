import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*', // Allow all origins (adjust for production if needed, but safe for portfolio)
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running!');
});

// Email Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log("Received email request from:", email);

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
        from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
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

export default app;
