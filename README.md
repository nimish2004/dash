# ⚙️ React Admin Dashboard

A modern, responsive, and themeable Admin Dashboard built with **React**, **Tailwind CSS**, and **Vite**. Designed for flexibility, mobile responsiveness, and modular scalability.

---

## 🆕 Recent Updates (June 2025)
![Screenshot 2025-06-15 113145](https://github.com/user-attachments/assets/64f1e20b-1458-45e9-98f4-c10b026e34e5)

### ✨ UI Enhancements
- Redesigned **Sidebar** with:
  - Collapsible behavior
  - Active item highlighting
  - Material icons with smooth hover effects
- Added **Navbar Notifications Dropdown** with click-outside handling
- Smoothened appearance using Tailwind transitions (`transition-all`, `duration-300`, etc.)
- Refined icon styling and padding for a clean visual look

### 🌗 Theme Support
- Implemented **dark/light mode** toggle using Context API (`ThemeContext`)
- Full support across all components with `dark:` Tailwind classes

### 📱 Responsive Design
- Mobile-first layout adjustments
- Sidebar and navbar adapt elegantly to small screen sizes

### 🔧 Code Refactoring
- Modularized component structure:
  - `components/common/` for reusable UI parts
  - `components/sidebar/` for sidebar logic
- Replaced repetitive props with context where appropriate

---
```
## 📂 Folder Structure
src/
├── components/
│ ├── common/ # Reusable UI components (cards, toggles, icons)
│ ├── sidebar/ # Sidebar component and logic
│ └── navbar/ # Notification dropdown, user menu
├── context/
│ └── ThemeContext.jsx # Handles dark/light mode
├── pages/
│ └── Dashboard.jsx # Example page
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/nimish2004/dash/
cd dash
2. npm install
3. npm run dev
```


🛠 Built With
React
Tailwind CSS
Vite
Material Symbols
Context API

