// src/index.js
const EmailService = require('./src/services/EmailService');

const emailService = new EmailService();
emailService.sendEmail('123', 'test@example.com', 'Test Subject', 'This is a test email.');
