<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import ListGroup from '@/components/navigation/ListGroup.vue'
import ListItem from '@/components/navigation/ListItem.vue'
import AppSwitch from '@/components/form/AppSwitch.vue'
import { User, Bell, Shield, Wallet, Moon, ChevronRight } from 'lucide-vue-next'

const pushEnabled = ref(true)

const listGroupSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import ListGroup from '@/components/navigation/ListGroup.vue'
import ListItem from '@/components/navigation/ListItem.vue'
import AppSwitch from '@/components/form/AppSwitch.vue'
import { User, Bell, Shield, Wallet } from 'lucide-vue-next'

const isNotificationOn = ref(true)
<\/script>

<template>
  <ListGroup title="Pengaturan Akun" :boxed="true">
    <ListItem
      title="Informasi Pribadi"
      subtitle="Nama, email & no telepon"
      :icon="User"
      to="/profile"
    />

    <ListItem
      title="Rekening & Kartu"
      subtitle="3 kartu terhubung"
      :icon="Wallet"
      badge="Utama"
      to="/wallet"
    />

    <ListItem
      title="Notifikasi Promo"
      :icon="Bell"
      :show-chevron="false"
    >
      <template #right>
        <AppSwitch v-model="isNotificationOn" />
      </template>
    </ListItem>
  </ListGroup>
</template>`

const listGroupProps = [
  { name: 'title', type: 'string', default: "''", description: 'Judul seksi daftar kapital abu-abu di atas grup' },
  { name: 'boxed', type: 'boolean', default: 'true', description: 'Menerapkan sudut rounded-2xl dan margin samping (mx-4)' }
]

const listItemProps = [
  { name: 'title', type: 'string', required: true, description: 'Judul teks baris menu utama' },
  { name: 'subtitle', type: 'string', default: "''", description: 'Subjudul atau keterangan kecil di bawah judul' },
  { name: 'icon', type: 'Component', default: 'undefined', description: 'Komponen icon Lucide di kotak rounded kiri' },
  { name: 'iconBg', type: 'string', default: "''", description: 'Warna background icon kustom' },
  { name: 'avatarSrc', type: 'string', default: "''", description: 'URL foto profil avatar jika bukan icon' },
  { name: 'badge', type: 'string | number', default: "''", description: 'Teks badge di sebelah kanan' },
  { name: 'showChevron', type: 'boolean', default: 'true', description: 'Menampilkan panah chevron kanan' },
  { name: 'to', type: 'string', default: "''", description: 'Rute Vue Router tujuan saat baris diklik' }
]
</script>

<template>
  <ComponentDoc
    title="ListGroup & ListItem"
    description="Komponen daftar menu pengaturan mobile bergaya iOS Settings & Android Material dengan avatar/icon bulat, subtitle informasi, chevron panah, dan slot kontrol kanan kustom (misal switch toggle)."
    category="Navigation & List"
    badge="Settings List"
  >
    <ComponentPreview title="Interactive List Preview" :code-snippet="listGroupSnippet">
      <div class="w-full max-w-md mx-auto space-y-4">
        <ListGroup title="Keamanan & Privasi">
          <ListItem
            title="Profil Pengguna"
            subtitle="alexander@appkit.dev"
            :icon="User"
            badge="Terverifikasi"
          />

          <ListItem
            title="Metode Pembayaran"
            subtitle="BCA Virtual Account • 4421"
            :icon="Wallet"
          />

          <ListItem
            title="Keamanan Biometrik"
            subtitle="FaceID saat membuka dompet"
            :icon="Shield"
            :show-chevron="false"
          >
            <template #right>
              <AppSwitch v-model="pushEnabled" />
            </template>
          </ListItem>
        </ListGroup>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="listGroupSnippet" lang="vue" title="ListGroup.vue & ListItem.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API ListGroup</h2>
      <ApiTable :props-list="listGroupProps" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API ListItem</h2>
      <ApiTable :props-list="listItemProps" />
    </section>
  </ComponentDoc>
</template>
