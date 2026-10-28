import {
  MousePointerClick,
  Minus,
  Search,
  Star,
  FormInput,
  SlidersHorizontal,
  ToggleLeft,
  KeyRound,
  UploadCloud,
  CreditCard,
  Image,
  Smartphone,
  PanelTop,
  PanelBottom,
  Heading,
  Menu,
  Sheet,
  HelpCircle,
  FolderTree,
  Sliders,
  List,
  ShieldCheck,
  Bell,
  MessageSquare,
  Hourglass,
  WifiOff,
  Palette,
  Terminal,
  Calculator
} from 'lucide-vue-next'
import type { ComponentCatalogItem } from '@/types'

export interface MenuGroup {
  title: string
  items: ComponentCatalogItem[]
}

export const menuCatalog: MenuGroup[] = [
  {
    title: 'Design Foundation',
    items: [
      {
        name: 'Design Tokens',
        slug: 'tokens',
        category: 'ui',
        description: '16 Accent color highlights, dark mode semantic tokens, border radii, dan safe-area insets.',
        icon: Palette,
        badge: '16 Colors'
      },
      {
        name: 'Composables',
        slug: 'composables',
        category: 'composables',
        description: 'Reactive hooks: useToast, useHaptic, useTheme, useHighlight, useScrollHeader, useOffline, usePwa.',
        icon: Terminal,
        badge: '7 Hooks'
      }
    ]
  },
  {
    title: 'UI Primitives',
    items: [
      {
        name: 'AppButton',
        slug: 'button',
        category: 'ui',
        description: 'Tombol interaktif dengan 5 varian, 3 ukuran, haptic feedback, status loading & disabled.',
        icon: MousePointerClick,
        badge: 'Core'
      },
      {
        name: 'AppDivider',
        slug: 'divider',
        category: 'ui',
        description: 'Pemisah konten horizontal dengan opsi teks/label di tengah, margin, dan inset custom.',
        icon: Minus
      },
      {
        name: 'SearchBar',
        slug: 'search-bar',
        category: 'ui',
        description: 'Bar pencarian mobile dengan tombol clear cepat, autofocus, dan tag saran trending.',
        icon: Search
      },
      {
        name: 'StarRating',
        slug: 'star-rating',
        category: 'ui',
        description: 'Komponen rating bintang interaktif atau read-only dengan dukungan desimal & skor teks.',
        icon: Star
      }
    ]
  },
  {
    title: 'Form & Input',
    items: [
      {
        name: 'AppInput',
        slug: 'input',
        category: 'form',
        description: 'Input teks bergaya AppKit (floating label, standard, borderless) dengan validasi & icon.',
        icon: FormInput,
        badge: 'v-model'
      },
      {
        name: 'AppSelect',
        slug: 'select',
        category: 'form',
        description: 'Dropdown pemilihan select mobile-optimized dengan floating label dan custom chevron.',
        icon: SlidersHorizontal
      },
      {
        name: 'AppSwitch',
        slug: 'switch',
        category: 'form',
        description: 'Toggle switch iOS-style dengan haptic feedback dan label helper interaktif.',
        icon: ToggleLeft
      },
      {
        name: 'AppStepper',
        slug: 'stepper',
        category: 'form',
        description: 'Kontrol kuantitas angka numerik dengan batas min/max, step custom, dan tombol plus/minus.',
        icon: Calculator
      },
      {
        name: 'AppOtpInput',
        slug: 'otp-input',
        category: 'form',
        description: 'Input PIN / kode OTP 4-6 digit dengan auto-focus jump dan penanganan backspace.',
        icon: KeyRound,
        badge: 'Mobile'
      },
      {
        name: 'AppFileUpload',
        slug: 'file-upload',
        category: 'form',
        description: 'Area drag & drop atau tap-to-upload foto/dokumen dengan preview thumbnail gambar.',
        icon: UploadCloud
      }
    ]
  },
  {
    title: 'Cards & Containers',
    items: [
      {
        name: 'AppCard',
        slug: 'card',
        category: 'card',
        description: 'Container kartu mobile serbaguna dengan rounded 20px, subtle border, shadow, dan header/footer slot.',
        icon: CreditCard
      },
      {
        name: 'ImageCard',
        slug: 'image-card',
        category: 'card',
        description: 'Kartu media gambar visual dengan gradient overlay gelap, badge status, title, dan subtitle.',
        icon: Image
      }
    ]
  },
  {
    title: 'Mobile Shell & Overlays',
    items: [
      {
        name: 'AppShell',
        slug: 'shell',
        category: 'shell',
        description: 'Wadah utama aplikasi mobile dengan safe area management, offline banner, dan global toast.',
        icon: Smartphone,
        badge: 'Shell'
      },
      {
        name: 'AppHeader',
        slug: 'header',
        category: 'shell',
        description: 'Header navigasi atas dengan title dinamis, tombol back, tombol drawer hamburger, dan theme switcher.',
        icon: PanelTop
      },
      {
        name: 'AppFooterBar',
        slug: 'footer-bar',
        category: 'shell',
        description: 'Navigasi bawah mobile dengan 5 item menu dan opsi tombol aksi bulat tengah (center floating circle).',
        icon: PanelBottom,
        badge: 'Bottom Bar'
      },
      {
        name: 'PageTitle',
        slug: 'page-title',
        category: 'shell',
        description: 'Hero heading halaman mobile dengan badge status, judul besar bold, dan subtitle deskriptif.',
        icon: Heading
      },
      {
        name: 'AppDrawer',
        slug: 'drawer',
        category: 'shell',
        description: 'Sidebar laci navigasi samping mobile dengan navigasi link, toggle dark mode, dan pemilih warna highlight.',
        icon: Menu
      },
      {
        name: 'ActionSheet',
        slug: 'action-sheet',
        category: 'shell',
        description: 'Bottom sheet modal yang meluncur dari bawah layar dengan drag handle bar dan backdrop blur.',
        icon: Sheet,
        badge: 'Modal'
      },
      {
        name: 'ActionModal',
        slug: 'action-modal',
        category: 'shell',
        description: 'Dialog modal konfirmasi di tengah layar untuk aksi kritis, pesan sukses, atau dialog peringatan.',
        icon: HelpCircle
      }
    ]
  },
  {
    title: 'Navigation & Lists',
    items: [
      {
        name: 'AppAccordion',
        slug: 'accordion',
        category: 'navigation',
        description: 'Daftar item lipat accordion dengan animasi ekspansi halus dan indikator chevron berotasi.',
        icon: FolderTree
      },
      {
        name: 'AppTabs',
        slug: 'tabs',
        category: 'navigation',
        description: 'Tab navigasi segmented (gaya pill, underline, atau button) dengan icon dan counter badge.',
        icon: Sliders
      },
      {
        name: 'ListGroup & ListItem',
        slug: 'list-group',
        category: 'navigation',
        description: 'Grup menu daftar bergaya pengaturan iOS/Android dengan leading icon, chevron, dan badge info.',
        icon: List
      }
    ]
  },
  {
    title: 'Feedback & Status',
    items: [
      {
        name: 'AppBadge',
        slug: 'badge',
        category: 'feedback',
        description: 'Badge penanda status atau counter dengan 5 varian warna, ukuran sm/md/lg, dan rounded full.',
        icon: ShieldCheck
      },
      {
        name: 'AppToast',
        slug: 'toast',
        category: 'feedback',
        description: 'Notifikasi toast melayang di bagian atas dengan durasi auto-dismiss dan icon semantik.',
        icon: Bell
      },
      {
        name: 'AppSnackbar',
        slug: 'snackbar',
        category: 'feedback',
        description: 'Pesan banner snackbar di bagian bawah layar dengan tombol aksi interaktif (mis. Undo/Batal).',
        icon: MessageSquare
      },
      {
        name: 'SkeletonLoader',
        slug: 'skeleton',
        category: 'feedback',
        description: 'Placeholder shimmer animasi untuk meniru layout teks, avatar lingkaran, kartu, dan tombol saat memuat data.',
        icon: Hourglass
      },
      {
        name: 'OfflineDetector',
        slug: 'offline-detector',
        category: 'feedback',
        description: 'Pemberitahuan otomatis ketika koneksi internet terputus dan transisi saat kembali online.',
        icon: WifiOff
      }
    ]
  }
]

export const allComponents: ComponentCatalogItem[] = menuCatalog.flatMap(g => g.items)
