<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppShell from '@/components/shell/AppShell.vue'

const shellSnippet = `<script setup lang="ts">
import AppShell from '@/components/shell/AppShell.vue'
import AppHeader from '@/components/shell/AppHeader.vue'
import AppFooterBar from '@/components/shell/AppFooterBar.vue'
import AppDrawer from '@/components/shell/AppDrawer.vue'
<\/script>

<template>
  <AppShell max-width="max-w-md">
    <AppHeader title="AppKit Mobile" />
    
    <main class="flex-1 p-4 pb-24">
      <!-- Konten Halaman Mobile di sini -->
    </main>

    <AppFooterBar :items="navItems" />
    <AppDrawer />
  </AppShell>
</template>`

const propsMeta = [
  { name: 'maxWidth', type: 'string', default: "'max-w-md'", description: 'Batas lebar maksimum container frame mobile (mis. max-w-sm, max-w-md, max-w-lg)' }
]

const slotsMeta = [
  { name: 'default', description: 'Wadah utama hierarki router-view, header, dan footer' }
]
</script>

<template>
  <ComponentDoc
    title="AppShell"
    description="Wadah arsitektur root aplikasi mobile yang menyatukan OfflineDetector, global AppToast notification, inisialisasi Highlight Theme & Dark Mode, serta isolasi viewport responsif."
    category="Mobile Shell & Overlay"
    badge="Architecture"
  >
    <ComponentPreview title="Container Frame Preview" :code-snippet="shellSnippet">
      <div class="w-full max-w-sm mx-auto p-4 rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] text-center text-xs text-[var(--color-theme-muted)] space-y-2">
        <div class="font-bold text-[var(--color-theme-heading)]">Frame Mobile AppShell</div>
        <p>Menjamin rendering safe-area notch iPhone dan navigasi bottom bar tetap presisi di layar desktop maupun smartphone.</p>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan Root</h2>
      <CodeSnippet :code="shellSnippet" lang="vue" title="AppShell.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
