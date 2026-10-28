<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import StarRating from '@/components/ui/StarRating.vue'

const currentRating = ref(4)

const starRatingSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import StarRating from '@/components/ui/StarRating.vue'

const rating = ref(4)
<\/script>

<template>
  <!-- Rating Interaktif (Dapat diklik pengguna) -->
  <div class="flex items-center space-x-2">
    <StarRating v-model="rating" :max="5" />
    <span class="text-xs font-bold">{{ rating }} / 5 Bintang</span>
  </div>

  <!-- Rating Read-Only (Hanya untuk Display) -->
  <StarRating :model-value="5" :max="5" readonly />
</template>`

const propsMeta = [
  { name: 'v-model (modelValue)', type: 'number', default: '5', description: 'Nilai jumlah bintang yang dipilih' },
  { name: 'max', type: 'number', default: '5', description: 'Jumlah total bintang maksimum' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'Mode hanya baca (tidak dapat diklik)' }
]
</script>

<template>
  <ComponentDoc
    title="StarRating"
    description="Komponen peringkat bintang interaktif dengan animasi hover/tap scale, pewarnaan amber-400 untuk bintang aktif, dan dukungan mode read-only untuk review produk."
    category="UI Primitive"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="starRatingSnippet">
      <div class="w-full max-w-sm mx-auto space-y-6 text-center">
        <div class="p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] shadow-xs space-y-3">
          <div class="text-xs text-[var(--color-theme-muted)]">Beri Penilaian Layanan:</div>
          <StarRating v-model="currentRating" :max="5" />
          <div class="text-sm font-bold text-[var(--color-theme-heading)]">
            Skor: {{ currentRating }} dari 5 Bintang
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] flex items-center justify-between text-xs">
          <span class="text-[var(--color-theme-muted)]">Read-only (Ulasan Pengguna):</span>
          <StarRating :model-value="5" :max="5" readonly />
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="starRatingSnippet" lang="vue" title="StarRating.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
