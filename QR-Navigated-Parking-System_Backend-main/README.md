QR Navigation-Based Parking System:
The QR Navigation-Based Parking System is an easy-to-use, lightweight parking management solution. This project enables users to quickly book parking slots by simply scanning a QR code, eliminating the need for complex registration processes. Users only need to provide their car number and mobile number for seamless access to parking services.

Features:
1) QR-Based Booking: Easily book a parking slot by scanning a QR code at the parking facility.
2) Minimal Details Required: No lengthy registration process; only car number and mobile number are needed.
3) Lightweight System: Designed for simplicity, making it efficient for parking owners and easy to use for customers.
4) OTP Verification (Optional): Secure booking and retrieval with OTP-based verification to avoid misuse.

Technology Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB Atlas

Clone the repository:
git clone https://github.com/your-username/qr-parking-system.git
cd qr-parking-system

Install dependencies for both frontend and backend:
cd backend
npm install


cd ../frontend
npm install

Set up environment variables:
For OTP services, add your API keys in .env file in the backend directory.

Run the app:


In the backend directory
npm run dev

In the frontend directory
npm start

Usage:
1) Scanning the QR Code: Open your mobile's QR code scanner or camera to scan the QR code displayed at the parking facility.
2) Enter Details: Input your car number and mobile number to confirm booking.
3) Booking Confirmation: Receive a confirmation message with your slot details.
4) Retrieval: For added security, you may need to provide an OTP when retrieving your vehicle.

Contributions are welcome! Please submit a pull request or open an issue to discuss potential improvements.

Thank you for checking out the QR Navigation-Based Parking System!
