<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppCard from '@/components/card/AppCard.vue'
import { useToast } from '@/composables/useToast'
import { useHaptic } from '@/composables/useHaptic'
import { useTheme } from '@/composables/useTheme'
import { useHighlight } from '@/composables/useHighlight'
import { Terminal, Bell, Vibrate, Moon, Sun, Palette, Smartphone, Wifi } from 'lucide-vue-next'

const toast = useToast()
const { trigger } = useHaptic()
const { isDark, toggleTheme } = useTheme()
const { currentHighlight, setHighlight } = useHighlight()

function testToast(type: 'success' | 'error' | 'warning' | 'info') {
  if (type === 'success') toast.success('Data transaksi berhasil disimpan!')
  if (type === 'error') toast.error('Terjadi kegagalan koneksi ke server.')
  if (type === 'warning') toast.warning('Penyimpanan lokal mendekati batas maksimum.')
  if (type === 'info') toast.info('Versi 3.5 master template telah aktif.')
}

const toastCode = `import { useToast } from '@/composables/useToast'

const toast = useToast()

// Memanggil notifikasi toast
toast.success('Berhasil disimpan!')
toast.error('Gagal memproses transaksi')
toast.warning('Koneksi tidak stabil')
toast.info('Pembaruan baru tersedia')`

const hapticCode = `import { useHaptic } from '@/composables/useHaptic'

const { trigger } = useHaptic()

// Memicu getaran haptic mobile (navigator.vibrate)
trigger('light')    // 10ms - untuk tap tombol biasa
trigger('medium')   // 25ms - untuk switch toggle
trigger('heavy')    // 50ms - untuk konfirmasi modal
trigger('success')  // [15, 50, 20] - pola sukses
trigger('error')    // [40, 60, 40] - pola error`

const themeCode = `import { useTheme } from '@/composables/useTheme'

const { isDark, currentTheme, setTheme, toggleTheme } = useTheme()

// Mengganti tema
toggleTheme() // Beralih antara dark dan light
setTheme('dark') // 'light' | 'dark' | 'auto'`

const highlightCode = `import { useHighlight } from '@/composables/useHighlight'

const { currentHighlight, setHighlight } = useHighlight()

// Mengganti warna highlight aksen
setHighlight('grass') // 'blue' | 'red' | 'green' | 'grass' | 'orange' | ...`
</script>

<template>
  <ComponentDoc
    title="AppKit Reactive Composables"
    description="Koleksi 7 Vue 3 Composition API hooks untuk menangani mobile toast, getaran haptic, tema dark/light, highlight warna dinamis, scroll header, offline status, dan PWA installation."
    category="Hooks"
    badge="7 Composables"
  >
    <!-- Interactive Testing Area -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)] flex items-center space-x-2">
        <Terminal class="w-5 h-5 text-[var(--color-highlight)]" />
        <span>Uji Coba Langsung di Browser</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Toast Playground -->
        <AppCard>
          <div class="flex items-center space-x-2 mb-3">
            <Bell class="w-4 h-4 text-[var(--color-highlight)]" />
            <h3 class="text-sm font-bold text-[var(--color-theme-heading)]">useToast()</h3>
          </div>
          <p class="text-xs text-[var(--color-theme-muted)] mb-4">
            Klik tombol untuk memicu notifikasi toast mengambang di atas layar.
          </p>
          <div class="flex flex-wrap gap-2">
            <AppButton @click="testToast('success')" variant="success" size="sm">Success</AppButton>
            <AppButton @click="testToast('error')" variant="danger" size="sm">Error</AppButton>
            <AppButton @click="testToast('warning')" variant="outline" size="sm">Warning</AppButton>
            <AppButton @click="testToast('info')" variant="highlight" size="sm">Info</AppButton>
          </div>
        </AppCard>

        <!-- Haptic Playground -->
        <AppCard>
          <div class="flex items-center space-x-2 mb-3">
            <Vibrate class="w-4 h-4 text-[var(--color-highlight)]" />
            <h3 class="text-sm font-bold text-[var(--color-theme-heading)]">useHaptic()</h3>
          </div>
          <p class="text-xs text-[var(--color-theme-muted)] mb-4">
            Memicu getaran fisik Web Vibration API (diperlukan perangkat smartphone).
          </p>
          <div class="flex flex-wrap gap-2">
            <AppButton @click="trigger('light')" variant="ghost" size="sm">Light (10ms)</AppButton>
            <AppButton @click="trigger('medium')" variant="ghost" size="sm">Medium (25ms)</AppButton>
            <AppButton @click="trigger('heavy')" variant="ghost" size="sm">Heavy (50ms)</AppButton>
            <AppButton @click="trigger('success')" variant="success" size="sm">Success Beat</AppButton>
          </div>
        </AppCard>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="space-y-6">
      <div>
        <h3 class="text-base font-bold text-[var(--color-theme-heading)] mb-2">1. useToast Hook</h3>
        <CodeSnippet :code="toastCode" lang="typescript" title="Penggunaan useToast()" />
      </div>

      <div>
        <h3 class="text-base font-bold text-[var(--color-theme-heading)] mb-2">2. useHaptic Hook</h3>
        <CodeSnippet :code="hapticCode" lang="typescript" title="Penggunaan useHaptic()" />
      </div>

      <div>
        <h3 class="text-base font-bold text-[var(--color-theme-heading)] mb-2">3. useTheme Hook</h3>
        <CodeSnippet :code="themeCode" lang="typescript" title="Penggunaan useTheme()" />
      </div>

      <div>
        <h3 class="text-base font-bold text-[var(--color-theme-heading)] mb-2">4. useHighlight Hook</h3>
        <CodeSnippet :code="highlightCode" lang="typescript" title="Penggunaan useHighlight()" />
      </div>
    </section>
  </ComponentDoc>
</template>
