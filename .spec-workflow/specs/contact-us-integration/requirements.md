# Contact Us Integration - Requirements

## Overview
Implement a comprehensive Contact Us feature for Wonder Capital website that allows users to submit inquiries through a dedicated contact form page, replacing the current mailto: links with a proper form submission system.

---

## Requirement 1: Contact Us Page

### Description
Create a new Contact Us page at `/[locale]/contact` with a professional form that matches the site's dark theme aesthetic.

### Form Fields
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| First Name | Text Input | Yes | Min 2 characters |
| Last Name | Text Input | Yes | Min 2 characters |
| Email Address | Email Input | Yes | Valid email format |
| Company Name | Text Input | No | Optional |
| Subject | Dropdown | Yes | Must select one |
| Message | Textarea | Yes | Min 10 characters |

### Subject Options
1. General Inquiry
2. Partnership Opportunity
3. Technical Support
4. Enterprise Solutions
5. Other

### Design Requirements
- Background: `#090a0e` (primary dark)
- Card/Form Background: `#191919`
- Accent Color: `#ffc522` (gold)
- Text: White and `#cccccc`
- Input Borders: `#2a2a2a` with hover to `#ffc522`
- Responsive: Mobile, tablet, and desktop layouts
- Scroll animations using Intersection Observer
- Match existing site typography and spacing

---

## Requirement 2: CTA Button Redirection

### Description
Update all existing CTA buttons throughout the site to redirect to the new contact page instead of using mailto: links.

### Affected Locations
1. **Home Page** (`/app/[locale]/page.tsx`)
   - Hero section "Get In Touch" button
   - Bottom CTA section button

2. **Merchant Acquiring** (`/app/components/merchant-acquiring/ready-to-start/index.tsx`)
   - "Talk to Our Team" / "Ready to Start" button

3. **Wonder Company Setup** (`/app/components/wonder-setup/ready-to-launch/index.tsx`)
   - "Contact Us" / "Ready to Launch" button

4. **Digital Payments** (`/app/components/digital-payments/ready-to-streamline/index.tsx`)
   - "Schedule Demo" / "Ready to Streamline" button

5. **Header** (`/app/layouts/header/header.tsx`)
   - "Get In Touch" navigation link

### Implementation
- Replace `mailto:contactus@wondercapital.group` with `<Link href="/contact">`
- Preserve locale routing (links will auto-prefix with current locale)

---

## Requirement 3: Form Submission Backend

### Description
Integrate with Web3Forms API for serverless form submission and email delivery.

### API Integration
- **Service**: Web3Forms (https://web3forms.com)
- **Endpoint**: `https://api.web3forms.com/submit`
- **Method**: POST
- **Content-Type**: application/json

### Request Payload
```json
{
  "access_key": "NEXT_PUBLIC_WEB3FORM_API",
  "from_name": "FirstName LastName",
  "email": "user@email.com",
  "company": "Company Name",
  "subject": "[WonderCapital] Subject Selected",
  "message": "User's message content",
  "to": "noreply@wondercapital.tech"
}
```

### Response Handling
- **Success**: Show success message with thank you note
- **Error**: Display error message with retry option
- **Loading**: Show "Sending..." state during submission

---

## Requirement 4: User Feedback States

### Success State
- Display green checkmark icon
- Show "Message Sent!" title
- Message: "Thank you for reaching out. We'll get back to you within 24-48 hours."
- Provide "Send Another Message" button to reset form

### Error State
- Display red alert icon
- Show error message: "Something went wrong. Please try again later."
- Form remains filled for retry

### Loading State
- Disable submit button
- Change button text to "Sending..."
- Prevent duplicate submissions

---

## Requirement 5: Environment Configuration

### Environment Variables
```
NEXT_PUBLIC_WEB3FORM_API=your_web3forms_api_key_here
```

### Files Required
- `.env` - Actual API key (git-ignored)
- `.env.example` - Template for developers

### Security Notes
- Using `NEXT_PUBLIC_` prefix makes the key accessible in browser
- Web3Forms keys are safe for client-side use (domain-restricted)
- Never commit actual API keys to repository

---

## Requirement 6: Internationalization (i18n)

### Description
Add translations for all contact page content in all supported languages.

### Supported Languages
- English (en)
- Chinese Simplified (zh)
- Japanese (ja)

### Translation Keys Required
```json
{
  "ContactPage": {
    "badge": "GET IN TOUCH",
    "title": "Contact Us",
    "description": "...",
    "form": {
      "firstName": "...",
      "firstNamePlaceholder": "...",
      "lastName": "...",
      "lastNamePlaceholder": "...",
      "email": "...",
      "emailPlaceholder": "...",
      "company": "...",
      "companyPlaceholder": "...",
      "subject": "...",
      "subjectPlaceholder": "...",
      "subjects": {
        "general": "...",
        "partnership": "...",
        "support": "...",
        "enterprise": "...",
        "other": "..."
      },
      "message": "...",
      "messagePlaceholder": "...",
      "submit": "...",
      "sending": "..."
    },
    "success": {
      "title": "...",
      "message": "...",
      "sendAnother": "..."
    },
    "error": {
      "message": "..."
    }
  }
}
```

---

## Acceptance Criteria

- [ ] Contact page renders correctly at `/[locale]/contact` for all locales
- [ ] All form fields display with proper labels and placeholders
- [ ] Form validation works for required fields
- [ ] Form submits successfully to Web3Forms API
- [ ] Success/error states display appropriately
- [ ] All CTA buttons redirect to contact page
- [ ] Translations work for EN, ZH, JA
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Build completes without errors (`npm run build`)
- [ ] No TypeScript errors
