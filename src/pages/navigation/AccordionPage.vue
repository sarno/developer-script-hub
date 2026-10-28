<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppAccordion from '@/components/navigation/AppAccordion.vue'
import { HelpCircle, Shield, CreditCard } from 'lucide-vue-next'

const accordionSnippet = `<script setup lang="ts">
import AppAccordion from '@/components/navigation/AppAccordion.vue'
import { HelpCircle, Shield } from 'lucide-vue-next'
<\/script>

<template>
  <div class="rounded-2xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] overflow-hidden">
    <AppAccordion 
      title="Bagaimana cara top up saldo?" 
      subtitle="Bantuan pembayaran"
      :icon="CreditCard"
      :default-open="true"
    >
      <p>Top up dapat dilakukan via Virtual Account BCA, Mandiri, BRI, atau scan QRIS melalui m-banking apa pun.</p>
    </AppAccordion>

    <AppAccordion 
      title="Apakah data saya aman?" 
      :icon="Shield"
    >
      <p>Seluruh transaksi diamankan dengan enkripsi end-to-end 256-bit dan otentikasi PIN biometrik.</p>
    </AppAccordion>
  </div>
</template>`

const propsMeta = [
  { name: 'title', type: 'string', required: true, description: 'Judul teks baris accordion' },
  { name: 'subtitle', type: 'string', default: "''", description: 'Subjudul kecil di bawah judul' },
  { name: 'icon', type: 'Component', default: 'undefined', description: 'Komponen icon Lucide di sebelah kiri' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Kondisi awal accordion langsung terbuka' }
]

const slotsMeta = [
  { name: 'default', description: 'Konten detail yang terlipat/terbuka' }
]
</script>

<template>
  <ComponentDoc
    title="AppAccordion"
    description="Daftar item lipat (collapsible collapse) dengan chevron panah berotasi halus, icon leading opsional, dan transisi buka-tutup responsif."
    category="Navigation & List"
  >
    <ComponentPreview title="Interactive Accordion Preview" :code-snippet="accordionSnippet">
      <div class="w-full max-w-md mx-auto rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] overflow-hidden shadow-xs">
        <AppAccordion
          title="Berapa lama proses verifikasi akun?"
          subtitle="Bantuan Registrasi"
          :icon="HelpCircle"
          :default-open="true"
        >
          Proses verifikasi e-KTP dan foto selfie dilakukan secara otomatis oleh sistem AI dalam waktu kurang dari 5 menit pada jam operasional.
        </AppAccordion>

        <AppAccordion
          title="Metode pembayaran apa saja yang didukung?"
          subtitle="Deposit & Penarikan"
          :icon="CreditCard"
        >
          Kami mendukung transfer bank lokal (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana), dan pembayaran instan QRIS Nasional.
        </AppAccordion>

        <AppAccordion
          title="Bagaimana jika saya lupa PIN transaksi?"
          subtitle="Keamanan Akun"
          :icon="Shield"
        >
          Anda dapat melakukan reset PIN melalui menu Akun > Keamanan > Lupa PIN dengan memasukkan kode OTP yang dikirim ke nomor WhatsApp terdaftar.
        </AppAccordion>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="accordionSnippet" lang="vue" title="AppAccordion.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
