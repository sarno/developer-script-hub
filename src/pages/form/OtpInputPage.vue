<script setup lang="ts">
import { ref } from 'vue'
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppOtpInput from '@/components/form/AppOtpInput.vue'
import { useToast } from '@/composables/useToast'

const toast = useToast()
const otpCode4 = ref('')
const otpCode6 = ref('')

function handleComplete(code: string) {
  toast.success(`Kode OTP Lengkap Terverifikasi: ${code}`)
}

const otpSnippet = `<script setup lang="ts">
import { ref } from 'vue'
import AppOtpInput from '@/components/form/AppOtpInput.vue'

const otp = ref('')

function onOtpComplete(code: string) {
  console.log('Kode OTP selesai dimasukkan:', code)
  // Lakukan request verifikasi API
}
<\/script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <AppOtpInput 
      v-model="otp" 
      :length="4" 
      @complete="onOtpComplete" 
    />
    <p class="text-xs text-gray-500">Nilai: {{ otp }}</p>
  </div>
</template>`

const propsMeta = [
  { name: 'v-model', type: 'string', default: "''", description: 'Nilai gabungan digit OTP' },
  { name: 'length', type: 'number', default: '4', description: 'Jumlah kotak digit input (biasanya 4 atau 6)' }
]

const emitsMeta = [
  { name: 'complete', payload: 'string', description: 'Dipicu otomatis ketika seluruh kotak digit telah terisi' }
]
</script>

<template>
  <ComponentDoc
    title="AppOtpInput"
    description="Input PIN dan OTP verifikasi SMS/WhatsApp 4-6 digit dengan fitur auto-focus ke digit berikutnya, penanganan tombol backspace, dan callback event saat lengkap."
    category="Form Control"
    badge="Mobile Core"
  >
    <ComponentPreview title="Interactive OTP Preview" :code-snippet="otpSnippet">
      <div class="w-full max-w-sm mx-auto space-y-8 text-center">
        <!-- 4 Digits -->
        <div class="p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] shadow-xs space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-[var(--color-theme-muted)]">
            Kode PIN 4-Digit
          </div>
          <div class="flex justify-center">
            <AppOtpInput v-model="otpCode4" :length="4" @complete="handleComplete" />
          </div>
          <div class="text-xs text-[var(--color-theme-muted)]">
            Nilai saat ini: <code class="font-mono font-bold text-[var(--color-highlight)]">{{ otpCode4 || '-' }}</code>
          </div>
        </div>

        <!-- 6 Digits -->
        <div class="p-6 rounded-3xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] shadow-xs space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-[var(--color-theme-muted)]">
            Kode OTP 6-Digit WhatsApp
          </div>
          <div class="flex justify-center">
            <AppOtpInput v-model="otpCode6" :length="6" @complete="handleComplete" />
          </div>
          <div class="text-xs text-[var(--color-theme-muted)]">
            Nilai saat ini: <code class="font-mono font-bold text-[var(--color-highlight)]">{{ otpCode6 || '-' }}</code>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="otpSnippet" lang="vue" title="AppOtpInput.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :emits-list="emitsMeta" />
    </section>
  </ComponentDoc>
</template>
