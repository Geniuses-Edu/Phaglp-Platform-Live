# PHAGLP - Philosophical Education Platform
A modern full-stack web application for philosophical education, built with Next.js, TypeScript, and Tailwind CSS.
## 🚀 Features
### Layout & Sections
- **Header**: Company logo, navigation links, and call-to-action button
- **Hero Section**: Catchy headline, description, and prominent CTA
- **Features Section**: Highlights 3-4 key platform features
- **Testimonials Section**: Customer quotes and reviews
- **Pricing Section**: Multiple subscription plan options
- **Final CTA Section**: Strong sign-up encouragement
- **Footer**: Important links and social media icons
### UI & Components
- **Reusable UI Components**: Nav, Hero, Footer, Cards, Buttons
- **Shared UI Elements**: Typography, inputs, icons, gradients
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Styling**: Clean, professional aesthetic
### Routes & Content Models
- **Home Page**: Complete landing page with all sections
- **Courses Page**: Browse and search philosophical courses
- **Articles Page**: Explore philosophical articles and insights
- **Dashboard Page**: User learning progress and statistics
- **Profiles Page**: Instructor profiles and expertise
### Data Structures
- **Courses**: title, slug, description, lessons[], instructor, pricing
- **Articles**: title, slug, tags[], body, author, category
- **Pages**: title, slug, content (generic pages)
- **Testimonials**: name, role, content, rating
- **Pricing Plans**: name, price, features, period
### Navigation
- **Navbar Links**: Philosophical Courses, Articles, User Profiles, Dashboard
- **Dropdown Menus**: Organized sub-categories
- **Mobile Responsive**: Collapsible mobile navigation
### Information Architecture
- **Top-level Categories**: Education, E-Commerce, Marriage
- **Nested Sub-pages**: Science, Weekly Applied Lecture, Wisdom under Education
- **Flexible Structure**: Easy to add new categories without code changes
## 🛠️ Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Headless UI
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
## 📁 Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── courses/           # Courses page
│   ├── articles/          # Articles page
│   ├── dashboard/         # User dashboard
│   ├── profiles/          # Instructor profiles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── navigation/       # Navigation components
│   ├── sections/         # Page sections
│   └── cards/            # Card components
├── config/               # Configuration files
│   └── site.ts           # Site configuration
├── data/                 # Sample data
│   └── sample-data.ts    # Mock data
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```
## 🚀 Getting Started
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview
### Home Page (`/`)
- Hero section with compelling headline
- Features showcase
- Featured courses and articles
- Customer testimonials
- Pricing plans
- Final call-to-action

### Courses Page (`/courses`)
- Course grid with search and filters
- Course cards with ratings and pricing
- Instructor information
- Progress tracking

### Articles Page (`/articles`)
- Featured and all articles
- Search and filtering
- Article categories and tags
- Author information

### Dashboard Page (`/dashboard`)
- Learning progress overview
- Current courses
- Recent activity timeline
- Upcoming events
- Statistics and achievements

### Profiles Page (`/profiles`)
- Instructor profiles
- Expertise and specialties
- Course counts and ratings
- Contact information

## 🎨 Design System
### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font Family**: Inter
- **Headings**: Bold, various sizes
- **Body**: Regular, readable sizes
- **Captions**: Small, muted colors

### Components
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Cards**: Consistent spacing and shadows
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive with dropdowns

## 🔧 Customization
### Adding New Categories
1. Update `src/config/site.ts` with new category
2. Add corresponding page in `src/app/`
3. Update navigation if needed

### Adding New Content Types
1. Define TypeScript interface in `src/types/index.ts`
2. Add sample data in `src/data/sample-data.ts`
3. Create corresponding components and pages

### Styling Changes
- Modify `src/app/globals.css` for global styles
- Update component-specific styles in individual files
- Use Tailwind CSS classes for consistent styling

## 📄 License
This project is created for educational purposes as part of the PHAGLP platform demonstration.

## 🤝 Contributing
This is a demonstration project. For production use, consider:
- Adding authentication
- Implementing a backend API
- Adding database integration
- Implementing payment processing
- Adding user management features

---

**PHAGLP** - Discover wisdom through philosophy. 🧠✨
