<script setup lang="ts">
import type { ComponentPropMeta, ComponentEmitMeta, ComponentSlotMeta } from '@/types'

const {
  propsList = [],
  emitsList = [],
  slotsList = []
} = defineProps<{
  propsList?: ComponentPropMeta[]
  emitsList?: ComponentEmitMeta[]
  slotsList?: ComponentSlotMeta[]
}>()
</script>

<template>
  <div class="space-y-6 my-6">
    <!-- Props Table -->
    <div v-if="propsList.length > 0" class="overflow-hidden rounded-2xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] shadow-xs">
      <div class="px-5 py-3 border-b border-[var(--color-theme-border)] bg-black/2 dark:bg-white/2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--color-theme-heading)]">Props</h4>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[var(--color-theme-border)] text-[var(--color-theme-muted)] bg-black/1 dark:bg-white/1">
              <th class="py-2.5 px-4 font-semibold">Prop</th>
              <th class="py-2.5 px-4 font-semibold">Type</th>
              <th class="py-2.5 px-4 font-semibold">Default</th>
              <th class="py-2.5 px-4 font-semibold">Deskripsi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--color-theme-border)]">
            <tr v-for="prop in propsList" :key="prop.name" class="hover:bg-black/2 dark:hover:bg-white/2 transition-colors">
              <td class="py-3 px-4 font-mono font-bold text-[var(--color-highlight)]">
                {{ prop.name }}
                <span v-if="prop.required" class="text-red-500 font-bold ml-1">*</span>
              </td>
              <td class="py-3 px-4 font-mono text-gray-500 dark:text-gray-400">
                <code class="px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[11px]">{{ prop.type }}</code>
              </td>
              <td class="py-3 px-4 font-mono text-gray-500 dark:text-gray-400">
                {{ prop.default || '-' }}
              </td>
              <td class="py-3 px-4 text-[var(--color-theme-text)]">
                {{ prop.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Emits Table -->
    <div v-if="emitsList.length > 0" class="overflow-hidden rounded-2xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] shadow-xs">
      <div class="px-5 py-3 border-b border-[var(--color-theme-border)] bg-black/2 dark:bg-white/2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--color-theme-heading)]">Emits / Events</h4>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[var(--color-theme-border)] text-[var(--color-theme-muted)] bg-black/1 dark:bg-white/1">
              <th class="py-2.5 px-4 font-semibold">Event</th>
              <th class="py-2.5 px-4 font-semibold">Payload Type</th>
              <th class="py-2.5 px-4 font-semibold">Deskripsi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--color-theme-border)]">
            <tr v-for="emit in emitsList" :key="emit.name" class="hover:bg-black/2 dark:hover:bg-white/2 transition-colors">
              <td class="py-3 px-4 font-mono font-bold text-[var(--color-highlight)]">
                @{{ emit.name }}
              </td>
              <td class="py-3 px-4 font-mono text-gray-500 dark:text-gray-400">
                <code class="px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[11px]">{{ emit.payload || 'void' }}</code>
              </td>
              <td class="py-3 px-4 text-[var(--color-theme-text)]">
                {{ emit.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Slots Table -->
    <div v-if="slotsList.length > 0" class="overflow-hidden rounded-2xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] shadow-xs">
      <div class="px-5 py-3 border-b border-[var(--color-theme-border)] bg-black/2 dark:bg-white/2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--color-theme-heading)]">Slots</h4>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[var(--color-theme-border)] text-[var(--color-theme-muted)] bg-black/1 dark:bg-white/1">
              <th class="py-2.5 px-4 font-semibold">Slot Name</th>
              <th class="py-2.5 px-4 font-semibold">Scope Props</th>
              <th class="py-2.5 px-4 font-semibold">Deskripsi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--color-theme-border)]">
            <tr v-for="slot in slotsList" :key="slot.name" class="hover:bg-black/2 dark:hover:bg-white/2 transition-colors">
              <td class="py-3 px-4 font-mono font-bold text-[var(--color-highlight)]">
                #{{ slot.name }}
              </td>
              <td class="py-3 px-4 font-mono text-gray-500 dark:text-gray-400">
                <code class="px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[11px]">{{ slot.scope || '-' }}</code>
              </td>
              <td class="py-3 px-4 text-[var(--color-theme-text)]">
                {{ slot.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
