<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import PageTitle from '@/components/shell/PageTitle.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Plus } from 'lucide-vue-next'

const pageTitleSnippet = `<script setup lang="ts">
import PageTitle from '@/components/shell/PageTitle.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Plus } from 'lucide-vue-next'
<\/script>

<template>
  <!-- Judul Halaman Standar -->
  <PageTitle 
    title="Dompet Digital" 
    subtitle="Ringkasan Finansial" 
  />

  <!-- Judul Halaman dengan Tombol Aksi di Kanan -->
  <PageTitle 
    title="Daftar Rekening" 
    subtitle="Kelola Pembayaran"
    :sticky="false"
  >
    <template #actions>
      <AppButton variant="highlight" size="sm">
        <Plus class="w-3.5 h-3.5 mr-1" />
        Tambah
      </AppButton>
    </template>
  </PageTitle>
</template>`

const propsMeta = [
  { name: 'title', type: 'string', required: true, description: 'Judul teks utama halaman dengan font ukuran 2xl tebal' },
  { name: 'subtitle', type: 'string', default: "''", description: 'Subjudul atau kategori huruf kapital kecil berwarna highlight' },
  { name: 'sticky', type: 'boolean', default: 'false', description: 'Membuat judul menempel di posisi atas dengan backdrop-filter blur (glass panel)' }
]

const slotsMeta = [
  { name: 'actions', description: 'Slot tombol aksi atau icon di sebelah kanan judul' }
]
</script>

<template>
  <ComponentDoc
    title="PageTitle"
    description="Komponen judul header halaman mobile bergaya AppKit dengan subtitle tracking kapital warna highlight dan slot aksi di sebelah kanan."
    category="Mobile Shell & Overlay"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="pageTitleSnippet">
      <div class="w-full max-w-md mx-auto space-y-6 bg-[var(--color-theme-card)] p-4 rounded-3xl border border-[var(--color-theme-border)]">
        <PageTitle 
          title="Manajemen Kartu" 
          subtitle="Pengaturan Keuangan" 
        >
          <template #actions>
            <AppButton variant="highlight" size="sm">
              <Plus class="w-3.5 h-3.5 mr-1" />
              <span>Baru</span>
            </AppButton>
          </template>
        </PageTitle>

        <div class="p-4 rounded-2xl bg-black/5 dark:bg-white/5 text-xs text-[var(--color-theme-muted)] text-center">
          Konten Body Halaman Mobile
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="pageTitleSnippet" lang="vue" title="PageTitle.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
