// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Cryptography Tool',
  description: 'A tool for encrypting and decrypting text using various cryptographic algorithms',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Cryptography Tool</h1>
        </header>
        {children}
        <footer className="bg-gray-100 p-4 text-center text-gray-600 mt-8">
          <p>© {new Date().getFullYear()} Cryptography Tool - All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}