<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WorkbenchNavbar from '@/components/playground/WorkbenchNavbar.vue'
import WorkbenchSidebar from '@/components/playground/WorkbenchSidebar.vue'
import AppToast from '@/components/feedback/AppToast.vue'
import { useHighlight } from '@/composables/useHighlight'
import { X } from 'lucide-vue-next'

const isMobileSidebarOpen = ref(false)
const { initHighlight } = useHighlight()

onMounted(() => {
  initHighlight()
})
</script>

<template>
  <div class="min-h-screen bg-[var(--color-theme-bg)] flex flex-col font-sans transition-colors duration-200">
    <!-- Top Navbar -->
    <WorkbenchNavbar @toggle-sidebar="isMobileSidebarOpen = true" />

    <!-- Main Container with Sidebar + Content -->
    <div class="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Desktop Sidebar -->
      <div class="hidden lg:block">
        <WorkbenchSidebar />
      </div>

      <!-- Mobile Sidebar Overlay / Drawer -->
      <Teleport to="body">
        <Transition name="fade">
          <div 
            v-if="isMobileSidebarOpen"
            class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs lg:hidden"
            @click="isMobileSidebarOpen = false"
          >
            <div 
              class="w-72 h-full bg-[var(--color-theme-card)] shadow-2xl flex flex-col"
              @click.stop
            >
              <div class="p-4 border-b border-[var(--color-theme-border)] flex items-center justify-between">
                <span class="font-bold text-sm text-[var(--color-theme-heading)]">Daftar Komponen</span>
                <button 
                  @click="isMobileSidebarOpen = false"
                  class="p-1 rounded-lg text-[var(--color-theme-muted)] hover:text-[var(--color-theme-heading)]"
                >
                  <X class="w-5 h-5" />
                </button>
              </div>
              <div class="flex-1 overflow-y-auto">
                <WorkbenchSidebar @navigate="isMobileSidebarOpen = false" />
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>

      <!-- Main Content Area -->
      <main class="flex-1 min-w-0 py-8 lg:pl-10">
        <slot></slot>
      </main>
    </div>

    <!-- Global Floating Toast Notification -->
    <Teleport to="body">
      <AppToast />
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
