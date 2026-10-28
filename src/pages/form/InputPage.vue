<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppInput from '@/components/form/AppInput.vue'
import { User, Mail, Lock, Phone } from 'lucide-vue-next'

const username = ref('john_doe')
const email = ref('')
const password = ref('')
const phone = ref('')

const inputSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import AppInput from '@/components/form/AppInput.vue'
import { Mail, Lock, User } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
<\/script>

<template>
  <!-- Input Floating Label dengan Validasi Sukses -->
  <AppInput
    v-model="email"
    label="Alamat Email"
    type="email"
    :icon="Mail"
    :valid="email.includes('@')"
  />

  <!-- Input Password dengan Status Error -->
  <AppInput
    v-model="password"
    label="Kata Sandi"
    type="password"
    :icon="Lock"
    required
    :valid="password.length >= 8 ? true : (password.length > 0 ? false : null)"
    error-message="Kata sandi minimal 8 karakter"
  />
</template>`

const propsMeta = [
  { name: 'v-model', type: 'string | number', default: "''", description: 'Nilai data input reaktif' },
  { name: 'label', type: 'string', required: true, description: 'Label floating input' },
  { name: 'type', type: 'string', default: "'text'", description: 'Tipe HTML input (text, email, password, tel, number)' },
  { name: 'icon', type: 'Component', default: 'undefined', description: 'Komponen icon Lucide di sebelah kiri' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Menandai input wajib diisi dengan bintang merah' },
  { name: 'valid', type: 'boolean | null', default: 'null', description: 'Status validasi: true (hijau), false (merah), null (netral)' },
  { name: 'errorMessage', type: 'string', default: "''", description: 'Pesan kesalahan yang tampil saat valid=false' }
]
</script>

<template>
  <ComponentDoc
    title="AppInput"
    description="Input form mobile dengan floating label halus, icon leading, status validasi visual (hijau/merah), dan pesan error adaptif."
    category="Form Control"
  >
    <ComponentPreview title="Interactive Form Preview" :code-snippet="inputSnippet">
      <div class="w-full max-w-md mx-auto space-y-4">
        <AppInput
          v-model="username"
          label="Nama Pengguna"
          :icon="User"
          required
          :valid="username.length >= 3"
        />

        <AppInput
          v-model="email"
          label="Email Kerja"
          type="email"
          :icon="Mail"
          :valid="email.length > 0 ? email.includes('@') : null"
          error-message="Format alamat email tidak valid"
        />

        <AppInput
          v-model="password"
          label="Kata Sandi"
          type="password"
          :icon="Lock"
          required
          :valid="password.length >= 6 ? true : (password.length > 0 ? false : null)"
          error-message="Kata sandi minimal 6 karakter"
        />
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="inputSnippet" lang="vue" title="AppInput.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
