import MdPlayCircleOutline from 'react-icons/lib/md/play-circle-outline'

export default {
  name: 'videoEmbed',
  title: 'Video',
  subtitle: 'Embed',
  type: 'object',
  icon: MdPlayCircleOutline,
  description:
    'Paste your Vimeo or Youtube link. Do not add embed code just the link to the video.',
  fields: [
    {
      name: 'url',
      title: 'Url',
      type: 'url'
    }
  ]
}
