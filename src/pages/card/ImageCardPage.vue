<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import ImageCard from '@/components/card/ImageCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { Sparkles, MapPin } from 'lucide-vue-next'

const sampleImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'

const imageCardSnippet = `<script setup lang="ts">
import ImageCard from '@/components/card/ImageCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { MapPin } from 'lucide-vue-next'

const bgUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
<\/script>

<template>
  <ImageCard 
    :src="bgUrl" 
    :height="260" 
    overlay="gradient" 
    :overlay-opacity="80"
    effect="scale"
  >
    <template #top>
      <span class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-md">
        <MapPin class="w-3.5 h-3.5 mr-1 text-[var(--color-highlight)]" />
        Bali, Indonesia
      </span>
    </template>

    <template #bottom>
      <h3 class="text-white font-bold text-lg">Resort Tropis Mewah</h3>
      <p class="text-white/80 text-xs mt-1 mb-3">Nikmati diskon 30% liburan akhir tahun.</p>
      <AppButton variant="highlight" size="sm">Pesan Kamar</AppButton>
    </template>
  </ImageCard>
</template>`

const propsMeta = [
  { name: 'src', type: 'string', required: true, description: 'URL gambar latar belakang kartu' },
  { name: 'height', type: "'cover' | 'cover-card' | 'cover-full' | number", default: '300', description: 'Tinggi kartu dalam piksel atau preset viewport cover' },
  { name: 'overlay', type: "'gradient' | 'black' | 'white' | 'none'", default: "'gradient'", description: 'Tipe lapisan overlay di atas gambar agar teks kontras dan terbaca' },
  { name: 'overlayOpacity', type: 'number', default: '70', description: 'Tingkat opasitas overlay (0-100)' },
  { name: 'effect', type: "'scale' | 'rotate' | 'blur' | 'grayscale' | 'none'", default: "'none'", description: 'Efek interaktif gambar saat hover/active' },
  { name: 'boxed', type: 'boolean', default: 'true', description: 'Menerapkan margin dan sudut melengkung' }
]

const slotsMeta = [
  { name: 'top', description: 'Slot konten di bagian atas kartu' },
  { name: 'center', description: 'Slot konten di bagian tengah kartu' },
  { name: 'bottom', description: 'Slot konten di bagian bawah kartu' }
]
</script>

<template>
  <ComponentDoc
    title="ImageCard"
    description="Kartu media visual bergambar dengan lapisan gradient overlay gelap agar tipografi tetap tajam, efek hover scale halus, dan slot fleksibel (top, center, bottom)."
    category="Card & Container"
  >
    <ComponentPreview title="Interactive Preview" :code-snippet="imageCardSnippet">
      <div class="w-full max-w-sm mx-auto">
        <ImageCard 
          :src="sampleImage" 
          :height="280" 
          overlay="gradient" 
          :overlay-opacity="80"
          effect="scale"
        >
          <template #top>
            <span class="inline-flex items-center text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-md">
              <MapPin class="w-3.5 h-3.5 mr-1 text-[var(--color-highlight)]" />
              Nusa Penida, Bali
            </span>
          </template>

          <template #bottom>
            <h3 class="text-white font-bold text-base">Paket Tour Eksklusif</h3>
            <p class="text-white/80 text-xs mt-1 mb-3">Jelajahi keindahan pantai tersembunyi dengan pemandu lokal berpengalaman.</p>
            <AppButton variant="highlight" size="sm">
              <Sparkles class="w-3.5 h-3.5 mr-1.5" />
              <span>Mulai Booking</span>
            </AppButton>
          </template>
        </ImageCard>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="imageCardSnippet" lang="vue" title="ImageCard.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" :slots-list="slotsMeta" />
    </section>
  </ComponentDoc>
</template>
