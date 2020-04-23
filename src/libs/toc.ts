import { InterpolationWithTheme } from "@emotion/core"

export type TOCComponentProps = Readonly<{
  TOC: TOC
  className?: string
  css?: InterpolationWithTheme<any>
}>

export type TOC = Readonly<{ items: TOCItems }>

export type TOCItems = {
  url: string
  title: string
  items?: TOCItems
}[]
