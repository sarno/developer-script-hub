// AppKit UI - Component Library & Workbench Export

// UI Primitives
export { default as AppButton } from './components/ui/AppButton.vue'
export { default as AppDivider } from './components/ui/AppDivider.vue'
export { default as SearchBar } from './components/ui/SearchBar.vue'
export { default as StarRating } from './components/ui/StarRating.vue'

// Form Controls
export { default as AppInput } from './components/form/AppInput.vue'
export { default as AppSelect } from './components/form/AppSelect.vue'
export { default as AppSwitch } from './components/form/AppSwitch.vue'
export { default as AppStepper } from './components/form/AppStepper.vue'
export { default as AppOtpInput } from './components/form/AppOtpInput.vue'
export { default as AppFileUpload } from './components/form/AppFileUpload.vue'

// Cards & Containers
export { default as AppCard } from './components/card/AppCard.vue'
export { default as ImageCard } from './components/card/ImageCard.vue'

// Shell & Overlays
export { default as AppShell } from './components/shell/AppShell.vue'
export { default as AppHeader } from './components/shell/AppHeader.vue'
export { default as AppFooterBar } from './components/shell/AppFooterBar.vue'
export { default as PageTitle } from './components/shell/PageTitle.vue'
export { default as AppDrawer } from './components/shell/AppDrawer.vue'
export { default as ActionSheet } from './components/shell/ActionSheet.vue'
export { default as ActionModal } from './components/shell/ActionModal.vue'

// Navigation & Lists
export { default as AppAccordion } from './components/navigation/AppAccordion.vue'
export { default as AppTabs } from './components/navigation/AppTabs.vue'
export { default as ListGroup } from './components/navigation/ListGroup.vue'
export { default as ListItem } from './components/navigation/ListItem.vue'

// Feedback & Status
export { default as AppBadge } from './components/feedback/AppBadge.vue'
export { default as AppToast } from './components/feedback/AppToast.vue'
export { default as AppSnackbar } from './components/feedback/AppSnackbar.vue'
export { default as SkeletonLoader } from './components/feedback/SkeletonLoader.vue'
export { default as OfflineDetector } from './components/feedback/OfflineDetector.vue'

// Playground & Workbench Components
export { default as ComponentDoc } from './components/playground/ComponentDoc.vue'
export { default as ComponentPreview } from './components/playground/ComponentPreview.vue'
export { default as CodeSnippet } from './components/playground/CodeSnippet.vue'
export { default as ApiTable } from './components/playground/ApiTable.vue'

// Composables
export { useToast } from './composables/useToast'
export { useHaptic } from './composables/useHaptic'
export { useTheme } from './composables/useTheme'
export { useHighlight } from './composables/useHighlight'
export { useScrollHeader } from './composables/useScrollHeader'
export { useOffline } from './composables/useOffline'
export { usePwa } from './composables/usePwa'
export { useCopyCode } from './composables/useCopyCode'

// Types
export * from './types'
