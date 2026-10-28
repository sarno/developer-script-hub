<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { useToast } from '@/composables/useToast'
import { CheckCircle2, AlertOctagon, AlertTriangle, Info } from 'lucide-vue-next'

const toast = useToast()

function fire(type: 'success' | 'error' | 'warning' | 'info') {
  if (type === 'success') toast.success('Data transaksi berhasil disimpan!')
  if (type === 'error') toast.error('Terjadi kesalahan pada jaringan.')
  if (type === 'warning') toast.warning('Penyimpanan memori hampir penuh.')
  if (type === 'info') toast.info('Fitur baru telah tersedia di versi 3.5.')
}

const toastSnippet = `<script setup lang="ts">
import { useToast } from '@/composables/useToast'
import AppToast from '@/components/feedback/AppToast.vue'
import AppButton from '@/components/ui/AppButton.vue'

const toast = useToast()
<\/script>

<template>
  <AppButton @click="toast.success('Disimpan!')" variant="success">
    Pemicu Toast Sukses
  </AppButton>

  <!-- Masukkan AppToast sekali di root template (AppShell atau App.vue) -->
  <Teleport to="body">
    <AppToast />
  </Teleport>
</template>`

const propsMeta = [
  { name: 'none', type: '-', default: '-', description: 'Menggunakan state reaktif useToast().toasts secara otomatis' }
]
</script>

<template>
  <ComponentDoc
    title="AppToast"
    description="Notifikasi mengambang di bagian atas layar mobile dengan animasi slide-down halus, auto-dismiss dengan timer, dan tombol silang tutup instan."
    category="Feedback & Status"
    badge="Global Overlay"
  >
    <ComponentPreview title="Interactive Toast Trigger" :code-snippet="toastSnippet">
      <div class="w-full max-w-sm mx-auto text-center p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] space-y-4">
        <div class="text-xs text-[var(--color-theme-muted)]">
          Klik tombol varian untuk memunculkan toast di atas layar:
        </div>
        <div class="flex flex-wrap justify-center gap-2">
          <AppButton @click="fire('success')" variant="success" size="sm">
            <CheckCircle2 class="w-3.5 h-3.5 mr-1" />
            <span>Success</span>
          </AppButton>
          <AppButton @click="fire('error')" variant="danger" size="sm">
            <AlertOctagon class="w-3.5 h-3.5 mr-1" />
            <span>Error</span>
          </AppButton>
          <AppButton @click="fire('warning')" variant="outline" size="sm">
            <AlertTriangle class="w-3.5 h-3.5 mr-1" />
            <span>Warning</span>
          </AppButton>
          <AppButton @click="fire('info')" variant="highlight" size="sm">
            <Info class="w-3.5 h-3.5 mr-1" />
            <span>Info</span>
          </AppButton>
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="toastSnippet" lang="vue" title="AppToast.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
