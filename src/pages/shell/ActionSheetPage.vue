<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import ActionSheet from '@/components/shell/ActionSheet.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Share2, Copy, Bookmark, Flag, QrCode } from 'lucide-vue-next'

const isSheetOpen = ref(false)
const isDetached = ref(true)

const sheetSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import ActionSheet from '@/components/shell/ActionSheet.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Share2, Bookmark, Copy } from 'lucide-vue-next'

const isOpen = ref(false)
<\/script>

<template>
  <AppButton @click="isOpen = true" variant="highlight">
    Buka Action Sheet
  </AppButton>

  <ActionSheet 
    v-model="isOpen"
    title="Opsi Berbagi"
    subtitle="Bagikan Tautan"
    :detached="true"
  >
    <div class="space-y-2">
      <button class="w-full flex items-center p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold">
        <Copy class="w-4 h-4 mr-3 text-[var(--color-highlight)]" />
        Salin Tautan Artikel
      </button>
      <button class="w-full flex items-center p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold">
        <Bookmark class="w-4 h-4 mr-3 text-[var(--color-highlight)]" />
        Simpan ke Bookmark
      </button>
    </div>
  </ActionSheet>
</template>`

const propsMeta = [
  { name: 'v-model', type: 'boolean', default: 'false', description: 'Status visibilitas bottom sheet (terbuka/tertutup)' },
  { name: 'title', type: 'string', default: "''", description: 'Judul utama lembar aksi di bagian header' },
  { name: 'subtitle', type: 'string', default: "''", description: 'Subjudul atau badge kategori kecil berwarna highlight' },
  { name: 'detached', type: 'boolean', default: 'true', description: 'Gaya detached (mengambang dengan margin bawah) atau full bottom flush' }
]

const slotsMeta = [
  { name: 'default', description: 'Konten list opsi atau form di dalam bottom sheet' },
  { name: 'header', description: 'Kustomisasi seluruh bagian header lembar aksi' }
]
</script>

<template>
  <ComponentDoc
    title="ActionSheet"
    description="Bottom sheet modal mobile yang meluncur dari bagian bawah layar dengan gesture swipe-down to dismiss, header terintegrasi, dan opsi detached card mengambang."
    category="Mobile Shell & Overlay"
    badge="Mobile Core"
  >
    <ComponentPreview title="Interactive Bottom Sheet Preview" :code-snippet="sheetSnippet">
      <div class="w-full max-w-sm mx-auto text-center space-y-4">
        <div class="p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] space-y-4">
          <div class="text-xs text-[var(--color-theme-muted)]">
            Uji interaksi swipe-to-dismiss dan backdrop blur:
          </div>
          
          <div class="flex items-center justify-center space-x-2">
            <AppButton @click="isSheetOpen = true" variant="highlight">
              <Share2 class="w-4 h-4 mr-2" />
              <span>Buka Bottom Sheet</span>
            </AppButton>
          </div>

          <label class="inline-flex items-center space-x-2 text-xs text-[var(--color-theme-heading)] cursor-pointer">
            <input type="checkbox" v-model="isDetached" class="rounded-sm text-[var(--color-highlight)]" />
            <span>Mode Detached (Mengambang)</span>
          </label>
        </div>

        <ActionSheet
          v-model="isSheetOpen"
          title="Bagikan Dokumen"
          subtitle="QRIS & Tautan Pembayaran"
          :detached="isDetached"
        >
          <div class="space-y-1.5 py-1">
            <button class="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[var(--color-theme-heading)] transition-colors cursor-pointer">
              <div class="flex items-center space-x-3">
                <div class="p-2 rounded-xl bg-[var(--color-highlight-fade)] text-[var(--color-highlight)]">
                  <QrCode class="w-4 h-4" />
                </div>
                <span>Tampilkan QR Code</span>
              </div>
            </button>

            <button class="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[var(--color-theme-heading)] transition-colors cursor-pointer">
              <div class="flex items-center space-x-3">
                <div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Copy class="w-4 h-4" />
                </div>
                <span>Salin Nomor Rekening</span>
              </div>
            </button>

            <button class="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[var(--color-theme-heading)] transition-colors cursor-pointer">
              <div class="flex items-center space-x-3">
                <div class="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                  <Bookmark class="w-4 h-4" />
                </div>
                <span>Simpan Transaksi Favorit</span>
              </div>
            </button>
          </div>
        </ActionSheet>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="sheetSnippet" lang="vue" title="ActionSheet.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
