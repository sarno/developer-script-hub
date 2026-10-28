<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppTabs from '@/components/navigation/AppTabs.vue'
import { Sparkles, Compass, Star, Bell } from 'lucide-vue-next'
import type { TabItem } from '@/types'

const activePillTab = ref('overview')
const activeLineTab = ref('tab-1')

const sampleTabs: TabItem[] = [
  { id: 'overview', label: 'Ringkasan', icon: Sparkles },
  { id: 'features', label: 'Fitur', icon: Compass, badge: 'Baru' },
  { id: 'reviews', label: 'Ulasan', icon: Star, badge: '4.9' }
]

const tabsSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import AppTabs from '@/components/navigation/AppTabs.vue'
import { Sparkles, Compass, Star } from 'lucide-vue-next'
import type { TabItem } from '@/types'

const activeTab = ref('overview')

const tabs: TabItem[] = [
  { id: 'overview', label: 'Ringkasan', icon: Sparkles },
  { id: 'features', label: 'Fitur', icon: Compass, badge: '5' },
  { id: 'reviews', label: 'Ulasan', icon: Star }
]
<\/script>

<template>
  <!-- Varian Pill Segmented -->
  <AppTabs v-model="activeTab" :tabs="tabs" variant="pill" />

  <!-- Varian Underline Minimalist -->
  <AppTabs v-model="activeTab" :tabs="tabs" variant="underline" />
</template>`

const propsMeta = [
  { name: 'v-model (activeTab)', type: 'string | number', required: true, description: 'ID tab aktif saat ini' },
  { name: 'tabs', type: 'TabItem[]', required: true, description: 'Daftar tab navigasi ({ id, label, icon?, badge? })' },
  { name: 'variant', type: "'pill' | 'underline'", default: "'pill'", description: 'Gaya visual tab: pill tersegmentasi atau garis bawah underline' }
]
</script>

<template>
  <ComponentDoc
    title="AppTabs"
    description="Tab navigasi segmented mobile dengan haptic feedback saat berpindah, variasi pill dan underline minimalis, icon leading, serta badge counter."
    category="Navigation & List"
    badge="Mobile Tabs"
  >
    <ComponentPreview title="Interactive Tabs Preview" :code-snippet="tabsSnippet">
      <div class="w-full max-w-md mx-auto space-y-6">
        <!-- Pill Variant -->
        <div class="space-y-2">
          <span class="text-xs font-bold text-[var(--color-theme-muted)] uppercase tracking-wider px-4">
            Varian Pill Segmented:
          </span>
          <AppTabs v-model="activePillTab" :tabs="sampleTabs" variant="pill" />
        </div>

        <!-- Underline Variant -->
        <div class="space-y-2">
          <span class="text-xs font-bold text-[var(--color-theme-muted)] uppercase tracking-wider px-4">
            Varian Underline Minimal:
          </span>
          <AppTabs v-model="activePillTab" :tabs="sampleTabs" variant="underline" />
        </div>

        <!-- Tab Body Content -->
        <div class="p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] text-center text-xs text-[var(--color-theme-heading)] font-medium">
          Konten aktif tab: <strong class="text-[var(--color-highlight)] font-mono text-sm uppercase">{{ activePillTab }}</strong>
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="tabsSnippet" lang="vue" title="AppTabs.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
