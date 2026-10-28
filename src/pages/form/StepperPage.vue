<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppStepper from '@/components/form/AppStepper.vue'

const quantity = ref(2)
const seatCount = ref(1)

const stepperSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import AppStepper from '@/components/form/AppStepper.vue'

const qty = ref(1)
<\/script>

<template>
  <div class="flex items-center justify-between">
    <span>Jumlah Tiket:</span>
    <AppStepper v-model="qty" :min="1" :max="10" :step="1" />
  </div>
</template>`

const propsMeta = [
  { name: 'v-model', type: 'number', default: '1', description: 'Nilai angka saat ini' },
  { name: 'min', type: 'number', default: '1', description: 'Batas nilai angka minimum' },
  { name: 'max', type: 'number', default: '99', description: 'Batas nilai angka maksimum' },
  { name: 'step', type: 'number', default: '1', description: 'Kelipatan penambahan/pengurangan nilai' }
]
</script>

<template>
  <ComponentDoc
    title="AppStepper"
    description="Kontrol kuantitas angka numerik dengan tombol minus dan plus, batasan min/max, dan efek getar haptic saat nilai berubah."
    category="Form Control"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="stepperSnippet">
      <div class="w-full max-w-sm mx-auto p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-bold text-[var(--color-theme-heading)]">Porsi Menu</div>
            <div class="text-xs text-[var(--color-theme-muted)]">Rp 35.000 / porsi</div>
          </div>
          <AppStepper v-model="quantity" :min="1" :max="20" />
        </div>

        <div class="pt-4 border-t border-[var(--color-theme-border)] flex items-center justify-between text-xs font-semibold">
          <span class="text-[var(--color-theme-muted)]">Total Harga:</span>
          <span class="text-base font-extrabold text-[var(--color-highlight)]">
            Rp {{ (quantity * 35000).toLocaleString('id-ID') }}
          </span>
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="stepperSnippet" lang="vue" title="AppStepper.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
