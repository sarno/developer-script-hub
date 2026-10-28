<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import OfflineDetector from '@/components/feedback/OfflineDetector.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Wifi, WifiOff } from 'lucide-vue-next'

const simulatedOffline = ref(false)

const offlineSnippet = `<script setup lang="ts">
import OfflineDetector from '@/components/feedback/OfflineDetector.vue'
<\/script>

<template>
  <!-- Komponen ini otomatis mendeteksi navigator.onLine & event online/offline -->
  <OfflineDetector />
</template>`

const propsMeta = [
  { name: 'none', type: '-', default: '-', description: 'Memonitor event window online/offline secara otomatis melalui composable useOffline()' }
]
</script>

<template>
  <ComponentDoc
    title="OfflineDetector"
    description="Banner peringatan koneksi otomatis di bagian atas layar yang muncul seketika saat perangkat kehilangan sinyal internet atau mode pesawat aktif."
    category="Feedback & Status"
    badge="PWA Primitive"
  >
    <ComponentPreview title="Simulasi Status Koneksi" :code-snippet="offlineSnippet">
      <div class="w-full max-w-sm mx-auto text-center p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] space-y-4">
        <div class="p-4 rounded-2xl border text-xs" :class="simulatedOffline ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'">
          <div class="flex items-center justify-center space-x-2 font-bold mb-1">
            <component :is="simulatedOffline ? WifiOff : Wifi" class="w-4 h-4" />
            <span>{{ simulatedOffline ? 'Status: Offline Terputus' : 'Status: Online Terhubung' }}</span>
          </div>
          <p>{{ simulatedOffline ? 'Aplikasi beroperasi dalam cache lokal PWA.' : 'Koneksi internet stabil dan aktif.' }}</p>
        </div>

        <AppButton @click="simulatedOffline = !simulatedOffline" :variant="simulatedOffline ? 'success' : 'danger'" size="sm">
          <span>{{ simulatedOffline ? 'Simulasikan Online' : 'Simulasikan Terputus (Offline)' }}</span>
        </AppButton>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="offlineSnippet" lang="vue" title="OfflineDetector.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
