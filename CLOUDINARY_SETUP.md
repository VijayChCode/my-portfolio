# Cloudinary Integration Setup

## Overview
This portfolio uses Cloudinary for storing and managing resume PDFs and profile images. When you upload files through the admin panel, they are securely stored in Cloudinary's cloud storage.

## Environment Variables Setup

### 1. Create Cloudinary Account
- Visit [Cloudinary Console](https://cloudinary.com/console)
- Sign up for a free account (includes 25GB storage)
- Go to Settings/Dashboard to find your credentials

### 2. Add Environment Variables

Create/update `.env.local` file in your project root with:

\`\`\`env
# Public Cloud Name (visible on frontend, safe to expose)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Private API Credentials (never expose these publicly)
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
\`\`\`

### Where to Find These Values:
1. Log into Cloudinary Dashboard
2. Click on your profile (top right)
3. Select "Account Settings"
4. Go to the "API Keys" tab
5. Copy your Cloud Name, API Key, and API Secret
6. Paste them into `.env.local`

## How It Works

### Admin Panel Upload Flow:
1. Admin logs in with password
2. Selects a PDF file for resume or image for profile photo
3. File is sent to `/api/upload` route handler
4. Backend uploads to Cloudinary's servers
5. Cloudinary returns a secure URL
6. URL is saved in app state and used for downloading/displaying

### Resume Download:
- When users click "Resume" button, it downloads from Cloudinary URL
- No local file storage needed

### Profile Photo Display:
- Profile images are automatically optimized by Cloudinary
- Images are served via CDN for fast loading

## Cloudinary File Organization

Files are organized in Cloudinary:
\`\`\`
portfolio/
├── resume/
│   └── Vijay_Chalendra_Resume.pdf
└── profile/
    └── profile_[timestamp].jpg
\`\`\`

## Important Notes

⚠️ **Security:**
- Never commit `.env.local` to GitHub (it's in .gitignore)
- API keys in `.env.local` are only used server-side (API routes)
- Front-end only has access to `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

## Verification

After setup, test by:
1. Go to admin panel and login
2. Upload a test PDF and image
3. Check Cloudinary Dashboard → Media Library to verify uploads
4. Try downloading from portfolio

## Troubleshooting

**"Upload failed" error:**
- Verify env variables are correct
- Check Cloudinary dashboard for errors
- Ensure file sizes are within limits

**Files not appearing:**
- Check `.env.local` is in project root
- Restart development server after adding env vars
- Verify Cloudinary API credentials

**For More Help:**
- Cloudinary Docs: https://cloudinary.com/documentation
- Check console logs for detailed error messages
