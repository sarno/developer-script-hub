<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check, Terminal } from 'lucide-vue-next'
import { useCopyCode } from '@/composables/useCopyCode'

const {
  code = '',
  lang = 'vue',
  title = '',
  showLineNumbers = true
} = defineProps<{
  code: string
  lang?: string
  title?: string
  showLineNumbers?: boolean
}>()

const { copyText } = useCopyCode()
const isCopied = ref(false)

async function handleCopy() {
  const success = await copyText(code)
  if (success) {
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  }
}

const lines = code.trim().split('\n')
</script>

<template>
  <div class="rounded-2xl border border-[var(--color-theme-border)] bg-[#1e222b] text-[#f8f8f2] shadow-xl overflow-hidden font-mono text-xs my-4">
    <!-- Header bar -->
    <div class="flex items-center justify-between px-4 py-2.5 bg-[#171a21] border-b border-white/5 select-none">
      <div class="flex items-center space-x-2">
        <div class="flex space-x-1.5">
          <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
        </div>
        <span v-if="title" class="text-xs font-semibold text-gray-400 pl-2 border-l border-white/10">{{ title }}</span>
        <span v-else class="text-[11px] uppercase tracking-wider text-gray-400 pl-2 font-medium flex items-center space-x-1">
          <Terminal class="w-3.5 h-3.5 inline text-[var(--color-highlight)]" />
          <span>{{ lang }}</span>
        </span>
      </div>

      <button 
        @click="handleCopy"
        class="flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer active:scale-95"
        :class="isCopied ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10'"
      >
        <component :is="isCopied ? Check : Copy" class="w-3.5 h-3.5" />
        <span>{{ isCopied ? 'Disalin!' : 'Salin Script' }}</span>
      </button>
    </div>

    <!-- Code Body -->
    <div class="p-4 overflow-x-auto leading-relaxed">
      <pre class="flex"><code v-if="showLineNumbers" class="select-none text-gray-600 pr-4 text-right border-r border-white/5 mr-4 font-mono leading-relaxed"><span v-for="(_, idx) in lines" :key="idx" class="block">{{ idx + 1 }}</span></code><code class="font-mono text-gray-200 flex-1 leading-relaxed whitespace-pre">{{ code.trim() }}</code></pre>
    </div>
  </div>
</template>
