import FaFileText from 'react-icons/lib/fa/file-text-o'

export default {
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'editor'
    }
  ],
  preview: {
    select: {
      content: 'body'
    },
    prepare({ content }) {
      return {
        title:
          content[0].children.length > 0
            ? content.filter(block => block._type === 'block')[0].children[0]
                .text
            : 'No content',
        subtitle: 'Text section',
        media:
          content[0].children.length > 0 &&
          content.filter(block => block._type === 'articleImage').length > 0
            ? content.filter(block => block._type === 'articleImage')[0].asset
            : FaFileText
      }
    }
  }
}
