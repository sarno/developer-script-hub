<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import { useHighlight } from '@/composables/useHighlight'
import { Check, Palette, Smartphone, Sparkles, Moon, Sun } from 'lucide-vue-next'
import type { HighlightColor } from '@/types'
import AppButton from '@/components/ui/AppButton.vue'

const { currentHighlight, setHighlight } = useHighlight()

const colorList: { id: HighlightColor; name: string; hex: string; desc: string }[] = [
  { id: 'blue', name: 'Blue Sky', hex: '#4A89DC', desc: 'Default highlight tema AppKit' },
  { id: 'red', name: 'Crimson Red', hex: '#DA4453', desc: 'Energetik & tegas untuk peringatan atau e-commerce' },
  { id: 'green', name: 'Leaf Green', hex: '#8CC152', desc: 'Nuansa alam, segar & natural' },
  { id: 'grass', name: 'Emerald Grass', hex: '#2ABA66', desc: 'Fintech, saldo sukses & konfirmasi' },
  { id: 'orange', name: 'Sunset Orange', hex: '#E9573F', desc: 'Hangat, dinamis & menarik perhatian' },
  { id: 'yellow', name: 'Warm Yellow', hex: '#F6BB42', desc: 'Ceria & ramah' },
  { id: 'sunny', name: 'Sunny Gold', hex: '#d99914', desc: 'Mewah, gold & premium membership' },
  { id: 'teal', name: 'Vintage Teal', hex: '#7DB1B1', desc: 'Modern & tenang' },
  { id: 'mint', name: 'Fresh Mint', hex: '#37BC9B', desc: 'Kesehatan, kebugaran & kesegaran' },
  { id: 'pink', name: 'Berry Pink', hex: '#E8CE4D', desc: 'Elegan & playful' },
  { id: 'pink2', name: 'Rose Petal', hex: '#EC87C0', desc: 'Lembut & estetik' },
  { id: 'magenta', name: 'Neon Magenta', hex: '#BA68C8', desc: 'Kreatif & bold' },
  { id: 'brown', name: 'Warm Mocha', hex: '#AA8E69', desc: 'Klasik, kopi & retro' },
  { id: 'gray', name: 'Slate Gray', hex: '#656D78', desc: 'Netral & korporat' },
  { id: 'aqua', name: 'Cyber Aqua', hex: '#4FC1E9', desc: 'Teknologi & futuristik' },
  { id: 'night', name: 'Deep Midnight', hex: '#3b3f4a', desc: 'Minimalis & modern dark' }
]

const tokensCssSnippet = `/* tokens.css - AppKit Mobile CSS Custom Properties */
:root {
  /* Default Highlight (Blue) */
  --highlight-name: "blue";
  --color-highlight: #4A89DC;
  --color-highlight-light: #5D9CEC;
  --color-highlight-fade: rgba(74, 137, 220, 0.15);
  --color-highlight-gradient: linear-gradient(180deg, #5D9CEC 0%, #4A89DC 100%);

  /* Safe Area Variables */
  --sat: env(safe-area-inset-top, 0px);
  --sab: env(safe-area-inset-bottom, 0px);
  --sal: env(safe-area-inset-left, 0px);
  --sar: env(safe-area-inset-right, 0px);

  /* Layout Heights */
  --header-height: calc(50px + (var(--sat) * 0.8));
  --footer-height: calc(65px + (var(--sab) * 1.1));

  /* Light Theme Semantic Tokens */
  --color-theme-bg: #eef2f1;
  --color-theme-card: #ffffff;
  --color-theme-text: #666666;
  --color-theme-muted: #9e9e9e;
  --color-theme-heading: #1f1f1f;
  --color-theme-border: rgba(0, 0, 0, 0.07);
  --color-theme-glass: rgba(255, 255, 255, 0.85);
}

/* Dark Theme Tokens */
.dark,
[data-theme="dark"] {
  --color-theme-bg: #0f1117;
  --color-theme-card: #21252a;
  --color-theme-text: #898989;
  --color-theme-muted: #5e646e;
  --color-theme-heading: #ffffff;
  --color-theme-border: rgba(255, 255, 255, 0.08);
  --color-theme-glass: rgba(23, 26, 31, 0.85);
}`

