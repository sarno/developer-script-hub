<script setup lang="ts">
import ComponentDoc from '@/components/playground/ComponentDoc.vue'
import ComponentPreview from '@/components/playground/ComponentPreview.vue'
import CodeSnippet from '@/components/playground/CodeSnippet.vue'
import ApiTable from '@/components/playground/ApiTable.vue'
import AppFooterBar from '@/components/shell/AppFooterBar.vue'
import { Home, Layers, Plus, Wallet, User } from 'lucide-vue-next'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { id: 'home', label: 'Beranda', icon: Home, to: '/' },
  { id: 'explore', label: 'Jelajah', icon: Layers, to: '/components' },
  { id: 'action', label: 'Bayar', icon: Plus, isCenterAction: true, action: () => alert('Pindai QRIS') },
  { id: 'wallet', label: 'Dompet', icon: Wallet, to: '/wallet', badge: '2' },
  { id: 'profile', label: 'Akun', icon: User, to: '/profile' }
]

const footerSnippet = `<script setup lang="ts">
import AppFooterBar from '@/components/shell/AppFooterBar.vue'
import { Home, Layers, Plus, Wallet, User } from 'lucide-vue-next'
import type { NavItem } from '@/types'

const navs: NavItem[] = [
  { id: 'home', label: 'Beranda', icon: Home, to: '/' },
  { id: 'explore', label: 'Fitur', icon: Layers, to: '/features' },
  { id: 'center', label: 'Bayar', icon: Plus, isCenterAction: true, action: () => openQrModal() },
  { id: 'wallet', label: 'Dompet', icon: Wallet, to: '/wallet', badge: '3' },
  { id: 'profile', label: 'Akun', icon: User, to: '/profile' }
]
<\/script>

<template>
  <!-- Bilah Bawah dengan Tombol Aksi Melayang di Tengah (Variant 6) -->
  <AppFooterBar :items="navs" :style-variant="6" />
</template>`

const propsMeta = [
  { name: 'items', type: 'NavItem[]', required: true, description: 'Daftar item navigasi bawah (id, label, icon, to, isCenterAction, badge, action)' },
  { name: 'styleVariant', type: '1 | 2 | 3 | 4 | 5 | 6', default: '6', description: 'Variasi style Footer Bar AppKit (default 6: floating center circle action button)' }
]
</script>

<template>
  <ComponentDoc
    title="AppFooterBar"
    description="Bilah navigasi bawah mobile (bottom tab bar) dengan safe area bottom handling, haptic tap response, badge counter, dan tombol aksi lingkaran mengambang di tengah (Center Floating Action Button)."
    category="Mobile Shell & Overlay"
    badge="Mobile Core"
  >
    <ComponentPreview title="Footer Bar Preview" :code-snippet="footerSnippet">
      <div class="w-full max-w-sm mx-auto overflow-hidden rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-bg)] shadow-xl relative min-h-[240px] flex flex-col justify-between">
        <div class="p-6 text-xs text-center text-[var(--color-theme-muted)]">
          Area Konten Halaman Mobile di Atas Footer
        </div>

        <div class="relative w-full">
          <AppFooterBar :items="navItems" :style-variant="6" />
        </div>
      </div>
    </ComponentPreview>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Script Penggunaan</h2>
      <CodeSnippet :code="footerSnippet" lang="vue" title="AppFooterBar.vue" />
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-bold text-[var(--color-theme-heading)]">Spesifikasi API</h2>
      <ApiTable :props-list="propsMeta" />
    </section>
  </ComponentDoc>
</template>
