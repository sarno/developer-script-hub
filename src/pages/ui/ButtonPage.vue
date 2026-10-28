<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Sparkles, Heart, ArrowRight, Trash2, Send, Check } from 'lucide-vue-next'
import { useToast } from '@/composables/useToast'

const toast = useToast()
const clickCount = ref(0)
const selectedVariant = ref<'highlight' | 'outline' | 'ghost' | 'danger' | 'success'>('highlight')
const selectedSize = ref<'sm' | 'md' | 'lg'>('md')
const isFull = ref(false)
const isDisabled = ref(false)

function onButtonClick() {
  clickCount.value++
  toast.info(`Tombol diklik (${clickCount.value}x)`)
}

const buttonUsageSnippet = `<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import { Sparkles, ArrowRight } from 'lucide-vue-next'

function handleClick() {
  console.log('Button clicked!')
}
<\/script>

<template>
  <!-- Varian Utama Highlight -->
  <AppButton variant="highlight" size="md" @click="handleClick">
    <Sparkles class="w-4 h-4 mr-2" />
    <span>Lanjutkan Transaksi</span>
  </AppButton>

  <!-- Varian Outline -->
  <AppButton variant="outline" size="md">
    <span>Simpan Draft</span>
  </AppButton>

  <!-- Varian Ghost -->
  <AppButton variant="ghost" size="sm">
    <span>Batal</span>
  </AppButton>

  <!-- Varian Danger -->
  <AppButton variant="danger" size="md">
    <span>Hapus Data</span>
  </AppButton>

  <!-- Tombol Lebar Penuh (Full Width) -->
  <AppButton variant="highlight" full size="lg">
    <span>Checkout Sekarang</span>
    <ArrowRight class="w-4 h-4 ml-2" />
  </AppButton>
</template>`

const propsMeta = [
  { name: 'variant', type: "'highlight' | 'outline' | 'ghost' | 'danger' | 'success'", default: "'highlight'", description: 'Tema visual tombol' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Ukuran padding dan font tombol' },
  { name: 'full', type: 'boolean', default: 'false', description: 'Membuat tombol membentang penuh (width: 100%)' },
  { name: 'rounded', type: "'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: 'Tingkat lengkungan sudut border-radius' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Menonaktifkan interaksi klik tombol' }
]

const emitsMeta = [
  { name: 'click', payload: 'MouseEvent', description: 'Dipicu saat tombol diklik dan tidak dalam status disabled' }
]

const slotsMeta = [
  { name: 'default', description: 'Konten teks atau icon di dalam tombol' }
]
</script>

<template>
  <ComponentDoc
    title="AppButton"
    description="Komponen tombol interaktif bergaya AppKit Mobile dengan dukungan highlight gradient, outline, haptic tap feedback, ukuran responsif, dan status disabled."
    category="UI Primitive"
    badge="Core Component"
  >
    <!-- Live Interactive Playground -->
    <ComponentPreview 
      title="Interactive Playground"
      :code-snippet="buttonUsageSnippet"
    >
      <div class="space-y-6 w-full">
        <!-- Interactive Controls Bar -->
        <div class="p-4 rounded-2xl bg-black/5 dark:bg-white/5 flex flex-wrap gap-4 items-center justify-between text-xs">
          <div class="flex items-center space-x-2">
            <span class="font-bold text-[var(--color-theme-heading)]">Variant:</span>
            <select v-model="selectedVariant" class="px-2 py-1 rounded-lg border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] text-[var(--color-theme-heading)]">
              <option value="highlight">highlight</option>
              <option value="outline">outline</option>
              <option value="ghost">ghost</option>
              <option value="danger">danger</option>
              <option value="success">success</option>
            </select>
          </div>

          <div class="flex items-center space-x-2">
            <span class="font-bold text-[var(--color-theme-heading)]">Size:</span>
            <select v-model="selectedSize" class="px-2 py-1 rounded-lg border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] text-[var(--color-theme-heading)]">
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>

          <div class="flex items-center space-x-4">
            <label class="flex items-center space-x-1.5 cursor-pointer">
              <input type="checkbox" v-model="isFull" class="rounded-sm text-[var(--color-highlight)]" />
              <span class="text-[var(--color-theme-heading)] font-medium">Full Width</span>
            </label>

            <label class="flex items-center space-x-1.5 cursor-pointer">
              <input type="checkbox" v-model="isDisabled" class="rounded-sm text-[var(--color-highlight)]" />
              <span class="text-[var(--color-theme-heading)] font-medium">Disabled</span>
            </label>
          </div>
        </div>

        <!-- Render Target -->
        <div class="flex justify-center p-6 border border-dashed border-[var(--color-theme-border)] rounded-2xl bg-[var(--color-theme-card)]">
          <AppButton 
            :variant="selectedVariant"
            :size="selectedSize"
            :full="isFull"
            :disabled="isDisabled"
            @click="onButtonClick"
          >
            <Sparkles class="w-4 h-4 mr-2" />
            <span>Klik Saya ({{ clickCount }})</span>
          </AppButton>
        </div>
      </div>
    </ComponentPreview>

    <!-- Variants Showcase -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Semua Varian Tampilan</h2>
      <div class="p-6 rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] flex flex-wrap gap-3 items-center">
        <AppButton variant="highlight">Highlight</AppButton>
        <AppButton variant="outline">Outline</AppButton>
        <AppButton variant="ghost">Ghost</AppButton>
        <AppButton variant="success">Success</AppButton>
        <AppButton variant="danger">Danger</AppButton>
        <AppButton variant="highlight" disabled>Disabled</AppButton>
      </div>
    </section>

    <!-- Script Template -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan Lengkap</h2>
      <CodeSnippet :code="buttonUsageSnippet" lang="vue" title="AppButton.vue Usage" />
    </section>

    <!-- API Tables -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable 
        :props-list="propsMeta"
        :emits-list="emitsMeta"
        :slots-list="slotsMeta"
      />
    </section>
  </ComponentDoc>
</template>
