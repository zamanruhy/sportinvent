import customElement from '@/helpers/custom-element'

// import ToTop from '@/components/common/ToTop.svelte'
// import Collapse from '@/components/common/Collapse.svelte'
// import { Swiper, SwiperSlide } from '@/components/common/swiper'
import { Tabs, Tab, TabPanel, TabList } from '@/components/lib/Tabs'
// import Dialog from '@/components/common/Dialog.svelte'
// import Drawer from '@/components/common/Drawer.svelte'

// export function customElements() {
document.addEventListener('DOMContentLoaded', () => {
  // customElement('app-drawer', Drawer)
  // customElement('app-dialog', Dialog)
  // customElement('app-collapse', Collapse)
  // customElement('app-swiper', Swiper)
  // customElement('app-swiper-slide', SwiperSlide, { outside: true })
  customElement('app-tabs', Tabs)
  customElement('app-tab-list', TabList)
  customElement('app-tab', Tab)
  customElement('app-tab-panel', TabPanel)
  // customElement('app-to-top', ToTop)
})
// }
