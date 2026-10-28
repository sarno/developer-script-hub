<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppSwitch from '@/components/form/AppSwitch.vue'

const notificationEnabled = ref(true)
const biometricEnabled = ref(false)
const darkThemeEnabled = ref(false)

const switchSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import AppSwitch from '@/components/form/AppSwitch.vue'

const isNotificationOn = ref(true)
const isBiometricOn = ref(false)
<\/script>

<template>
  <!-- Switch Gaya iOS dengan Haptic Feedback -->
  <AppSwitch 
    v-model="isNotificationOn" 
    label="Izinkan Notifikasi Push" 
  />

  <AppSwitch 
    v-model="isBiometricOn" 
    label="Kunci Sidik Jari (Biometrik)" 
  />
</template>`

const propsMeta = [
  { name: 'v-model', type: 'boolean', default: 'false', description: 'Status switch aktif/nonaktif' },
  { name: 'label', type: 'string', default: "''", description: 'Teks deskripsi di sebelah kiri tombol' },
  { name: 'variant', type: "'ios' | 'android'", default: "'ios'", description: 'Gaya animasi visual toggle' }
]
</script>

<template>
  <ComponentDoc
    title="AppSwitch"
    description="Sakelar toggle interaktif bergaya iOS & Android dengan getaran haptic saat diklik dan transisi slider mulus."
    category="Form Control"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="switchSnippet">
      <div class="w-full max-w-md mx-auto p-4 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] divide-y divide-[var(--color-theme-border)]">
        <AppSwitch 
          v-model="notificationEnabled" 
          label="Notifikasi Transaksi Realtime" 
        />
        <AppSwitch 
          v-model="biometricEnabled" 
          label="Autentikasi FaceID / Fingerprint" 
        />
        <AppSwitch 
          v-model="darkThemeEnabled" 
          label="Sinkronkan Tema Otomatis" 
        />
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="switchSnippet" lang="vue" title="AppSwitch.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
