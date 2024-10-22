# Solvency

![Solvency Logo](path/to/logo.png)

## Overview

**Solvency** is a secure and user-friendly banking app that leverages cutting-edge technology to provide seamless financial management. Built with a modern tech stack, Solvency offers features like budgeting tools, secure transactions, and real-time financial insights using services like Plaid for account linking and Dwolla for payments.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with **TypeScript**
- **Backend**: [Appwrite](https://appwrite.io/) (for authentication, database, and file storage)
- **Payments**: [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for schema validation
- **UI**: [TailwindCSS](https://tailwindcss.com/), [ShadCN](https://shadcn.dev/)
- **Charts**: [Chart.js](https://www.chartjs.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Features

- **Secure Transactions**: Plaid and Dwolla integration for seamless and secure financial operations.
- **Account Management**: Manage accounts, view balances, and track expenses.
- **Budgeting Tools**: Create budgets, categorize expenses, and track progress.
- **Financial Analytics**: Visualize financial data using Chart.js for easy-to-understand insights.
- **Form Handling**: Smooth form handling with React Hook Form and Zod for validation.
- **Responsive Design**: TailwindCSS and ShadCN ensure a sleek and mobile-friendly UI.

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/) (version 7 or higher)
- [Node.js](https://nodejs.org/) (version 16 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Psamcyite/solvency.git
   ```

2. Navigate to the project directory:
   ```bash
   cd solvency
   ```

3. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

4. Set up environment variables for Appwrite, Plaid, and Dwolla in a `.env` file:
   ```bash
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
   NEXT_PUBLIC_PLAID_PUBLIC_KEY=your-plaid-public-key
   NEXT_PUBLIC_DWOLLA_KEY=your-dwolla-key
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Sign Up**: Register using Appwrite's authentication system.
2. **Connect Accounts**: Link your bank accounts through Plaid.
3. **Track Finances**: Use the budgeting tools and visual charts to monitor spending.
4. **Make Payments**: Initiate payments using Dwolla integration.

## Testing

To run tests for your project, use the following command:

```bash
pnpm test
```

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```

4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.


## Contact

For questions or feedback, please reach out:

- **Email**: psamcyitedev@gmail.com
- **Website**: [psamcyitedev.com](https://psamcyitedev.com)