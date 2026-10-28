<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppSelect from '@/components/form/AppSelect.vue'

const selectedCategory = ref('tech')
const categories = [
  { label: 'Teknologi & Gadget', value: 'tech' },
  { label: 'Finansial & Investasi', value: 'finance' },
  { label: 'Kesehatan & Medis', value: 'health' },
  { label: 'Edukasi & Pelatihan', value: 'education' }
]

const selectSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import AppSelect from '@/components/form/AppSelect.vue'

const selected = ref('tech')
const options = [
  { label: 'Teknologi & Gadget', value: 'tech' },
  { label: 'Finansial & Investasi', value: 'finance' },
  { label: 'Kesehatan & Medis', value: 'health' }
]
<\/script>

<template>
  <AppSelect
    v-model="selected"
    label="Pilih Kategori Bisnis"
    :options="options"
  />
</template>`

const propsMeta = [
  { name: 'v-model', type: 'any', required: true, description: 'Nilai opsi yang dipilih' },
  { name: 'label', type: 'string', required: true, description: 'Label deskripsi di bagian atas select' },
  { name: 'options', type: '{ label: string; value: any }[]', required: true, description: 'Daftar pilihan opsi dropdown' }
]
</script>

<template>
  <ComponentDoc
    title="AppSelect"
    description="Dropdown pemilihan mobile dengan floating label warna highlight dan chevron panah bawaan."
    category="Form Control"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="selectSnippet">
      <div class="w-full max-w-md mx-auto space-y-4">
        <AppSelect
          v-model="selectedCategory"
          label="Kategori Akun"
          :options="categories"
        />

        <div class="p-4 rounded-2xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] text-xs text-[var(--color-theme-heading)]">
          Pilihan saat ini: <strong class="text-[var(--color-highlight)] font-mono">{{ selectedCategory }}</strong>
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="selectSnippet" lang="vue" title="AppSelect.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
