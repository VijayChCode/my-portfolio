# Vijay Chalendra - Professional Portfolio

A modern, elegant portfolio website showcasing computer science education, projects, skills, and professional achievements. Built with cutting-edge web technologies and featuring glass morphism design with dark/light theme support.

## 🌟 Features

- **Glass Morphism Design** - Modern frosted glass effects with transparency and blur
- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Mobile-first approach that works perfectly on all devices
- **Admin Panel** - Secure admin access to manage portfolio content
- **PDF Resume Download** - One-click resume download from floating button
- **Smooth Animations** - Polished interactions and transitions throughout
- **SEO Optimized** - Professional portfolio structure for better discoverability

## 🚀 Technologies Used

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom glass morphism components
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React for beautiful icons
- **State Management**: React Hooks (useState, useEffect)
- **Theme Management**: Custom dark mode with system preference detection

### Architecture & Patterns
- **Client-Side Rendering**: Optimized with React hooks for state management
- **Component-Based**: Modular, reusable component structure
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA attributes, semantic HTML, keyboard navigation

## 📁 Project Structure

\`\`\`bash
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── globals.css         # Global styles and theme tokens
│   ├── page.tsx            # Main portfolio page
│   └── favicon.ico         # Site favicon
├── components/
│   └── ui/                 # shadcn/ui components
├── public/
│   └── images/
│       └── profile-photo.jpg # Profile image
├── README.md               # This file
└── package.json            # Project dependencies
\`\`\`

## 📚 Content Sections

### 1. **Home Section**
- Hero section with profile photo
- Professional title and about statement
- Call-to-action buttons (GitHub, LinkedIn, Contact)
- Theme toggle in navigation

### 2. **About Section**
- Academic background and introduction
- Key focus areas (AI, Software Development, System Design)
- Professional attributes (Communication, Teamwork, Adaptability)

### 3. **Education Section**
- Bachelor of Science in Computer Science (KITS, Warangal)
- CGPA: 9.28
- Comprehensive coursework details:
  - Data Structures
  - Software Methodology
  - Algorithms Analysis
  - Database Management
  - Artificial Intelligence
  - Internet Technology
  - Systems Programming
  - Computer Architecture

### 4. **Certifications Section**
- **Front-End Development (HTML)** - Great Learning Academy, November 2024
- **Packet Tracer Simulation** - Cisco Networking Academy, July 2024
- **Introduction to CyberSecurity** - Cisco Networking Academy, July 2024

### 5. **Technical Skills Section**
- **Programming Languages**: Java, Python, C, HTML/CSS, JavaScript, SQL
- **Development Tools**: VS Code, Git, GitHub
- **Technologies**: React.js, Frontend frameworks, Networking concepts

### 6. **Projects & Presentations**
- **Real Estate Management Application** (MERN Stack Capstone Project)
  - MongoDB schema design
  - RESTful API with Express.js
  - React.js UI development
  - Node.js backend
  - User authentication & CRUD operations
  - Role-based access control
  - Cloud deployment

- **Course Patent Presentation** - Data routing algorithms research
- **Neuralink Seminar Presentation** - Brain-machine interfaces

### 7. **Contact Section**
- Email:
- Phone:
- Location:
- LinkedIn & GitHub profiles

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Blue (#3B82F6) → Purple (#9333EA)
- **Light Theme**: Clean whites with subtle gradients
- **Dark Theme**: Deep slate with glass effects and glowing shadows
- **Accent Colors**: Emerald (projects), Pink (presentations), Cyan (skills)

### Glass Morphism Effects
- **Light Mode**: `glass-effect-light` - White base with blue tints
- **Dark Mode**: `glass-effect-dark` - Semi-transparent with blur backdrop
- Consistent border radius and spacing throughout

### Typography
- **Headings**: Bold, large font sizes with gradient text
- **Body Text**: Clear, readable with proper line height (1.6)
- **Accents**: Gradient backgrounds for visual interest

## 🛠️ Implementation Details

### Theme Toggle
\`\`\`typescript
// Theme state managed with localStorage and system preference detection
const isDarkMode = localStorage.getItem("darkMode") === "true" || 
                   window.matchMedia("(prefers-color-scheme: dark)").matches
\`\`\`

### Glass Morphism CSS
\`\`\`css
.glass-effect-dark {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-effect-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(59, 130, 246, 0.2);
}
\`\`\`

### Admin Panel
- Password-protected content management
- Edit profile information
- Upload resume (PDF)
- Update profile photo
- Changes persist during session

### Resume Download
- Floating action button (bottom-right)
- Direct PDF download functionality
- Fallback for missing files

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/VijayChCode/my-portfolio.git
cd portfolio
\`\`\`

3. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Run development server**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections adapt seamlessly across devices with Tailwind CSS breakpoints.

## 🔐 Admin Features

Admin capabilities:
- Edit name, title, and about section
- Update contact information
- Modify coursework descriptions
- Upload new resume (PDF)
- Change profile photo
- Save and persist changes

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
\`\`\`bash
git push origin main
\`\`\`

2. **Connect to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- One-click deployment

3. **Automatic Updates**
- Every push to main branch triggers automatic deployment

## 📊 Performance Optimizations

- Optimized image loading with Next.js Image component
- Lazy loading for off-screen components
- CSS-in-JS for minimal bundle size
- Tailwind CSS purging for production
- LocalStorage for theme persistence

## 🎯 Future Enhancements

- [ ] Blog section for technical articles
- [ ] Project showcases with live demos
- [ ] Skills proficiency levels with visual indicators
- [ ] Contact form with email notifications
- [ ] Testimonials section
- [ ] Analytics integration
- [ ] Multi-language support

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👤 About Vijay Chalendra

**Computer Science Undergraduate** at Kakatiya Institute of Technology and Science (KITS), Warangal

**Specializations**: 
- Full-Stack Web Development (MERN Stack)
- AI & Machine Learning
- Software Architecture & Design
- Data Structures & Algorithms

**Currently Open To**:
- Internship opportunities
- Contract projects
- Collaborations
- Freelance work

## 📞 Contact Information

- **Email**: [chalendravijay09@gmail.com](mailto:chalendravijay09@gmail.com)
- **LinkedIn**: [Vijay Chalendra](https://linkedin.com/in/vijay-chalendra-3a771428a)
- **GitHub**: [@VijayChCode](https://github.com/VijayChCode)
- **Location**: Hanamkonda, Telangana 506011, India
---

**Made with ❤️ using Next.js, Tailwind CSS, and React** | © 2025 Vijay Chalendra
