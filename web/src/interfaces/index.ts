export interface SanityImageInterface {
  node: {
    alt: string
    caption?: string
    asset: {
      _ref: string
      id: string
    }
  }
  maxWidth?: number
  aspectRatio?: string | object
}

export interface HtmlElementWithAttributes {
  element: React.ElementType
  ref?: React.Ref<any>
  children?: React.ReactNode
}
