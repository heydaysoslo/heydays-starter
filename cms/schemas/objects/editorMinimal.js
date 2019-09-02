import External from 'react-icons/lib/fa/external-link'

export default {
  title: 'Editor Minimal',
  name: 'editorMinimal',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Large text', value: 'large' },
        { title: 'Small text', value: 'small' }
        // { title: 'Quote', value: 'blockquote' }
      ],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' }
          // { title: 'Emphasis', value: 'em' }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'link'
          }
        ]
      }
    }
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // {
    //   type: 'articleImage'
    // },
    // {
    //   type: 'quote'
    // },
    // {
    //   type: 'button'
    // },
  ]
}
