<script setup lang="ts">
import { Sparkles, Terminal, BookOpen, Layers } from 'lucide-vue-next'

const {
  title = '',
  description = '',
  category = 'UI Primitive',
  badge = 'Vue 3.5'
} = defineProps<{
  title: string
  description: string
  category?: string
  badge?: string
}>()
</script>

<template>
  <div class="space-y-8 pb-16">
    <!-- Header Section -->
    <header class="border-b border-[var(--color-theme-border)] pb-6">
      <div class="flex items-center space-x-2 text-xs font-semibold text-[var(--color-highlight)] uppercase tracking-wider mb-2">
        <Layers class="w-3.5 h-3.5" />
        <span>{{ category }}</span>
        <span>•</span>
        <span class="px-2 py-0.5 rounded-full bg-[var(--color-highlight-fade)] text-[var(--color-highlight)] text-[10px] lowercase font-mono">
          {{ badge }}
        </span>
      </div>

      <h1 class="text-3xl font-extrabold text-[var(--color-theme-heading)] tracking-tight sm:text-4xl">
        {{ title }}
      </h1>

      <p class="mt-3 text-base text-[var(--color-theme-text)] leading-relaxed max-w-3xl">
        {{ description }}
      </p>
    </header>

    <!-- Content Sections -->
    <slot></slot>
  </div>
</template>
