# EasyCode Academy - Landing Page

A modern, responsive landing page for EasyCode Academy built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher
- **pnpm**: Version 8.x or higher (recommended) or npm/yarn

To check your versions:
```bash
node -v
pnpm -v
```

To install pnpm globally:
```bash
npm install -g pnpm
```

##  Project Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd easy-code
```

### 2. Install Dependencies
```bash
pnpm install
```

Or if using npm:
```bash
npm install
```

### 3. Run the Development Server
```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Start by modifying `app/page.tsx`.

## 📁 Project Structure

```
easy-code/
├── app/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── WhyLearnSection.tsx
│   │   ├── IndustryExpertsSection.tsx
│   │   ├── CareerRolesSection.tsx
│   │   ├── MeetMentorsSection.tsx
│   │   ├── WhyEasyCodeSection.tsx
│   │   ├── BonusesSection.tsx
│   │   ├── ProgramRoadmapSection.tsx
│   │   └── Footer.tsx
│   ├── checkout/            # Checkout page
│   │   └── page.tsx
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

##  Available Scripts

- **`pnpm dev`** - Start development server on [http://localhost:3000](http://localhost:3000)
- **`pnpm build`** - Build the application for production
- **`pnpm start`** - Start the production server
- **`pnpm lint`** - Run ESLint to check code quality

##  Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font) Sans & Mono
- **Linting**: ESLint with Next.js config

##  Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

##  Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

##  Troubleshooting

**Port already in use:**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
pnpm dev -- -p 3001
```

**Node modules issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
pnpm build
```
