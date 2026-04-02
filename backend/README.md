# Bestricky Backend

Backend server for handling contact form submissions via email using Gmail.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Gmail credentials:
   - Go to Google Account settings > Security > 2-Step Verification
   - Generate an App Password for this application
   - Update `.env` file with your Gmail credentials:
     ```
     GMAIL_USER=your-gmail@gmail.com
     GMAIL_APP_PASSWORD=your-app-password
     RECIPIENT_EMAIL=marvellousabiola08@gmail.com
     PORT=5000
     ```

3. Build and run:
   ```bash
   npm run build
   npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

## API

- POST `/api/contact`: Send contact form data and receive email notification.