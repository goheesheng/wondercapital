# Contact Us Integration - Technical Design

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client (Browser)                         │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐  │
│  │  Home Page  │    │  Service    │    │   Contact Page      │  │
│  │  CTA Button │───▶│  Pages CTA  │───▶│   /[locale]/contact │  │
│  └─────────────┘    └─────────────┘    └──────────┬──────────┘  │
│                                                    │             │
│                                         Form Submit│             │
│                                                    ▼             │
│                                        ┌───────────────────┐    │
│                                        │   Web3Forms API   │    │
│                                        │   (POST request)  │    │
│                                        └─────────┬─────────┘    │
└──────────────────────────────────────────────────┼──────────────┘
                                                   │
                                                   ▼
                                        ┌───────────────────┐
                                        │  Web3Forms Server │
                                        │  (Email Delivery) │
                                        └─────────┬─────────┘
                                                  │
                                                  ▼
                                        ┌───────────────────┐
                                        │ noreply@wonder... │
                                        │   (Inbox)         │
                                        └───────────────────┘
```

---

## Component Architecture

### Contact Page Component

**File:** `app/[locale]/contact/page.tsx`

```tsx
// Component Structure
"use client"

ContactPage
├── State Management
│   ├── formData: FormDataType
│   ├── isSubmitting: boolean
│   └── submitStatus: "idle" | "success" | "error"
│
├── Animation (Intersection Observer)
│   └── isVisible: boolean
│
├── Event Handlers
│   ├── handleInputChange()
│   ├── handleSubmit()
│   └── resetForm()
│
└── Render
    ├── Header Badge
    ├── Title & Description
    ├── Form (if status !== "success")
    │   ├── First Name Input
    │   ├── Last Name Input
    │   ├── Email Input
    │   ├── Company Input (optional)
    │   ├── Subject Dropdown
    │   ├── Message Textarea
    │   └── Submit Button
    │
    └── Success Message (if status === "success")
        ├── CheckCircle Icon
        ├── Thank You Message
        └── Send Another Button
```

### Form Data Type

```typescript
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
```

---

## API Integration Design

### Web3Forms Configuration

**Environment Variable:**
```
NEXT_PUBLIC_WEB3FORM_API=<api_key>
```

**Why NEXT_PUBLIC_ prefix?**
- Web3Forms is designed for client-side use
- API keys are domain-restricted (safe for browser)
- No server-side API route needed
- Simplifies implementation

### Request Structure

```typescript
const submitForm = async (formData: FormData) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORM_API,
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: formData.company,
      subject: `[WonderCapital] ${formData.subject}`,
      message: formData.message,
      to: "noreply@wondercapital.tech"
    })
  });

  const data = await response.json();
  return data.success;
};
```

### Response Handling

```typescript
// Success Response
{
  "success": true,
  "message": "Email sent successfully"
}

// Error Response
{
  "success": false,
  "message": "Error description"
}
```

---

## Styling Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary BG | `#090a0e` | Page background |
| Card BG | `#191919` | Form container |
| Accent | `#ffc522` | Buttons, highlights, focus |
| Text Primary | `#ffffff` | Headings, labels |
| Text Secondary | `#cccccc` | Descriptions, placeholders |
| Border Default | `#2a2a2a` | Input borders |
| Border Focus | `#ffc522` | Input focus state |
| Success | `#22c55e` | Success icon (green-500) |
| Error | `#ef4444` | Error state (red-500) |

### Typography

- **Badge:** text-sm, font-medium, tracking-widest
- **Title:** text-4xl md:text-5xl lg:text-6xl, font-bold
- **Description:** text-lg, text-gray-400
- **Labels:** text-sm, font-medium
- **Inputs:** text-base, placeholder text-gray-500

### Spacing

- **Container:** max-w-4xl mx-auto, py-20 px-4
- **Form Grid:** grid gap-6
- **Input Padding:** px-4 py-3
- **Section Gap:** space-y-8

### Animations

```css
/* Fade In Up Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply via Intersection Observer */
.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

---

## File Structure

```
app/
├── [locale]/
│   ├── contact/
│   │   └── page.tsx          # New contact page
│   ├── page.tsx              # Update CTA links
│   └── ...
├── components/
│   ├── merchant-acquiring/
│   │   └── ready-to-start/
│   │       └── index.tsx     # Update link
│   ├── wonder-setup/
│   │   └── ready-to-launch/
│   │       └── index.tsx     # Update link
│   └── digital-payments/
│       └── ready-to-streamline/
│           └── index.tsx     # Update link
└── layouts/
    └── header/
        └── header.tsx        # Update nav link

messages/
├── en.json                   # Add ContactPage namespace
├── zh.json                   # Add ContactPage namespace
└── ja.json                   # Add ContactPage namespace

.env                          # API key (git-ignored)
.env.example                  # Template for setup
```

---

## Form Validation Strategy

### Client-Side Validation

1. **HTML5 Native Validation**
   - `required` attribute
   - `type="email"` for email format
   - `minLength` for text fields

2. **Custom Validation (optional enhancement)**
   - Real-time validation on blur
   - Custom error messages via translations

### Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| First Name | Required, min 2 chars | "Please enter your first name" |
| Last Name | Required, min 2 chars | "Please enter your last name" |
| Email | Required, valid format | "Please enter a valid email" |
| Subject | Required, must select | "Please select a subject" |
| Message | Required, min 10 chars | "Please enter your message" |

---

## Responsive Design Breakpoints

### Mobile (< 640px)
- Single column form layout
- Full-width inputs
- Stacked labels

### Tablet (640px - 1024px)
- Two-column for name fields
- Full-width for other inputs

### Desktop (> 1024px)
- Two-column layout where applicable
- Max-width container (4xl = 896px)
- Comfortable spacing

### Grid Layout Example

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* First Name */}
  <div>...</div>

  {/* Last Name */}
  <div>...</div>
</div>

{/* Full-width fields */}
<div className="col-span-full">
  {/* Email, Company, Subject, Message */}
</div>
```

---

## i18n Integration

### Translation Hook Usage

```tsx
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <label>{t("form.firstName")}</label>
    <input placeholder={t("form.firstNamePlaceholder")} />
  );
}
```

### Subject Options Rendering

```tsx
const subjects = [
  { value: "general", label: t("form.subjects.general") },
  { value: "partnership", label: t("form.subjects.partnership") },
  { value: "support", label: t("form.subjects.support") },
  { value: "enterprise", label: t("form.subjects.enterprise") },
  { value: "other", label: t("form.subjects.other") },
];
```

---

## Security Considerations

1. **API Key Protection**
   - Web3Forms keys are domain-restricted
   - CORS protection on API endpoint
   - Rate limiting by Web3Forms

2. **Input Sanitization**
   - Web3Forms handles HTML escaping
   - No direct database operations

3. **Spam Prevention**
   - Web3Forms has built-in spam filtering
   - Consider adding honeypot field if needed

4. **No Sensitive Data**
   - No passwords or financial info collected
   - Basic contact information only

---

## Performance Considerations

1. **Client Component**
   - Uses "use client" directive
   - Minimal bundle impact

2. **Lazy Loading**
   - Intersection Observer for animations
   - No external dependencies beyond icons

3. **Form State**
   - Local React state only
   - No global state management needed

4. **API Call**
   - Single POST request on submit
   - Minimal payload size
