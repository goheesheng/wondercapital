# Contact Us Integration - Implementation Tasks

## Task Overview

| Task | Description | Status | Priority |
|------|-------------|--------|----------|
| Task 1 | Add ContactPage translations to locale files | ✅ Completed | High |
| Task 2 | Create environment configuration | ✅ Completed | High |
| Task 3 | Create Contact Us page component | ✅ Completed | High |
| Task 4 | Update Home page CTA buttons | ✅ Completed | Medium |
| Task 5 | Update Merchant Acquiring CTA button | ✅ Completed | Medium |
| Task 6 | Update Wonder Setup CTA button | ✅ Completed | Medium |
| Task 7 | Update Digital Payments CTA button | ✅ Completed | Medium |
| Task 8 | Update Header navigation link | ✅ Completed | Medium |
| Task 9 | Test and verify integration | ✅ Completed | High |

---

## Task 1: Add ContactPage Translations

### Description
Add the ContactPage namespace with all required translations to each locale file.

### Files to Modify
- `/messages/en.json`
- `/messages/zh.json`
- `/messages/ja.json`

### Translation Structure
```json
{
  "ContactPage": {
    "badge": "GET IN TOUCH",
    "title": "Contact Us",
    "description": "Have questions or want to learn more? Fill out the form below and our team will get back to you shortly.",
    "form": {
      "firstName": "First Name",
      "firstNamePlaceholder": "John",
      "lastName": "Last Name",
      "lastNamePlaceholder": "Doe",
      "email": "Email Address",
      "emailPlaceholder": "john@company.com",
      "company": "Company Name",
      "companyPlaceholder": "Your Company",
      "subject": "Subject",
      "subjectPlaceholder": "Select a subject",
      "subjects": {
        "general": "General Inquiry",
        "partnership": "Partnership Opportunity",
        "support": "Technical Support",
        "enterprise": "Enterprise Solutions",
        "other": "Other"
      },
      "message": "Message",
      "messagePlaceholder": "Tell us how we can help you...",
      "submit": "Send Message",
      "sending": "Sending..."
    },
    "success": {
      "title": "Message Sent!",
      "message": "Thank you for reaching out. We'll get back to you within 24-48 hours.",
      "sendAnother": "Send Another Message"
    },
    "error": {
      "message": "Something went wrong. Please try again later."
    }
  }
}
```

### Acceptance Criteria
- [ ] English translations added to en.json
- [ ] Chinese translations added to zh.json
- [ ] Japanese translations added to ja.json
- [ ] All keys match the expected structure

---

## Task 2: Create Environment Configuration

### Description
Create environment configuration files for Web3Forms API integration.

### Files to Create
1. `.env.example` - Template file (committed to repo)
2. `.env` - Actual configuration (git-ignored)

### Content for .env.example
```
# Web3Forms API Configuration
# Get your API key from https://web3forms.com
NEXT_PUBLIC_WEB3FORM_API=your_web3forms_api_key_here
```

### Content for .env
```
NEXT_PUBLIC_WEB3FORM_API=<actual_api_key>
```

### Acceptance Criteria
- [ ] .env.example created with placeholder
- [ ] .env created with actual API key
- [ ] .gitignore includes .env (verify)

---

## Task 3: Create Contact Us Page Component

### Description
Create the main Contact Us page at `/app/[locale]/contact/page.tsx`.

### File to Create
`/app/[locale]/contact/page.tsx`

### Key Features
- "use client" directive for interactivity
- Form with all required fields
- Web3Forms API integration
- Success/error state handling
- Loading state during submission
- Intersection Observer for animations
- Responsive design (mobile-first)
- i18n integration with useTranslations

### Component Structure
```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { User, Mail, Building2, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  // State management
  // Form handling
  // API submission
  // Render form/success
}
```

### Acceptance Criteria
- [ ] Page renders at /[locale]/contact
- [ ] All form fields display correctly
- [ ] Form validation works
- [ ] API submission works
- [ ] Success state displays after submission
- [ ] Error state displays on failure
- [ ] Responsive on all screen sizes
- [ ] Animations work correctly

---

## Task 4: Update Home Page CTA Buttons

