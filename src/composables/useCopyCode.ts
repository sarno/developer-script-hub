import { ref } from 'vue'
import { useToast } from './useToast'
import { useHaptic } from './useHaptic'

export function useCopyCode() {
  const isCopied = ref(false)
  const copiedSnippetId = ref<string | null>(null)
  const toast = useToast()
  const { trigger } = useHaptic()

  async function copyText(text: string, snippetId: string = 'default') {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.left = '-999999px'
        textarea.style.top = '-999999px'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
      }

      trigger('light')
      isCopied.value = true
      copiedSnippetId.value = snippetId
      toast.success('Script berhasil disalin ke clipboard!', 2000)

      setTimeout(() => {
        isCopied.value = false
        copiedSnippetId.value = null
      }, 2000)

      return true
    } catch (err) {
      toast.error('Gagal menyalin teks ke clipboard')
      console.error('Failed to copy text: ', err)
      return false
    }
  }

  return {
    isCopied,
    copiedSnippetId,
    copyText
  }
}
