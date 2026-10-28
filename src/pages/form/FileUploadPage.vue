<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppFileUpload from '@/components/form/AppFileUpload.vue'
import { useToast } from '@/composables/useToast'

const toast = useToast()
const uploadedFileName = ref('')

function onFileSelect(file: File | null) {
  if (file) {
    uploadedFileName.value = file.name
    toast.success(`File terpilih: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`)
  } else {
    uploadedFileName.value = ''
    toast.info('File dihapus')
  }
}

const uploadSnippet = `<script setup lang="ts">
import AppFileUpload from '@/components/form/AppFileUpload.vue'

function handleFile(file: File | null) {
  if (file) {
    console.log('File terpilih:', file.name)
    // Upload via FormData atau S3 Presigned URL
  }
}
<\/script>

<template>
  <AppFileUpload
    label="Unggah Foto KTP / Paspor"
    accept="image/*"
    :max-size-mb="5"
    @change="handleFile"
  />
</template>`

const propsMeta = [
  { name: 'label', type: 'string', default: "'Unggah Foto Profil'", description: 'Teks instruksi judul unggahan' },
  { name: 'accept', type: 'string', default: "'image/*'", description: 'Tipe file MIME yang diizinkan' },
  { name: 'maxSizeMb', type: 'number', default: '5', description: 'Ukuran file maksimum yang diizinkan dalam Megabytes' }
]

const emitsMeta = [
  { name: 'change', payload: 'File | null', description: 'Dipicu saat pengguna memilih file baru atau menghapus file' }
]
</script>

<template>
  <ComponentDoc
    title="AppFileUpload"
    description="Area unggah berkas mobile dengan dukungan tap-to-upload, validasi ukuran maksimum, preview thumbnail instan, dan tombol hapus file."
    category="Form Control"
  >
    <ComponentPreview title="Interactive File Upload Preview" :code-snippet="uploadSnippet">
      <div class="w-full max-w-md mx-auto space-y-4">
        <AppFileUpload
          label="Foto Bukti Transfer Pembayaran"
          accept="image/*"
          :max-size-mb="5"
          @change="onFileSelect"
        />

        <div v-if="uploadedFileName" class="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs text-center font-medium">
          File siap diunggah: <strong>{{ uploadedFileName }}</strong>
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="uploadSnippet" lang="vue" title="AppFileUpload.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :emits-list="emitsMeta" />
    </section>
  </ComponentDoc>
</template>
