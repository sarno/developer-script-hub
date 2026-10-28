<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import ActionModal from '@/components/shell/ActionModal.vue'
import AppButton from '@/components/ui/AppButton.vue'

const isModalOpen = ref(false)
const modalVariant = ref<'success' | 'warning' | 'danger' | 'info'>('success')

function openModal(variant: 'success' | 'warning' | 'danger' | 'info') {
  modalVariant.value = variant
  isModalOpen.value = true
}

const modalSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import ActionModal from '@/components/shell/ActionModal.vue'
import AppButton from '@/components/ui/AppButton.vue'

const isOpen = ref(false)
<\/script>

<template>
  <AppButton @click="isOpen = true" variant="success">
    Tampilkan Sukses
  </AppButton>

  <ActionModal
    v-model="isOpen"
    title="Transfer Berhasil!"
    variant="success"
  >
    <p>Dana sebesar Rp 250.000 telah sukses dikirim ke rekening tujuan.</p>

    <template #footer>
      <div class="flex space-x-2">
        <AppButton @click="isOpen = false" variant="ghost" full>Tutup</AppButton>
        <AppButton @click="isOpen = false" variant="highlight" full>Bagikan Resi</AppButton>
      </div>
    </template>
  </ActionModal>
</template>`

const propsMeta = [
  { name: 'v-model', type: 'boolean', default: 'false', description: 'Visibilitas dialog modal di tengah layar' },
  { name: 'title', type: 'string', default: "''", description: 'Judul pesan konfirmasi modal' },
  { name: 'variant', type: "'success' | 'warning' | 'danger' | 'info'", default: "'info'", description: 'Tipe status semantik yang menentukan icon dan warna header lingkaran' }
]

const slotsMeta = [
  { name: 'default', description: 'Isi teks penjelasan detail modal' },
  { name: 'footer', description: 'Kustomisasi tombol aksi bawah (batal, konfirmasi)' }
]
</script>

<template>
  <ComponentDoc
    title="ActionModal"
    description="Dialog modal konfirmasi di tengah layar (centered dialog) dengan animasi pop-in, icon status semantik (success, warning, danger, info), dan tombol aksi kustom."
    category="Mobile Shell & Overlay"
  >
    <ComponentPreview title="Interactive Modal Preview" :code-snippet="modalSnippet">
      <div class="w-full max-w-sm mx-auto text-center p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] space-y-4">
        <div class="text-xs text-[var(--color-theme-muted)]">Pilih status modal yang ingin diuji:</div>
        
        <div class="flex flex-wrap justify-center gap-2">
          <AppButton @click="openModal('success')" variant="success" size="sm">Success</AppButton>
          <AppButton @click="openModal('warning')" variant="outline" size="sm">Warning</AppButton>
          <AppButton @click="openModal('danger')" variant="danger" size="sm">Danger</AppButton>
          <AppButton @click="openModal('info')" variant="highlight" size="sm">Info</AppButton>
        </div>

        <ActionModal
          v-model="isModalOpen"
          :title="modalVariant === 'success' ? 'Transaksi Sukses!' : (modalVariant === 'danger' ? 'Hapus Akun?' : 'Konfirmasi Aksi')"
          :variant="modalVariant"
        >
          <p>Apakah Anda yakin ingin memproses tindakan ini? Tindakan yang telah disetujui tidak dapat dibatalkan.</p>
        </ActionModal>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="modalSnippet" lang="vue" title="ActionModal.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
