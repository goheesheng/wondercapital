# Tasks 4-8: Update CTA Buttons

## Status: Completed
## Date: 2026-01-30

## Summary
Updated all CTA buttons across the site to link to `/contact` instead of `mailto:` links.

---

## Task 4: Home Page CTA Buttons

### File Modified
`/app/[locale]/page.tsx`

### Changes
1. **Hero Section CTA** (line ~178)
   - Changed: `href="mailto:contactus@wondercapital.group"`
   - To: `href="/contact"`

2. **Bottom CTA Section** (line ~545)
   - Changed: `href="mailto:contactus@wondercapital.group"`
   - To: `href="/contact"`

---

## Task 5: Merchant Acquiring CTA Button

### File Modified
`/app/components/merchant-acquiring/ready-to-start/index.tsx`

### Changes
- Line 30: Changed mailto link to `/contact`

---

## Task 6: Wonder Setup CTA Button

### File Modified
`/app/components/wonder-setup/ready-to-launch/index.tsx`

### Changes
- Line 31: Changed mailto link to `/contact`

---

## Task 7: Digital Payments CTA Button

### File Modified
`/app/components/digital-payments/ready-to-streamline/index.tsx`

### Changes
- Line 29: Changed mailto link to `/contact`

---

## Task 8: Header Navigation Links

### File Modified
`/app/layouts/header/header.tsx`

### Changes
1. **Desktop Navigation** (line ~276)
   - Changed: `href="#contact"`
   - To: `href="/contact"`

2. **Mobile Navigation** (line ~428)
   - Changed: `href="#contact"`
   - To: `href="/contact"`

---

## Verification
- All mailto: links have been replaced
- All #contact anchor links have been replaced
- Link component from next/link is used (already imported)
- Locale routing preserved (Next.js auto-prefixes)
