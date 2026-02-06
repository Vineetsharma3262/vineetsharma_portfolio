# Portfolio Application

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing the skills, projects, and experience of a Senior Frontend Developer with 5.8 years of expertise.

## 🚀 Features

- **Modern Design**: Clean, professional design that reflects senior-level expertise
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Dark Theme**: Modern dark theme with gradient accents
- **Interactive Sections**: 
  - Hero section with animated background
  - About section with experience timeline
  - Skills showcase with progress bars
  - Projects gallery with filtering
  - Contact form with validation

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Libraries & Tools
- **Framer Motion** - Animation library (free)
- **Lucide React** - Icon library (free)
- **ESLint** - Code linting

All libraries used are **100% free and open-source**.

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navbar.tsx           # Navigation bar component
│   ├── Hero.tsx             # Hero/landing section
│   ├── About.tsx            # About section with experience
│   ├── Skills.tsx           # Skills showcase
│   ├── Projects.tsx         # Projects gallery
│   ├── Contact.tsx          # Contact form section
│   └── Footer.tsx           # Footer component
├── data/                    # Data files
│   ├── skills.ts            # Skills data
│   ├── projects.ts          # Projects data
│   └── experience.ts        # Work experience data
├── types/                   # TypeScript type definitions
│   └── index.ts             # Shared types/interfaces
├── public/                  # Static assets (if any)
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Component Details

### 1. Navbar Component (`components/Navbar.tsx`)
- Fixed navigation bar with smooth scroll behavior
- Responsive mobile menu with hamburger icon
- Transparent background that becomes opaque on scroll
- Smooth animations on mount and hover

**Features:**
- Sticky navigation
- Mobile-responsive menu
- Active section highlighting
- Smooth scroll to sections

### 2. Hero Component (`components/Hero.tsx`)
- Eye-catching landing section
- Animated background with gradient blobs
- Call-to-action buttons
- Scroll indicator
- Mouse parallax effects

**Features:**
- Gradient text effects
- Floating animated elements
- Responsive typography
- Download resume button

### 3. About Component (`components/About.tsx`)
- Professional introduction
- Statistics cards (Projects, Clients, Experience, Technologies)
- Work experience timeline
- Technology tags for each role

**Features:**
- Animated statistics
- Timeline visualization
- Responsive grid layout
- Hover effects on cards

### 4. Skills Component (`components/Skills.tsx`)
- Categorized skills display
- Progress bars with animations
- Filter by category (Frontend, Backend, Tools)
- Skills summary section

**Features:**
- Interactive category filtering
- Animated progress bars
- Skill level percentages
- Responsive grid layout

### 5. Projects Component (`components/Projects.tsx`)
- Featured projects showcase
- Project cards with hover effects
- Technology tags
- Links to GitHub and live demos

**Features:**
- Featured vs regular projects
- Hover animations
- External link buttons
- Technology stack display

### 6. Contact Component (`components/Contact.tsx`)
- Contact form with validation
- Contact information cards
- Social media links
- Form submission handling

**Features:**
- Form validation
- Responsive two-column layout
- Social media integration
- Email/Phone/Location display

### 7. Footer Component (`components/Footer.tsx`)
- Simple footer with copyright
- Animated heart icon
- Responsive layout

## 📊 Data Structure

### Skills Data (`data/skills.ts`)
```typescript
interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}
```

### Projects Data (`data/projects.ts`)
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
```

### Experience Data (`data/experience.ts`)
```typescript
interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}
```

## 🎯 Customization Guide

### 1. Update Personal Information

**Hero Section:**
- Edit `components/Hero.tsx` - Update name and description
- Change resume download link

**About Section:**
- Edit `components/About.tsx` - Update statistics
- Modify `data/experience.ts` - Update work experience

**Contact Section:**
- Edit `components/Contact.tsx` - Update contact information
- Update social media links

### 2. Update Skills

Edit `data/skills.ts`:
```typescript
export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  // Add your skills here
];
```

### 3. Update Projects

Edit `data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description",
    // ... add your projects
  },
];
```

### 4. Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Update primary color palette
  },
}
```

### 5. Update Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Your description",
};
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

The application uses Tailwind CSS breakpoints:
- **sm**: 640px (small devices)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)

All components are fully responsive and tested across these breakpoints.

## 🎨 Design Principles

1. **Consistency**: Uniform spacing, typography, and color scheme
2. **Hierarchy**: Clear visual hierarchy with proper heading sizes
3. **Accessibility**: Semantic HTML and proper ARIA labels
4. **Performance**: Optimized images and lazy loading
5. **User Experience**: Smooth animations and intuitive navigation

## 🔧 Configuration Files

### `next.config.mjs`
- Image domain configuration
- React strict mode enabled

### `tailwind.config.ts`
- Custom color palette
- Custom animations
- Extended theme configuration

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (@/*)

## 📝 Animation Details

All animations use **Framer Motion** (free library):

1. **Page Load Animations**: Stagger children for smooth entrance
2. **Scroll Animations**: Trigger on viewport entry
3. **Hover Effects**: Scale, translate, and color transitions
4. **Background Animations**: Pulsing gradient blobs
5. **Parallax Effects**: Mouse movement parallax

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Connect repository
- **Self-hosted**: Build and serve static files

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own projects!

## 📧 Support

For questions or issues, please open an issue on the repository or contact through the portfolio contact form.

## 🎉 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

---

**Built with ❤️ using Next.js and Tailwind CSS**
