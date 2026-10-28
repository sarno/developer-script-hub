<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import SearchBar from '@/components/ui/SearchBar.vue'

const searchQuery = ref('')
const sampleTags = ['E-Wallet', 'Voucher', 'Transfer', 'Pulsa', 'QRIS']

const searchBarSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '@/components/ui/SearchBar.vue'

const query = ref('')
const trending = ['E-Wallet', 'Voucher', 'Transfer', 'Pulsa', 'QRIS']
<\/script>

<template>
  <SearchBar 
    v-model="query"
    placeholder="Cari transaksi atau kontak..."
    :trending-tags="trending"
  />

  <p v-if="query" class="text-xs text-gray-500 mt-2 px-4">
    Hasil pencarian untuk: <strong>{{ query }}</strong>
  </p>
</template>`

const propsMeta = [
  { name: 'v-model (modelValue)', type: 'string', default: "''", description: 'Nilai input query pencarian' },
  { name: 'placeholder', type: 'string', default: "'Cari apapun di AppKit...'", description: 'Teks placeholder saat kosong' },
  { name: 'trendingTags', type: 'string[]', default: '[]', description: 'Daftar badge tag populer yang dapat diklik langsung' }
]
</script>

<template>
  <ComponentDoc
    title="SearchBar"
    description="Bar pencarian bergaya mobile AppKit dengan icon search, tombol reset silang (clear) otomatis, border focus highlight, dan barisan tag saran populer yang dapat digulir."
    category="UI Primitive"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="searchBarSnippet">
      <div class="w-full max-w-md mx-auto space-y-4">
        <SearchBar 
          v-model="searchQuery"
          placeholder="Cari transaksi atau produk..."
          :trending-tags="sampleTags"
        />

        <div class="p-4 rounded-2xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] text-xs text-[var(--color-theme-heading)]">
          Status pencarian: 
          <span v-if="searchQuery" class="font-bold text-[var(--color-highlight)]">"{{ searchQuery }}"</span>
          <span v-else class="text-[var(--color-theme-muted)] italic">Menunggu input...</span>
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="searchBarSnippet" lang="vue" title="SearchBar.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
