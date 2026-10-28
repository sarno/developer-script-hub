<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Search, 
  Moon, 
  Sun, 
  Palette, 
  Menu, 
  Layers, 
  ExternalLink,
  Code2
} from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'
import { useHighlight } from '@/composables/useHighlight'
import ColorPaletteModal from './ColorPaletteModal.vue'
import GlobalSearchModal from './GlobalSearchModal.vue'

const emit = defineEmits<{
  (e: 'toggle-sidebar'): void
}>()

const router = useRouter()
const { isDark, toggleTheme } = useTheme()
const { currentHighlight } = useHighlight()
const isPaletteOpen = ref(false)
const isSearchOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b border-[var(--color-theme-border)] bg-[var(--color-theme-card)]/90 backdrop-blur-md transition-colors">
    <div class="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Left: Logo & Mobile Toggle -->
      <div class="flex items-center space-x-3">
        <button 
          @click="emit('toggle-sidebar')"
          class="lg:hidden p-2 rounded-xl text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
        >
          <Menu class="w-5 h-5" />
        </button>

        <router-link to="/" class="flex items-center space-x-2.5 group">
          <div class="w-9 h-9 rounded-xl bg-[var(--color-highlight-gradient)] flex items-center justify-center text-white shadow-md shadow-[var(--color-highlight)]/30 group-hover:scale-105 transition-transform">
            <Layers class="w-5 h-5" />
          </div>
          <div>
            <div class="flex items-center space-x-1.5">
              <span class="font-bold text-base text-[var(--color-theme-heading)] tracking-tight">AppKit</span>
              <span class="font-extrabold text-base text-[var(--color-highlight)] tracking-tight">UI</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-[var(--color-highlight-fade)] text-[var(--color-highlight)] font-semibold">
                v1.0
              </span>
            </div>
            <p class="text-[10px] text-[var(--color-theme-muted)] hidden sm:block">Component Workbench & Script Hub</p>
          </div>
        </router-link>
      </div>

      <!-- Center: Search Button (Cmd+K) -->
      <div class="flex-1 max-w-md mx-4 hidden md:block">
        <button 
          @click="isSearchOpen = true"
          class="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--color-theme-border)] text-xs text-[var(--color-theme-muted)] hover:border-[var(--color-highlight)] transition-colors cursor-pointer"
        >
          <div class="flex items-center space-x-2">
            <Search class="w-4 h-4 text-[var(--color-theme-muted)]" />
            <span>Cari komponen atau script...</span>
          </div>
          <kbd class="px-1.5 py-0.5 rounded-md bg-white dark:bg-black/40 text-[10px] font-mono font-semibold shadow-xs">
            ⌘K
          </kbd>
        </button>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center space-x-1 sm:space-x-2">
        <!-- Search icon for mobile -->
        <button 
          @click="isSearchOpen = true"
          class="md:hidden p-2 rounded-xl text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
        >
          <Search class="w-5 h-5" />
        </button>

        <!-- Highlight Color Palette Button -->
        <button 
          @click="isPaletteOpen = true"
          class="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border border-[var(--color-theme-border)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-xs"
          title="Ganti warna highlight tema"
        >
          <div class="w-3.5 h-3.5 rounded-full bg-[var(--color-highlight)] shadow-xs"></div>
          <span class="hidden sm:inline capitalize font-medium text-[var(--color-theme-heading)]">{{ currentHighlight }}</span>
        </button>

        <!-- Theme Toggle (Dark/Light) -->
        <button 
          @click="toggleTheme"
          class="p-2 rounded-xl text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          :title="isDark ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'"
        >
          <component :is="isDark ? Sun : Moon" class="w-5 h-5 text-amber-500" />
        </button>

        <!-- Mobile Demo App Link -->
        <a 
          href="http://localhost:3000" 
          target="_blank"
          class="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[var(--color-highlight-fade)] hover:text-[var(--color-highlight)] border border-[var(--color-theme-border)] text-xs font-semibold text-[var(--color-theme-heading)] transition-colors"
          title="Buka Aplikasi Web Mobile AppKit"
        >
          <span>Live Demo</span>
          <ExternalLink class="w-3.5 h-3.5" />
        </a>
      </div>
    </div>

    <!-- Modals -->
    <ColorPaletteModal v-model="isPaletteOpen" />
    <GlobalSearchModal v-model="isSearchOpen" />
  </header>
</template>