const tailwindThemeSnippet = `/* main.css - Tailwind CSS v4 Theme Integration */
@import "tailwindcss";
@import "./tokens.css";

@theme {
  --color-highlight: var(--color-highlight);
  --color-highlight-light: var(--color-highlight-light);
  --color-highlight-fade: var(--color-highlight-fade);
  --color-highlight-gradient: var(--color-highlight-gradient);

  --color-app-bg: var(--color-theme-bg);
  --color-app-card: var(--color-theme-card);
  --color-app-text: var(--color-theme-text);
  --color-app-muted: var(--color-theme-muted);
  --color-app-heading: var(--color-theme-heading);
  --color-app-border: var(--color-theme-border);
  --color-app-glass: var(--color-theme-glass);

  --radius-card: 20px;
  --radius-sheet: 24px;
}`
</script>

<template>
  <ComponentDoc
    title="Design Tokens & Theming Engine"
    description="Sistem token desain AppKit Mobile: 16 variasi highlight color, skema Light/Dark mode semantik, kalkulasi safe-area insets mobile, dan integrasi Tailwind CSS v4."
    category="Foundation"
    badge="16 Colors"
  >
    <!-- Interactive Highlight Color Picker -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)] flex items-center space-x-2">
        <Palette class="w-5 h-5 text-[var(--color-highlight)]" />
        <span>Uji Coba 16 Warna Highlight Interaktif</span>
      </h2>
      <p class="text-xs text-[var(--color-theme-muted)]">
        Klik warna di bawah ini untuk melihat seluruh komponen AppKit langsung berganti tema warna secara instan.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        <button
          v-for="color in colorList"
          :key="color.id"
          @click="setHighlight(color.id)"
          class="flex items-center space-x-3 p-3 rounded-2xl border text-left transition-all cursor-pointer hover:shadow-md"
          :class="currentHighlight === color.id ? 'border-[var(--color-highlight)] bg-[var(--color-highlight-fade)] ring-2 ring-[var(--color-highlight)]/30' : 'border-[var(--color-theme-border)] bg-[var(--color-theme-card)] hover:border-gray-400'"
        >
          <div 
            class="w-8 h-8 rounded-full shadow-xs flex items-center justify-center text-white shrink-0"
            :style="{ backgroundColor: color.hex }"
          >
            <Check v-if="currentHighlight === color.id" class="w-4 h-4 drop-shadow-xs" />
          </div>
          <div class="truncate">
            <div class="text-xs font-bold text-[var(--color-theme-heading)] truncate">{{ color.name }}</div>
            <div class="text-[10px] text-[var(--color-theme-muted)] font-mono">{{ color.hex }}</div>
          </div>
        </button>
      </div>
    </section>

    <!-- Live Preview of Active Tokens -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)] flex items-center space-x-2">
        <Sparkles class="w-5 h-5 text-[var(--color-highlight)]" />
        <span>Contoh Pengaruh Warna pada Primitive UI</span>
      </h2>
      
      <div class="p-6 rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] shadow-xs flex flex-wrap gap-4 items-center">
        <AppButton variant="highlight">Tombol Highlight</AppButton>
        <AppButton variant="outline">Tombol Outline</AppButton>
        <div class="px-3 py-1.5 rounded-full bg-[var(--color-highlight-fade)] text-[var(--color-highlight)] text-xs font-bold">
          Badge Status
        </div>
        <div class="text-xs font-semibold text-[var(--color-highlight)] hover:underline cursor-pointer">
          Tautan Link Interaktif
        </div>
      </div>
    </section>

    <!-- Code Snippets for Tokens -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Kode CSS Tokens (tokens.css)</h2>
      <CodeSnippet :code="tokensCssSnippet" lang="css" title="tokens.css" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Konfigurasi Tailwind v4 (@theme)</h2>
      <CodeSnippet :code="tailwindThemeSnippet" lang="css" title="main.css" />
    </section>
  </ComponentDoc>
</template>
