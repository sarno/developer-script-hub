<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppBadge from '@/components/feedback/AppBadge.vue'

const badgeSnippet = `<script setup lang="ts">
import AppBadge from '@/components/feedback/AppBadge.vue'
<\/script>

<template>
  <AppBadge variant="highlight">Highlight</AppBadge>
  <AppBadge variant="success">Sukses</AppBadge>
  <AppBadge variant="warning">Tertunda</AppBadge>
  <AppBadge variant="danger">Dibatalkan</AppBadge>
  <AppBadge variant="neutral">Draft</AppBadge>
</template>`

const propsMeta = [
  { name: 'variant', type: "'highlight' | 'success' | 'warning' | 'danger' | 'neutral'", default: "'highlight'", description: 'Tema warna status badge' }
]

const slotsMeta = [
  { name: 'default', description: 'Label teks atau angka di dalam badge' }
]
</script>

<template>
  <ComponentDoc
    title="AppBadge"
    description="Badge indikator status mini dengan sudut rounded-full, teks bold kontras, dan dukungan warna tema dinamis."
    category="Feedback & Status"
  >
    <ComponentPreview title="Interactive Badge Preview" :code-snippet="badgeSnippet">
      <div class="flex flex-wrap items-center justify-center gap-3 p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)]">
        <AppBadge variant="highlight">Highlight Active</AppBadge>
        <AppBadge variant="success">Pembayaran Lunas</AppBadge>
        <AppBadge variant="warning">Menunggu Konfirmasi</AppBadge>
        <AppBadge variant="danger">Gagal / Ditolak</AppBadge>
        <AppBadge variant="neutral">Draft Arsip</AppBadge>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="badgeSnippet" lang="vue" title="AppBadge.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
