import type { ProxyOptions } from 'vite'

export default function setDevProxy(devServer: string, projectId: string, ssl?: boolean): Record<string, ProxyOptions> {
  const host = `${ssl ? 'https' : 'http'}://${devServer}/`
  return {
    '/thingjsRoot': {
      target: host,
      rewrite: path => path.replace(/^\/thingjsRoot/, ''),
    },
    '/thingjsProject': {
      target: `${host}/project/${projectId}`,
      rewrite: path => path.replace(/^\/thingjsProject/, ''),
    },
  }
}
