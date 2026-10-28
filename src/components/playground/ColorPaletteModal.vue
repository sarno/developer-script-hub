<script setup lang="ts">
import { X, Check } from 'lucide-vue-next'
import { useHighlight } from '@/composables/useHighlight'
import type { HighlightColor } from '@/types'

const isOpen = defineModel<boolean>({ default: false })
const { currentHighlight, setHighlight } = useHighlight()

const paletteList: { id: HighlightColor; name: string; hex: string }[] = [
  { id: 'blue', name: 'Blue Sky', hex: '#4A89DC' },
  { id: 'red', name: 'Crimson Red', hex: '#DA4453' },
  { id: 'green', name: 'Leaf Green', hex: '#8CC152' },
  { id: 'grass', name: 'Emerald Grass', hex: '#2ABA66' },
  { id: 'orange', name: 'Sunset Orange', hex: '#E9573F' },
  { id: 'yellow', name: 'Warm Yellow', hex: '#F6BB42' },
  { id: 'sunny', name: 'Sunny Gold', hex: '#d99914' },
  { id: 'teal', name: 'Vintage Teal', hex: '#7DB1B1' },
  { id: 'mint', name: 'Fresh Mint', hex: '#37BC9B' },
  { id: 'pink', name: 'Berry Pink', hex: '#E8CE4D' },
  { id: 'pink2', name: 'Rose Petal', hex: '#EC87C0' },
  { id: 'magenta', name: 'Neon Magenta', hex: '#BA68C8' },
  { id: 'brown', name: 'Warm Mocha', hex: '#AA8E69' },
  { id: 'gray', name: 'Slate Gray', hex: '#656D78' },
  { id: 'aqua', name: 'Cyber Aqua', hex: '#4FC1E9' },
  { id: 'night', name: 'Deep Midnight', hex: '#3b3f4a' },
  { id: 'dark', name: 'Pitch Black', hex: '#1c1d22' }
]

function chooseColor(color: HighlightColor) {
  setHighlight(color)
  isOpen.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        @click.self="isOpen = false"
      >
        <div class="w-full max-w-md rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-150">
          <div class="flex items-center justify-between pb-4 border-b border-[var(--color-theme-border)]">
            <div>
              <h3 class="text-base font-bold text-[var(--color-theme-heading)]">AppKit Theme Colors</h3>
              <p class="text-xs text-[var(--color-theme-muted)]">Pilih warna highlight aksen untuk komponen</p>
            </div>
            <button 
              @click="isOpen = false"
              class="p-1 rounded-xl text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)] cursor-pointer"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Color Grid -->
          <div class="grid grid-cols-4 gap-3 py-6 max-h-72 overflow-y-auto">
            <button
              v-for="color in paletteList"
              :key="color.id"
              @click="chooseColor(color.id)"
              class="flex flex-col items-center p-2 rounded-2xl border transition-all cursor-pointer hover:scale-105 active:scale-95"
              :class="currentHighlight === color.id ? 'border-[var(--color-highlight)] bg-[var(--color-highlight-fade)] font-bold' : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'"
            >
              <div 
                class="w-10 h-10 rounded-full shadow-md flex items-center justify-center text-white mb-1.5 transition-transform"
                :style="{ backgroundColor: color.hex }"
              >
                <Check v-if="currentHighlight === color.id" class="w-5 h-5 drop-shadow-sm" />
              </div>
              <span class="text-[11px] text-[var(--color-theme-heading)] truncate text-center w-full">
                {{ color.name }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
