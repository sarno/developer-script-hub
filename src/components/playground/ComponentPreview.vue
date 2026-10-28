<script setup lang="ts">
import { ref } from 'vue'
import { Monitor, Tablet, Smartphone, Code, Eye, RefreshCw, Copy, Check } from 'lucide-vue-next'
import { useCopyCode } from '@/composables/useCopyCode'

const {
  title = '',
  codeSnippet = '',
  showDeviceToggle = true
} = defineProps<{
  title?: string
  codeSnippet?: string
  showDeviceToggle?: boolean
}>()

const activeTab = ref<'preview' | 'code'>('preview')
const activeViewport = ref<'desktop' | 'tablet' | 'mobile'>('desktop')
const activeBg = ref<'default' | 'card' | 'dots'>('default')
const reloadKey = ref(0)
const { copyText } = useCopyCode()
const isCopied = ref(false)

function triggerReload() {
  reloadKey.value++
}

async function handleCopy() {
  if (codeSnippet) {
    const success = await copyText(codeSnippet)
    if (success) {
      isCopied.value = true
      setTimeout(() => (isCopied.value = false), 2000)
    }
  }
}
</script>

<template>
  <div class="rounded-3xl border border-[var(--color-theme-border)] bg-[var(--color-theme-card)] shadow-md overflow-hidden my-6 transition-all duration-200">
    <!-- Toolbar -->
    <div class="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-[var(--color-theme-border)] bg-black/2 dark:bg-white/2 select-none">
      <div class="flex items-center space-x-2">
        <span v-if="title" class="text-xs font-bold text-[var(--color-theme-heading)] mr-2">{{ title }}</span>
        
        <!-- Tab Switcher -->
        <div class="inline-flex rounded-xl p-1 bg-black/5 dark:bg-white/5 text-xs font-medium">
          <button 
            @click="activeTab = 'preview'"
            class="flex items-center space-x-1 px-3 py-1 rounded-lg transition-all cursor-pointer"
            :class="activeTab === 'preview' ? 'bg-[var(--color-theme-card)] text-[var(--color-highlight)] shadow-xs font-bold' : 'text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)]'"
          >
            <Eye class="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>
          <button 
            v-if="codeSnippet"
            @click="activeTab = 'code'"
            class="flex items-center space-x-1 px-3 py-1 rounded-lg transition-all cursor-pointer"
            :class="activeTab === 'code' ? 'bg-[var(--color-theme-card)] text-[var(--color-highlight)] shadow-xs font-bold' : 'text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)]'"
          >
            <Code class="w-3.5 h-3.5" />
            <span>Script</span>
          </button>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <!-- Viewport selector (only shown in preview tab) -->
        <div v-if="activeTab === 'preview' && showDeviceToggle" class="hidden sm:inline-flex rounded-xl p-1 bg-black/5 dark:bg-white/5 text-xs">
          <button 
            @click="activeViewport = 'desktop'"
            title="Desktop / Fluid View"
            class="p-1.5 rounded-lg transition-all cursor-pointer"
            :class="activeViewport === 'desktop' ? 'bg-[var(--color-theme-card)] text-[var(--color-highlight)] shadow-xs' : 'text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)]'"
          >
            <Monitor class="w-4 h-4" />
          </button>
          <button 
            @click="activeViewport = 'tablet'"
            title="Tablet (768px)"
            class="p-1.5 rounded-lg transition-all cursor-pointer"
            :class="activeViewport === 'tablet' ? 'bg-[var(--color-theme-card)] text-[var(--color-highlight)] shadow-xs' : 'text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)]'"
          >
            <Tablet class="w-4 h-4" />
          </button>
          <button 
            @click="activeViewport = 'mobile'"
            title="Mobile Phone (390px)"
            class="p-1.5 rounded-lg transition-all cursor-pointer"
            :class="activeViewport === 'mobile' ? 'bg-[var(--color-theme-card)] text-[var(--color-highlight)] shadow-xs' : 'text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)]'"
          >
            <Smartphone class="w-4 h-4" />
          </button>
        </div>

        <!-- Reload state button -->
        <button 
          @click="triggerReload"
          title="Reset / Render Ulang"
          class="p-2 rounded-xl text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)] hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer active:scale-95"
        >
          <RefreshCw class="w-3.5 h-3.5" />
        </button>

        <!-- Direct Copy Button -->
        <button 
          v-if="codeSnippet"
          @click="handleCopy"
          title="Salin Kode Komponen"
          class="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[var(--color-highlight)] text-white text-xs font-semibold shadow-xs hover:brightness-105 active:scale-95 transition-all cursor-pointer"
        >
          <component :is="isCopied ? Check : Copy" class="w-3.5 h-3.5" />
          <span>{{ isCopied ? 'Tersalin' : 'Ambil Script' }}</span>
        </button>
      </div>
    </div>

    <!-- Preview Tab Canvas -->
    <div v-show="activeTab === 'preview'" class="p-6 transition-all duration-300 min-h-[160px] flex items-center justify-center bg-black/[0.015] dark:bg-white/[0.015]">
      <div 
        :key="reloadKey"
        class="transition-all duration-300 mx-auto w-full"
        :class="[
          activeViewport === 'mobile' && 'max-w-[390px] border-4 border-gray-800 dark:border-gray-700 rounded-[36px] p-5 shadow-2xl bg-[var(--color-theme-bg)] my-4',
          activeViewport === 'tablet' && 'max-w-[720px] border border-[var(--color-theme-border)] rounded-2xl p-6 shadow-sm bg-[var(--color-theme-bg)] my-2',
          activeViewport === 'desktop' && 'max-w-full'
        ]"
      >
        <slot></slot>
      </div>
    </div>

    <!-- Code Tab View -->
    <div v-show="activeTab === 'code'" class="p-4 bg-[#1e222b]">
      <pre class="font-mono text-xs text-gray-200 overflow-x-auto p-2 leading-relaxed whitespace-pre"><code>{{ codeSnippet?.trim() }}</code></pre>
    </div>
  </div>
</template>
