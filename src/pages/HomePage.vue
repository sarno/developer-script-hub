<script setup lang="ts">
import { useRouter } from 'vue-router'
import { 
  Sparkles, 
  Layers, 
  Code2, 
  Copy, 
  Smartphone, 
  Palette, 
  MousePointerClick, 
  FormInput, 
  Sheet, 
  Sliders, 
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowRight
} from 'lucide-vue-next'
import { menuCatalog } from '@/constants/menu'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppCard from '@/components/card/AppCard.vue'

const router = useRouter()

const quickInstallCode = `<!-- 1. Pasang dependensi di project Vue 3.5 -->
bun add lucide-vue-next @vueuse/core pinia
bun add -d @tailwindcss/vite tailwindcss

<!-- 2. Import CSS Tokens & Tailwind v4 di main.css -->
@import "tailwindcss";
@import "./tokens.css";

<!-- 3. Salin komponen yang dibutuhkan langsung dari AppKit UI! -->
<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
<\/script>

<template>
  <AppButton variant="highlight" size="md">
    Halo AppKit Mobile
  </AppButton>
</template>`
</script>

<template>
  <div class="space-y-12 pb-16">
    <!-- Hero Banner -->
    <section class="relative overflow-hidden rounded-3xl bg-radial from-[var(--color-highlight-fade)] to-transparent p-8 sm:p-12 border border-[var(--color-theme-border)] shadow-sm">
      <div class="max-w-3xl space-y-4">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-highlight-fade)] border border-[var(--color-highlight)]/20 text-xs font-semibold text-[var(--color-highlight)]">
          <Sparkles class="w-3.5 h-3.5" />
          <span>AppKit Mobile Component Workbench</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-black text-[var(--color-theme-heading)] tracking-tight">
          Katalog Komponen & Pegangan Script Programmer
        </h1>

        <p class="text-base sm:text-lg text-[var(--color-theme-text)] leading-relaxed">
          Dokumentasi interaktif, preview langsung, dan penyedia template/script siap-pakai untuk seluruh 22+ primitive UI AppKit Mobile. Dirancang menggunakan Vue 3.5 Composition API, TypeScript, dan Tailwind CSS v4.
        </p>

        <div class="pt-4 flex flex-wrap gap-3">
          <AppButton @click="router.push('/button')" variant="highlight" size="lg">
            <MousePointerClick class="w-4 h-4 mr-2" />
            <span>Mulai Jelajahi Komponen</span>
          </AppButton>
          <AppButton @click="router.push('/tokens')" variant="outline" size="lg">
            <Palette class="w-4 h-4 mr-2" />
            <span>Design Tokens & 16 Warna</span>
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Quick Features -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AppCard>
        <div class="p-3 rounded-2xl bg-[var(--color-highlight-fade)] text-[var(--color-highlight)] w-fit mb-4">
          <Copy class="w-6 h-6" />
        </div>
        <h3 class="text-base font-bold text-[var(--color-theme-heading)] mb-1">Ambil Script 1-Klik</h3>
        <p class="text-xs text-[var(--color-theme-text)] leading-relaxed">
          Tiap komponen dilengkapi tombol salin kode siap pakai (template, script setup, props) yang bisa langsung ditempelkan ke project programmer.
        </p>
      </AppCard>

      <AppCard>
        <div class="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit mb-4">
          <Smartphone class="w-6 h-6" />
        </div>
        <h3 class="text-base font-bold text-[var(--color-theme-heading)] mb-1">Live Multi-Device Canvas</h3>
        <p class="text-xs text-[var(--color-theme-text)] leading-relaxed">
          Uji perilaku responsif komponen langsung dalam mode Desktop, Tablet (768px), maupun frame iPhone Mobile (390px) dengan safe-area insets.
        </p>
      </AppCard>

      <AppCard>
        <div class="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 w-fit mb-4">
          <Palette class="w-6 h-6" />
        </div>
        <h3 class="text-base font-bold text-[var(--color-theme-heading)] mb-1">16 Skema Warna Dinamis</h3>
        <p class="text-xs text-[var(--color-theme-text)] leading-relaxed">
          Ganti warna aksen highlight secara instan dan periksa bagaimana tombol, badge, tab, dan form merespons perubahan tema tanpa refresh.
        </p>
      </AppCard>
    </section>

    <!-- Quick Start Guide -->
    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-[var(--color-theme-heading)] flex items-center space-x-2">
          <Terminal class="w-5 h-5 text-[var(--color-highlight)]" />
          <span>Cara Cepat Integrasi ke Project</span>
        </h2>
      </div>
      <CodeSnippet 
        :code="quickInstallCode" 
        lang="html" 
        title="Instalasi & Penggunaan Komponen" 
      />
    </section>

    <!-- Categories Directory Grid -->
    <section class="space-y-6">
      <h2 class="text-xl font-bold text-[var(--color-theme-heading)] flex items-center space-x-2">
        <Layers class="w-5 h-5 text-[var(--color-highlight)]" />
        <span>Kategori Komponen Tersedia</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div 
          v-for="group in menuCatalog" 
          :key="group.title"
          class="rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] p-6 shadow-xs hover:border-[var(--color-highlight)] transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-sm font-bold uppercase tracking-wider text-[var(--color-theme-heading)]">
                {{ group.title }}
              </h3>
              <span class="text-xs font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-[var(--color-theme-muted)]">
                {{ group.items.length }} item
              </span>
            </div>

            <ul class="space-y-2 mb-4">
              <li 
                v-for="item in group.items" 
                :key="item.slug"
                @click="router.push(`/${item.slug}`)"
                class="flex items-center justify-between text-xs text-[var(--color-theme-text)] hover:text-[var(--color-highlight)] transition-colors cursor-pointer group"
              >
                <div class="flex items-center space-x-2 truncate">
                  <component :is="item.icon" class="w-3.5 h-3.5 text-[var(--color-highlight)]" />
                  <span class="font-medium truncate">{{ item.name }}</span>
                </div>
                <ArrowRight class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            </ul>
          </div>

          <button 
            @click="router.push(`/${group.items[0]?.slug}`)"
            class="text-xs font-semibold text-[var(--color-highlight)] hover:underline flex items-center space-x-1 cursor-pointer pt-3 border-t border-[var(--color-theme-border)]"
          >
            <span>Buka {{ group.items[0]?.name }}</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
