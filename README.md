# 🛠️ AppKit UI — Developer Component Workbench & Script Hub

<p align="center">
  <img src="./public/favicon.svg" width="64" height="64" alt="AppKit UI Logo" />
</p>

<p align="center">
  <strong>Interactive Component Workbench, Multi-Device Playground & 1-Click Script Hub for Vue 3.5 + Tailwind CSS v4</strong>
</p>

<p align="center">
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue-3.5.13-4FC08D?style=flat-square&logo=vue.js&logoColor=white" alt="Vue 3.5" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://bun.sh/"><img src="https://img.shields.io/badge/Bun-1.3-FBF0DF?style=flat-square&logo=bun&logoColor=black" alt="Bun" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="MIT License" /></a>
</p>

---

## 🌟 Overview

**AppKit UI** is a dedicated developer workbench and documentation portal inspired by Storybook and shadcn/ui, crafted specifically for mobile web primitives.

It allows frontend developers and engineers to:
1. **Browse 22+ Production-Ready Mobile Components** organized into 6 intuitive categories.
2. **Interactive Multi-Device Canvas:** Test responsive behaviors across **Desktop (Fluid)**, **Tablet (768px)**, and **Mobile Phone (390px)** viewports with simulated iPhone bezels.
3. **1-Click "Ambil Script":** Instantly copy ready-to-use `<template>` and `<script setup lang="ts">` snippets directly into your clipboard with haptic feedback and toast confirmation.
4. **16-Color Dynamic Highlight Engine:** Switch between 16 accent color schemes (*Blue Sky, Crimson Red, Emerald Grass, Warm Yellow, Fresh Mint, etc.*) and test Light/Dark themes live.
5. **Detailed API Reference:** Comprehensive tables covering Props (with types and defaults), Emits, and Slots for each primitive.
6. **Global Keyboard Search (`⌘K`):** Instantly jump to any component or hook in a single keystroke.

---

## 📦 Component Taxonomy

| Category | Primitives |
| :--- | :--- |
| **🔘 UI Primitives** | `AppButton`, `AppDivider`, `SearchBar`, `StarRating` |
| **📝 Form Controls** | `AppInput`, `AppSelect`, `AppSwitch`, `AppStepper`, `AppOtpInput`, `AppFileUpload` |
| **🗂️ Cards & Containers** | `AppCard`, `ImageCard` |
| **📱 Mobile Shell & Overlays** | `AppShell`, `AppHeader`, `AppFooterBar`, `PageTitle`, `AppDrawer`, `ActionSheet`, `ActionModal` |
| **🧭 Navigation & Lists** | `AppAccordion`, `AppTabs`, `ListGroup`, `ListItem` |
| **🔔 Feedback & Status** | `AppBadge`, `AppToast`, `AppSnackbar`, `SkeletonLoader`, `OfflineDetector` |
| **⚡ Reactive Composables** | `useToast`, `useHaptic`, `useTheme`, `useHighlight`, `useScrollHeader`, `useOffline`, `usePwa`, `useCopyCode` |

---

## 🚀 Quick Start

### 1. Clone & Run Locally
```bash
# Clone repository
git clone <your-repo-url>
cd Appkit-mobile

# Install dependencies via Bun
bun install

# Run AppKit UI Developer Workbench (Port 3001)
bun run dev:ui
```

Open your browser at **`http://localhost:3001`**.

---

## 📋 Copy & Paste Usage Example

In your Vue 3 project, simply paste the component script copied from AppKit UI:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppOtpInput from '@/components/form/AppOtpInput.vue'
import ActionSheet from '@/components/shell/ActionSheet.vue'
import { Sparkles } from 'lucide-vue-next'

const otpCode = ref('')
const isSheetOpen = ref(false)

function onVerify(code: string) {
  console.log('OTP Code Verified:', code)
}
</script>

<template>
  <div class="p-4 space-y-4">
    <!-- Highlight Gradient Button -->
    <AppButton variant="highlight" size="md" @click="isSheetOpen = true">
      <Sparkles class="w-4 h-4 mr-2" />
      <span>Buka Opsi Transaksi</span>
    </AppButton>

    <!-- 6-Digit Auto-Focusing OTP Input -->
    <AppOtpInput v-model="otpCode" :length="6" @complete="onVerify" />

    <!-- Mobile Bottom Action Sheet -->
    <ActionSheet v-model="isSheetOpen" title="Pilihan Pembayaran" subtitle="QRIS & Transfer">
      <p class="text-xs text-gray-500">Pilih metode pembayaran yang Anda inginkan.</p>
    </ActionSheet>
  </div>
</template>
```

---

## 🛠️ Tech Stack & Architecture Standards

- **Vue 3.5.13:** Built strictly with `<script setup lang="ts">`, `defineModel()`, Reactive Props Destructure, and `useTemplateRef()`.
- **Tailwind CSS v4:** Zero-config Vite plugin `@tailwindcss/vite` paired with CSS Variables `@theme` mapping.
- **Pinia 3.x:** Reactive state management for UI shells, drawers, and global modals.
- **Lucide Icons:** Modern, consistent iconography via `lucide-vue-next`.
- **Web Vibration API:** Integrated haptic tactile feedback on touch devices.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](../../LICENSE) for more details.