### Description
Update the Home page CTA buttons to link to the contact page.

### File to Modify
`/app/[locale]/page.tsx`

### Changes Required
1. Import Link from next/link (if not already imported)
2. Find hero section CTA button - change mailto: to /contact
3. Find bottom CTA section button - change mailto: to /contact

### Before
```tsx
<a href="mailto:contactus@wondercapital.group">
  {buttonText}
</a>
```

### After
```tsx
<Link href="/contact">
  {buttonText}
</Link>
```

### Acceptance Criteria
- [ ] Hero section button links to /contact
- [ ] Bottom CTA button links to /contact
- [ ] No mailto: links remain in CTA sections

---

## Task 5: Update Merchant Acquiring CTA Button

### Description
Update the Ready to Start component's CTA button.

### File to Modify
`/app/components/merchant-acquiring/ready-to-start/index.tsx`

### Changes Required
- Import Link from next/link
- Replace mailto: href with /contact

### Acceptance Criteria
- [ ] Button links to /contact
- [ ] Styling preserved
- [ ] Icon/arrow preserved

---

## Task 6: Update Wonder Setup CTA Button

### Description
Update the Ready to Launch component's CTA button.

### File to Modify
`/app/components/wonder-setup/ready-to-launch/index.tsx`

### Changes Required
- Import Link from next/link
- Replace mailto: href with /contact

### Acceptance Criteria
- [ ] Button links to /contact
- [ ] Styling preserved
- [ ] Icon/arrow preserved

---

## Task 7: Update Digital Payments CTA Button

### Description
Update the Ready to Streamline component's CTA button.

### File to Modify
`/app/components/digital-payments/ready-to-streamline/index.tsx`

### Changes Required
- Import Link from next/link
- Replace mailto: href with /contact

### Acceptance Criteria
- [ ] Button links to /contact
- [ ] Styling preserved
- [ ] Icon/arrow preserved

---

## Task 8: Update Header Navigation Link

### Description
Update the header "Get In Touch" or "Contact" link in navigation.

### File to Modify
`/app/layouts/header/header.tsx`

### Changes Required
- Find the contact/get in touch link in navigation
- Replace mailto: with Link to /contact
- Update both desktop and mobile navigation

### Acceptance Criteria
- [ ] Desktop nav contact link goes to /contact
- [ ] Mobile nav contact link goes to /contact
- [ ] No mailto: links in header

---

## Task 9: Test and Verify Integration

### Description
Comprehensive testing of the entire contact form integration.

### Test Checklist

**Build Verification**
- [ ] `npm run build` completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings

**Page Rendering**
- [ ] /en/contact renders correctly
- [ ] /zh/contact renders correctly
- [ ] /ja/contact renders correctly

**Form Functionality**
- [ ] All form fields accept input
- [ ] Required field validation works
- [ ] Email format validation works
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] "Send Another Message" resets form

**Navigation**
- [ ] Home page hero CTA → /contact
- [ ] Home page bottom CTA → /contact
- [ ] Merchant Acquiring CTA → /contact
- [ ] Wonder Setup CTA → /contact
- [ ] Digital Payments CTA → /contact
- [ ] Header navigation → /contact

**Responsive Design**
- [ ] Mobile layout works
- [ ] Tablet layout works
- [ ] Desktop layout works

**Internationalization**
- [ ] Language switch preserves contact page
- [ ] All labels translate correctly
- [ ] Placeholders translate correctly
- [ ] Success/error messages translate

### Acceptance Criteria
- [ ] All tests pass
- [ ] Build succeeds
- [ ] No console errors in browser

---

## Implementation Order

```
1. Task 1 (Translations) ─┐
2. Task 2 (Env Config)   ─┼─► Task 3 (Contact Page) ─► Task 9 (Testing)
                         │
3. Task 4 (Home CTA)     ─┤
4. Task 5 (Merchant CTA) ─┤
5. Task 6 (Setup CTA)    ─┤
6. Task 7 (Payments CTA) ─┤
7. Task 8 (Header Link)  ─┘
```

Tasks 1-2 are prerequisites for Task 3.
Tasks 4-8 can be done in parallel.
Task 9 requires all others to be complete.
