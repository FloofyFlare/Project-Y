🛒 Project-Y: On-Chain E-Commerce on Cardano
Welcome to Project-Y, a blockchain-native eCommerce platform that runs entirely on-chain using the Cardano blockchain. This repo contains the frontend and infrastructure code powering a decentralized marketplace where transactions, listings, and ownership are governed by smart contracts—no intermediaries, no compromises.

🚀 Key Features
Cardano Smart Contracts: All marketplace logic is executed on-chain using Plutus scripts.

Decentralized Listings: Products are listed and verified via immutable transactions.

Secure Payments: ADA-based payments processed directly through Cardano wallets.

Dockerized Deployment: Easily spin up the full stack using docker-compose.

Vue.js Frontend: Lightweight, responsive UI built with Vue and TypeScript.

🧰 Setup Instructions
bash
# Install dependencies
sudo apt-get install curl
sudo apt-get install nodejs
sudo npm install -g @vue/cli

# Clone the repo and start development
git clone https://github.com/FloofyFlare/Project-Y.git
cd Project-Y/project-y
yarn install
yarn dev
🧼 Code Quality
Run linting tools to keep the codebase clean:

bash
yarn lint
yarn lintfix
🤝 Contribution Guidelines
Only commit to main if your changes are fully functional and error-free.

For major changes, open a pull request and tag a contributor.

📦 Tech Stack
Layer	Technology
Frontend	Vue.js + TypeScript
Blockchain	Cardano (Plutus)
Containerization	Docker + Nginx
Package Manager	Yarn
Feel free to tweak the tone or add more technical depth depending on your audience—whether it's developers, investors, or Cardano ecosystem contributors. Want help drafting a whitepaper or smart contract overview next?
