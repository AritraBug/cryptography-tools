# Cryptography Tools

A comprehensive web application featuring various encryption algorithms including classical ciphers and modern cryptography standards.

## Features

This application provides implementation and interactive demonstrations of the following encryption methods:

### Classical Ciphers
- **Caesar Cipher**: A simple substitution cipher where each letter is shifted by a fixed number
- **Playfair Cipher**: Uses a 5×5 matrix of letters for paired substitution
- **Hill Cipher**: Utilizes linear algebra with matrices for encryption

### Modern Encryption
- **AES (Advanced Encryption Standard)**: Current standard for symmetric encryption
- **DES (Data Encryption Standard)**: Block cipher developed in the 1970s

## Tech Stack

- **Framework**: Next.js
- **Language**: JavaScript
- **Styling**: CSS (globals.css)
- **Component Structure**: React components in JSX

## Project Structure

```
cryptography-tools/
├── .next/                 # Next.js build directory
├── app/                   # Main application directory
├── components/            # React components
│   └── CryptographyTool.jsx  # Main component for cryptography tools
├── lib/                   # Library code
│   └── algorithms/        # Encryption algorithm implementations
│       ├── aesAlgorithm.js
│       ├── caesarCipher.js
│       ├── desAlgorithm.js
│       ├── hillCipher.js
│       ├── index.js
│       └── playfairCipher.js
├── public/                # Public assets
├── node_modules/          # Dependencies
├── .gitignore             # Git ignore file
├── favicon.ico            # Site favicon
├── jsconfig.json          # JavaScript configuration
├── next.config.mjs        # Next.js configuration
├── package-lock.json      # Package lock file
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/cryptography-tools.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cryptography-tools
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

The application provides a user interface to:
- Select an encryption algorithm
- Input text to encrypt/decrypt
- Set encryption keys or parameters
- View encrypted/decrypted output

## License

[Choose an appropriate license]

## Acknowledgments

- References and resources used for implementing cryptographic algorithms
- Any libraries or tools that inspired this project