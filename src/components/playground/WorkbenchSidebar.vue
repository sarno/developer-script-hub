<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { menuCatalog } from '@/constants/menu'
import { Search, ChevronRight } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'navigate'): void
}>()

const route = useRoute()
const filterQuery = ref('')

const filteredCatalog = computed(() => {
  const q = filterQuery.value.trim().toLowerCase()
  if (!q) return menuCatalog

  return menuCatalog
    .map(group => ({
      ...group,
      items: group.items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      )
    }))
    .filter(group => group.items.length > 0)
})

function isCurrentRoute(slug: string) {
  if (slug === 'tokens' && route.path === '/tokens') return true
  if (slug === 'composables' && route.path === '/composables') return true
  return route.path === `/${slug}`
}
</script>

<template>
  <aside class="w-64 shrink-0 border-r border-[var(--color-theme-border)] bg-[var(--color-theme-card)] flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none transition-colors">
    <!-- Filter search box -->
    <div class="p-3 border-b border-[var(--color-theme-border)]">
      <div class="relative">
        <Search class="absolute left-3 top-2.5 w-3.5 h-3.5 text-[var(--color-theme-muted)]" />
        <input 
          v-model="filterQuery"
          type="text"
          placeholder="Filter komponen..."
          class="w-full pl-8 pr-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-transparent focus:border-[var(--color-highlight)] outline-hidden text-xs text-[var(--color-theme-heading)] placeholder:text-[var(--color-theme-muted)] transition-all"
        />
      </div>
    </div>

    <!-- Navigation Groups List -->
    <div class="flex-1 overflow-y-auto px-3 py-4 space-y-6">
      <div v-for="group in filteredCatalog" :key="group.title" class="space-y-1">
        <h3 class="px-2 text-[11px] font-bold uppercase tracking-wider text-[var(--color-theme-muted)] mb-1.5">
          {{ group.title }}
        </h3>

        <div class="space-y-0.5">
          <router-link
            v-for="item in group.items"
            :key="item.slug"
            :to="`/${item.slug}`"
            @click="emit('navigate')"
            class="group flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all"
            :class="isCurrentRoute(item.slug) ? 'bg-[var(--color-highlight)] text-white shadow-xs font-semibold' : 'text-[var(--color-theme-text)] hover:text-[var(--color-theme-heading)] hover:bg-black/5 dark:hover:bg-white/5'"
          >
            <div class="flex items-center space-x-2.5 min-w-0">
              <component 
                :is="item.icon" 
                class="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"
                :class="isCurrentRoute(item.slug) ? 'text-white' : 'text-[var(--color-highlight)]'"
              />
              <span class="truncate">{{ item.name }}</span>
            </div>

            <span 
              v-if="item.badge" 
              class="text-[9px] px-1.5 py-0.5 rounded-full font-mono font-medium"
              :class="isCurrentRoute(item.slug) ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/5 text-[var(--color-theme-muted)]'"
            >
              {{ item.badge }}
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Footer summary -->
    <div class="p-3 border-t border-[var(--color-theme-border)] bg-black/2 dark:bg-white/2 text-[10px] text-[var(--color-theme-muted)] flex items-center justify-between">
      <span>22 Komponen Mobile</span>
      <span class="font-mono">Vue 3.5+</span>
    </div>
  </aside>
</template>
