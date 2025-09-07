# Next Vibe Coding EVM Starter

A modern and opinionated Next.js starter template for EVM-based Web3 applications with internationalization support and best development practices preconfigured.

## ✨ Features

- 🌐 **Multi-language Support** - Built-in internationalization (English & Chinese)
- 🌙 **Dark/Light Theme** - System-aware theme switching with next-themes
- 🔗 **Web3 Integration** - RainbowKit + Wagmi + Viem for seamless blockchain connectivity
- 🎨 **Modern UI** - shadcn/ui components with Tailwind CSS v4 and OKLCH colors
- ⚡ **Next.js 15** - Latest Next.js with React 19 and Rspack for optimized builds
- 🛠 **Developer Experience** - TypeScript, Biome, Husky, and lint-staged preconfigured
- 📱 **Responsive Design** - Mobile-first approach with beautiful animations

## 🚀 Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) with React 19
- **Build Tool:** [Rspack](https://rspack.dev/) for optimized bundling
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH color system
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/)
- **Logging:** [Pino](https://github.com/pinojs/pino) + [Pino Pretty](https://github.com/pinojs/pino-pretty)

### Web3 & Blockchain
- **Wallet Connection:** [RainbowKit](https://www.rainbowkit.com/)
- **Ethereum Library:** [Wagmi](https://wagmi.sh/) + [Viem](https://viem.sh/)
- **State Management:** [TanStack Query](https://tanstack.com/query)

### Internationalization
- **i18n Framework:** [next-intl](https://next-intl.dev/)
- **Supported Languages:** English (en), Chinese (cn)
- **Automatic Detection:** Browser language detection with fallback

### Development Tools
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)
- **Code Quality:** [Biome](https://biomejs.dev/) for formatting and linting
- **Git Hooks:** [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)

## 🏁 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/next-vibe-coding-evm-starter.git
   cd next-vibe-coding-evm-starter
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Environment setup:**
   ```bash
   cp .env.example .env
   ```
   
   Add your WalletConnect Project ID:
   ```env
   WALLET_CONNECT_PROJECT_ID=your_project_id_here
   ```

4. **Start development server:**
   ```bash
   bun dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build production bundle with format & lint
- `bun start` - Start production server
- `bun format` - Format code with Biome
- `bun lint` - Lint code with Biome

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [RainbowKit](https://www.rainbowkit.com/) - The best way to connect a wallet
- [Wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- [Viem](https://viem.sh/) - Ethereum library for JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible components
- [next-intl](https://next-intl.dev/) - Internationalization for Next.js
- [Biome](https://biomejs.dev/) - Fast toolchain for web projects