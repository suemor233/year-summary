export interface SiteConfig {
  baseConfig?: BaseConfig
  pagesConfig?: PageConfig
  headerConfig?: HeaderConfig
  mxConfig?: MxConfig
}

interface BaseConfig {
  siteTitle?: string
  backgroundImage?: string
}

export interface PageConfig {
  firstConfig?: universalPageConfig
  centerConfig?: CenterConfig[]
  lastConfig?: universalPageConfig
}

interface universalPageConfig {
  title?: string
  subtitle?: string
}

export interface CenterConfig {
  title?: string
  subtitle?: string
  description?: string
  image?: {
    src: string
    width?: number
    height?: number
  }
}

interface MxConfig {
  apiEndpoint?: string
  note?: string
}

interface HeaderConfig {
  avatar?: string
  title?: string
  github?: string
}

export const defineConfig = (config: SiteConfig): SiteConfig => config
