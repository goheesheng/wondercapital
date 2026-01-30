# Task 3: Create Contact Us Page Component

## Status: Completed
## Date: 2026-01-30

## Summary
Created the main Contact Us page at `/app/[locale]/contact/page.tsx`.

## File Created
`/app/[locale]/contact/page.tsx` (352 lines)

## Features Implemented

### Form Fields
1. First Name (required, min 2 chars)
2. Last Name (required, min 2 chars)
3. Email Address (required, valid email)
4. Company Name (optional)
5. Subject (required, dropdown with 5 options)
6. Message (required, min 10 chars)

### State Management
- `formData` - Form field values
- `isSubmitting` - Loading state
- `submitStatus` - idle | success | error

### API Integration
- Endpoint: `https://api.web3forms.com/submit`
- Method: POST with JSON body
- Proper error handling

### UI States
1. **Default**: Form display with all fields
2. **Loading**: Submit button shows "Sending...", disabled
3. **Success**: Green checkmark, thank you message, "Send Another" button
4. **Error**: Red alert, error message, form remains filled

### Styling
- Background: `#090a0e`
- Card: `#191919` with `#2a2a2a` border
- Accent: `#ffc522` (gold)
- Responsive grid layout
- Scroll animations via Intersection Observer
- Icons from lucide-react

### Accessibility
- Proper label associations
- ARIA attributes
- Keyboard navigation support
- Focus states with gold border

## Technical Details
- Client component (`"use client"`)
- Uses `useTranslations` hook for i18n
- No external form library (native HTML5 validation)
- Responsive: mobile, tablet, desktop layouts
