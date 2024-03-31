type HtmlTagsPickedForTypography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'strong'
  | 'b'
  | 'em'
  | 'i'
  | 'u'
  | 's'
  | 'sup'
  | 'sub'
  | 'blockquote'
  | 'cite'
  | 'code'
  | 'pre'
  | 'span'
  | 'div'
  | 'label'

export type TypographyHtmlTags = keyof Pick<
  JSX.IntrinsicElements,
  HtmlTagsPickedForTypography
>
