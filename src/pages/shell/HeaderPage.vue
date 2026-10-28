<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppHeader from '@/components/shell/AppHeader.vue'

const headerSnippet = `<script setup lang="ts">
import AppHeader from '@/components/shell/AppHeader.vue'

function handleBack() {
  console.log('Navigasi kembali')
}
<\/script>

<template>
  <!-- Header Mobile Standar dengan Back Button & Menu Trigger -->
  <AppHeader 
    title="Katalog Produk" 
    :show-back="true"
    @back="handleBack"
  />

  <!-- Header Transparan di Atas Cover Image -->
  <AppHeader 
    title="" 
    :transparent="true" 
    :show-back="true" 
  />
</template>`

const propsMeta = [
  { name: 'title', type: 'string', default: "''", description: 'Judul yang tampil di bagian tengah header' },
  { name: 'showBack', type: 'boolean', default: 'true', description: 'Menampilkan tombol panah kembali ke halaman sebelumnya' },
  { name: 'autoShowOnScroll', type: 'boolean', default: 'false', description: 'Otomatis memunculkan header hanya saat halaman di-scroll ke bawah' },
  { name: 'scrollThreshold', type: 'number', default: '80', description: 'Jarak scroll dalam piksel sebelum header muncul' },
  { name: 'transparent', type: 'boolean', default: 'false', description: 'Mode header transparan tanpa background card' }
]

const emitsMeta = [
  { name: 'back', description: 'Dipicu saat tombol panah kembali diklik' }
]
</script>

<template>
  <ComponentDoc
    title="AppHeader"
    description="Header bilah atas navigasi mobile dengan safe-area inset top, tombol kembali, judul tengah adaptif, toggle drawer menu samping, dan toggle dark mode instan."
    category="Mobile Shell & Overlay"
  >
    <ComponentPreview title="Header Preview" :code-snippet="headerSnippet">
      <div class="w-full max-w-sm mx-auto overflow-hidden rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-bg)] shadow-md">
        <AppHeader title="Profil Saya" :show-back="true" />
        <div class="p-6 text-xs text-center text-[var(--color-theme-muted)]">
          Area Konten di Bawah Header
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="headerSnippet" lang="vue" title="AppHeader.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :emits-list="emitsMeta" />
    </section>
  </ComponentDoc>
</template>
