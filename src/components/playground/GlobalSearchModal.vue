<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-vue-next'
import { allComponents } from '@/constants/menu'

const isOpen = defineModel<boolean>({ default: false })
const searchQuery = ref('')
const selectedIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)
const router = useRouter()

const filteredComponents = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return allComponents
  return allComponents.filter(c => 
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.slug.toLowerCase().includes(q)
  )
})

watch(isOpen, async (val) => {
  if (val) {
    searchQuery.value = ''
    selectedIndex.value = 0
    await nextTick()
    inputRef.value?.focus()
  }
})

function navigateTo(slug: string) {
  isOpen.value = false
  router.push(`/${slug}`)
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      isOpen.value = true
    }
    return
  }

  if (e.key === 'Escape') {
    isOpen.value = false
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (selectedIndex.value < filteredComponents.value.length - 1) {
      selectedIndex.value++
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (selectedIndex.value > 0) {
      selectedIndex.value--
    }
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const target = filteredComponents.value[selectedIndex.value]
    if (target) {
      navigateTo(target.slug)
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
        @click.self="isOpen = false"
      >
        <div class="w-full max-w-xl rounded-2xl bg-[var(--color-theme-card)] border border-[var(--color-theme-border)] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <!-- Search input box -->
          <div class="flex items-center px-4 py-3.5 border-b border-[var(--color-theme-border)]">
            <Search class="w-5 h-5 text-[var(--color-theme-muted)] mr-3" />
            <input 
              ref="inputRef"
              v-model="searchQuery"
              type="text"
              placeholder="Cari komponen, form, shell, atau hook..."
              class="flex-1 bg-transparent border-0 outline-hidden text-sm text-[var(--color-theme-heading)] placeholder:text-[var(--color-theme-muted)]"
            />
            <button 
              @click="isOpen = false"
              class="p-1 rounded-lg text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)] cursor-pointer"
            >
              <X class="w-4 h-4" />
            </button>
          </div>

          <!-- Component list -->
          <div class="max-h-80 overflow-y-auto p-2 divide-y divide-[var(--color-theme-border)]/50">
            <div v-if="filteredComponents.length === 0" class="py-12 text-center text-sm text-[var(--color-theme-muted)]">
              Tidak ada komponen yang cocok dengan "{{ searchQuery }}"
            </div>

            <button 
              v-for="(comp, index) in filteredComponents"
              :key="comp.slug"
              @click="navigateTo(comp.slug)"
              @mouseenter="selectedIndex = index"
              class="w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer"
              :class="selectedIndex === index ? 'bg-[var(--color-highlight-fade)] text-[var(--color-highlight)] font-semibold' : 'hover:bg-black/2 dark:hover:bg-white/2 text-[var(--color-theme-heading)]'"
            >
              <div class="flex items-center space-x-3 min-w-0">
                <div class="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-[var(--color-highlight)]">
                  <component :is="comp.icon" class="w-4 h-4" />
                </div>
                <div class="truncate">
                  <div class="text-sm font-semibold flex items-center space-x-2">
                    <span>{{ comp.name }}</span>
                    <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-sm bg-black/5 dark:bg-white/5 text-[var(--color-theme-muted)]">
                      {{ comp.category }}
                    </span>
                  </div>
                  <p class="text-xs text-[var(--color-theme-muted)] truncate font-normal">
                    {{ comp.description }}
                  </p>
                </div>
              </div>

              <div class="flex items-center pl-3">
                <ArrowRight class="w-4 h-4 text-[var(--color-theme-muted)]" />
              </div>
            </button>
          </div>

          <!-- Footer hint -->
          <div class="px-4 py-2.5 bg-black/2 dark:bg-white/2 border-t border-[var(--color-theme-border)] flex items-center justify-between text-[11px] text-[var(--color-theme-muted)]">
            <div class="flex items-center space-x-2">
              <span class="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-black/5 dark:bg-white/5 font-mono">↑↓</span>
              <span>Navigasi</span>
              <span class="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-black/5 dark:bg-white/5 font-mono">↵</span>
              <span>Pilih</span>
            </div>
            <div>
              <span class="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-black/5 dark:bg-white/5 font-mono">ESC</span>
              <span>Tutup</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
