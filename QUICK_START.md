# Quick Start Guide

Get your portfolio up and running in minutes!

## ⚡ Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

That's it! Your portfolio is running locally.

## 🎨 Quick Customization

### Update Your Name
**File**: `components/Hero.tsx`
```typescript
// Line ~45
<span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
  Your Name Here  // ← Change this
</span>
```

### Update Contact Information
**File**: `components/Contact.tsx`
```typescript
// Lines ~20-30
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',  // ← Update
    link: 'mailto:your.email@example.com',
  },
  // ... update other fields
];
```

### Update Work Experience
**File**: `data/experience.ts`
```typescript
export const experiences: Experience[] = [
  {
    company: "Your Company",      // ← Update
    position: "Your Position",    // ← Update
    duration: "Jan 2020 - Present", // ← Update
    // ... update description and technologies
  },
];
```

### Add Your Projects
**File**: `data/projects.ts`
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Name",   // ← Update
    description: "Description",    // ← Update
    // ... add your project details
  },
];
```

### Add Your Skills
**File**: `data/skills.ts`
```typescript
export const skills: Skill[] = [
  { name: "Your Skill", level: 90, category: "frontend" }, // ← Add your skills
];
```

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your portfolio will be live in minutes!

## 🎯 Next Steps

1. ✅ Customize personal information
2. ✅ Add your projects
3. ✅ Update skills and experience
4. ✅ Add your resume PDF to `public/` folder
5. ✅ Update social media links
6. ✅ Deploy!

## 📚 Need More Help?

- See `README.md` for detailed documentation
- See `PROJECT_STRUCTURE.md` for architecture details
- Check Next.js docs: https://nextjs.org/docs

---

Happy coding! 🎉
