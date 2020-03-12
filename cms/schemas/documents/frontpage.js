import FaFileO from "react-icons/lib/fa/file-text-o";
// import PageIcon from '../../custom/components/icons/PageIcon'

export default {
  name: "frontpage",
  title: "Front page",
  type: "document",
  icon: FaFileO,
  initialValue: {
    template: "default"
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'content',
    //   title: 'Content',
    //   type: 'content'
    // },
    {
      name: "mainImage",
      title: "Main image",
      type: "mainImage"
    },
    // {
    //   name: 'menuTheme',
    //   title: 'Menu Theme',
    //   type: 'menuTheme',
    //   fieldset: 'settings'
    // },
    {
      name: "pagebuilder",
      title: "Page builder",
      type: "pagebuilder"
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  preview: {
    select: {
      title: "title",
      image: "mainImage",
      template: "template"
    },
    prepare({ title = "No title", image, template }) {
      return {
        title,
        media: image,
        subtitle: `Template: ${template || "default"}`
      };
    }
  }
};
