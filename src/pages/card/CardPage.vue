<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppCard from '@/components/card/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Sparkles, ArrowRight } from 'lucide-vue-next'

const cardSnippet = `<script setup lang="ts">
import AppCard from '@/components/card/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
<\/script>

<template>
  <!-- Kartu Standar Putih / Card Theme -->
  <AppCard :elevation="1" rounded="lg">
    <h3 class="font-bold text-sm">Ringkasan Saldo</h3>
    <p class="text-xs text-gray-500 mt-1">Saldo aktif dompet digital Anda.</p>
  </AppCard>

  <!-- Kartu Highlight Gradient -->
  <AppCard color-variant="highlight" rounded="lg">
    <h3 class="font-bold text-sm text-white">Kartu VIP Member</h3>
    <p class="text-xs text-white/80 mt-1">Dapatkan cashback 10% setiap transaksi.</p>
  </AppCard>

  <!-- Kartu Fade Tint -->
  <AppCard color-variant="fade" rounded="lg">
    <span class="text-xs font-semibold">Promo Spesial Hari Ini!</span>
  </AppCard>
</template>`

const propsMeta = [
  { name: 'boxed', type: 'boolean', default: 'true', description: 'Jika true, menerapkan margin horizontal (mx-4) dan border radius' },
  { name: 'rounded', type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'lg'", description: 'Tingkat kebulatan sudut kartu (default 20px)' },
  { name: 'elevation', type: '0 | 1 | 2 | 3', default: '1', description: 'Kekuatan bayangan halus kartu (shadow level)' },
  { name: 'colorVariant', type: "'default' | 'highlight' | 'dark' | 'fade'", default: "'default'", description: 'Varian warna latar kartu' }
]

const slotsMeta = [
  { name: 'default', description: 'Konten body yang dirender di dalam kartu' }
]
</script>

<template>
  <ComponentDoc
    title="AppCard"
    description="Wadah kartu mobile serbaguna dengan rounded corners iOS-style (20px), subtle shadow elevation, dan varian background (default, highlight gradient, dark, fade)."
    category="Card & Container"
  >
    <ComponentPreview title="Interactive Card Preview" :code-snippet="cardSnippet">
      <div class="w-full max-w-md mx-auto space-y-4">
        <AppCard :elevation="1">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-bold text-[var(--color-theme-heading)]">Kartu Tabungan Pintar</h4>
            <span class="text-[10px] font-bold text-[var(--color-highlight)] bg-[var(--color-highlight-fade)] px-2 py-0.5 rounded-full">
              Aktif
            </span>
          </div>
          <p class="text-xs text-[var(--color-theme-text)] mb-4">
            Kelola pengeluaran harian Anda secara otomatis dengan target menabung bulanan.
          </p>
          <AppButton variant="outline" size="sm">
            <span>Lihat Rincian</span>
            <ArrowRight class="w-3.5 h-3.5 ml-1" />
          </AppButton>
        </AppCard>

        <AppCard color-variant="highlight">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold uppercase tracking-wider text-white/80">Black Platinum</span>
            <Sparkles class="w-4 h-4 text-white" />
          </div>
          <div class="text-lg font-mono font-bold text-white tracking-widest my-3">
            •••• •••• •••• 8892
          </div>
          <div class="flex items-center justify-between text-xs text-white/90">
            <span>ALEXANDER WRIGHT</span>
            <span>EXP 08/29</span>
          </div>
        </AppCard>

        <AppCard color-variant="fade">
          <div class="text-xs font-semibold">
            🎉 Cashback 50% hingga Rp 25.000 untuk transaksi QRIS pertama Anda!
          </div>
        </AppCard>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="cardSnippet" lang="vue" title="AppCard.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
