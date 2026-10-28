<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppSnackbar from '@/components/feedback/AppSnackbar.vue'
import { useToast } from '@/composables/useToast'

const isSnackbarOpen = ref(false)
const toast = useToast()

function onUndo() {
  toast.success('Pesan berhasil dipulihkan!')
}

const snackbarSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import AppSnackbar from '@/components/feedback/AppSnackbar.vue'
import AppButton from '@/components/ui/AppButton.vue'

const isSnackbarOpen = ref(false)

function handleUndo() {
  console.log('Aksi Undo Dijalankan')
}
<\/script>

<template>
  <AppButton @click="isSnackbarOpen = true" variant="highlight">
    Tampilkan Snackbar
  </AppButton>

  <AppSnackbar
    v-model="isSnackbarOpen"
    message="1 item berhasil dipindahkan ke tempat sampah"
    action-text="Urungkan"
    @action="handleUndo"
  />
</template>`

const propsMeta = [
  { name: 'v-model', type: 'boolean', default: 'false', description: 'Visibilitas bar snackbar di bagian bawah layar' },
  { name: 'message', type: 'string', required: true, description: 'Pesan teks informasi yang ditampilkan' },
  { name: 'actionText', type: 'string', default: "'Tutup'", description: 'Teks tombol aksi di sebelah kanan snackbar' }
]

const emitsMeta = [
  { name: 'action', description: 'Dipicu saat tombol aksi (mis. Urungkan) diklik' }
]
</script>

<template>
  <ComponentDoc
    title="AppSnackbar"
    description="Banner notifikasi aksi di bagian bawah layar dengan tombol aksi interaktif (misalnya 'Urungkan' atau 'Detail') dan auto-dismiss."
    category="Feedback & Status"
  >
    <ComponentPreview title="Interactive Snackbar Preview" :code-snippet="snackbarSnippet">
      <div class="w-full max-w-sm mx-auto text-center p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] space-y-4">
        <div class="text-xs text-[var(--color-theme-muted)]">
          Klik untuk memunculkan snackbar aksi:
        </div>
        <AppButton @click="isSnackbarOpen = true" variant="highlight">
          Tampilkan Pesan Snackbar
        </AppButton>

        <AppSnackbar
          v-model="isSnackbarOpen"
          message="1 pesan email berhasil diarsipkan"
          action-text="Urungkan"
          @action="onUndo"
        />
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="snackbarSnippet" lang="vue" title="AppSnackbar.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :emits-list="emitsMeta" />
    </section>
  </ComponentDoc>
</template>
