<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import SkeletonLoader from '@/components/feedback/SkeletonLoader.vue'

const skeletonSnippet = `<script setup lang="ts">
import SkeletonLoader from '@/components/feedback/SkeletonLoader.vue'
<\/script>

<template>
  <!-- Skeleton Baris Teks -->
  <SkeletonLoader :lines="3" />

  <!-- Skeleton dengan Avatar Lingkaran Profil -->
  <SkeletonLoader :lines="2" :avatar="true" />
</template>`

const propsMeta = [
  { name: 'lines', type: 'number', default: '3', description: 'Jumlah baris shimmer teks placeholder' },
  { name: 'avatar', type: 'boolean', default: 'false', description: 'Menampilkan placeholder kotak avatar di sebelah kiri' }
]
</script>

<template>
  <ComponentDoc
    title="SkeletonLoader"
    description="Komponen placeholder kerangka animasi shimmer berkilau untuk merepresentasikan konten kartu, avatar, dan baris teks saat memuat data jaringan."
    category="Feedback & Status"
  >
    <ComponentPreview title="Skeleton Shimmer Preview" :code-snippet="skeletonSnippet">
      <div class="w-full max-w-md mx-auto space-y-4">
        <SkeletonLoader :lines="3" :avatar="true" />
        <SkeletonLoader :lines="2" :avatar="false" />
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="skeletonSnippet" lang="vue" title="SkeletonLoader.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
