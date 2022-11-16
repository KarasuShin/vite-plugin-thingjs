import type { HtmlTagDescriptor } from 'vite'

export const loadScript = (src: string): HtmlTagDescriptor => ({
  tag: 'script',
  attrs: {
    type: 'text/javascript',
    src,
  },
  injectTo: 'head',
})
