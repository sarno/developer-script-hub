<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppDrawer from '@/components/shell/AppDrawer.vue'
import { useUiStore } from '@/stores/uiStore'
import { Menu } from 'lucide-vue-next'

const uiStore = useUiStore()

const drawerSnippet = `<script setup lang="ts">
import AppDrawer from '@/components/shell/AppDrawer.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { useUiStore } from '@/stores/uiStore'
import { Menu } from 'lucide-vue-next'

const uiStore = useUiStore()
<\/script>

<template>
  <AppButton @click="uiStore.toggleDrawer()" variant="highlight">
    <Menu class="w-4 h-4 mr-2" />
    <span>Buka Drawer Navigasi</span>
  </AppButton>

  <!-- Laci Navigasi Samping dengan Theme Engine -->
  <AppDrawer />
</template>`

const propsMeta = [
  { name: 'none', type: '-', default: '-', description: 'Menggunakan state global Pinia useUiStore().isDrawerOpen' }
]
</script>

<template>
  <ComponentDoc
    title="AppDrawer"
    description="Menu laci samping mobile (off-canvas drawer) yang memuat link menu utama, avatar pengguna, toggle Dark Mode, dan panel pemilih 16 highlight colors AppKit."
    category="Mobile Shell & Overlay"
  >
    <ComponentPreview title="Interactive Drawer Trigger" :code-snippet="drawerSnippet">
      <div class="w-full max-w-sm mx-auto text-center p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] space-y-4">
        <div class="text-xs text-[var(--color-theme-muted)]">
          Klik tombol di bawah untuk membuka Drawer navigasi samping:
        </div>
        <AppButton @click="uiStore.toggleDrawer()" variant="highlight">
          <Menu class="w-4 h-4 mr-2" />
          <span>Buka AppDrawer</span>
        </AppButton>
      </div>
      <AppDrawer />
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="drawerSnippet" lang="vue" title="AppDrawer.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
