<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppDivider from '@/components/ui/AppDivider.vue'

const dividerSnippet = `<script setup lang="ts">
import AppDivider from '@/components/ui/AppDivider.vue'
<\/script>

<template>
  <!-- Garis Pemisah Polos -->
  <AppDivider />

  <!-- Pemisah dengan Label Tengah -->
  <AppDivider label="Atau Masuk Dengan" />

  <!-- Pemisah Tanpa Margin Samping -->
  <AppDivider :margins="false" label="Section Baru" />
</template>`

const propsMeta = [
  { name: 'margins', type: 'boolean', default: 'true', description: 'Menambahkan margin horizontal (mx-4)' },
  { name: 'label', type: 'string', default: "''", description: 'Teks label kapital di bagian tengah pemisah' }
]
</script>

<template>
  <ComponentDoc
    title="AppDivider"
    description="Garis pemisah horizontal mobile yang membagi blok konten atau form, mendukung label teks di bagian tengah dengan style subtle border."
    category="UI Primitive"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="dividerSnippet">
      <div class="space-y-6 w-full max-w-md mx-auto">
        <div class="p-4 rounded-2xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] text-xs text-center text-[var(--color-theme-muted)]">
          Konten Bagian Atas
        </div>

        <AppDivider />

        <div class="p-4 rounded-2xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] text-xs text-center text-[var(--color-theme-muted)]">
          Konten Bagian Bawah
        </div>

        <AppDivider label="ATAU LOGIN DENGAN" />

        <div class="p-4 rounded-2xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] text-xs text-center text-[var(--color-theme-muted)]">
          Pilihan Sosial Media
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="dividerSnippet" lang="vue" title="AppDivider.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
