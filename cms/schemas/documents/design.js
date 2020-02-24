export default {
  name: "design",
  title: "Design",
  type: "document",
  fields: [
    {
      name: "colors",
      title: "Colors",
      type: "object",
      options: {
        collapsible: true
      },
      fields: [
        {
          name: "primary",
          title: "Primary",
          type: "string"
        },
        {
          name: "secondary",
          title: "Secondary",
          type: "string"
        },
        {
          name: "text",
          title: "Text",
          type: "string"
        },
        {
          name: "border",
          title: "Border",
          type: "string"
        },
        {
          name: "background",
          title: "Background",
          type: "string"
        }
      ]
    },
    {
      name: "spacingUnits",
      title: "Spacing Units",
      type: "object",
      options: {
        collapsible: true
      },
      fields: [
        {
          name: "xs",
          title: "Extra small",
          type: "string"
        },
        {
          name: "sm",
          title: "Small",
          type: "string"
        },
        {
          name: "md",
          title: "Medium",
          type: "string"
        },
        {
          name: "lg",
          title: "Large",
          type: "string"
        },
        {
          name: "xl",
          title: "Extra Large",
          type: "string"
        },
        {
          name: "section",
          title: "Section",
          description: "Spacing between sections",
          type: "string"
        },
        {
          name: "gutter",
          title: "Gutter",
          description: "Usually used in grid",
          type: "string"
        }
      ]
    },
    {
      name: "reponsiveSpacing",
      title: "Reponsive Spacing",
      type: "object",
      options: {
        collapsible: true
      },
      fields: [
        {
          name: "xs",
          title: "Extra Small",
          type: "responsiveSpacing"
        },
        {
          name: "sm",
          title: "Small",
          type: "responsiveSpacing"
        },
        {
          name: "md",
          title: "Medium",
          type: "responsiveSpacing"
        },
        {
          name: "lg",
          title: "Large",
          type: "responsiveSpacing"
        }
      ]
    },
    {
      name: "fonts",
      title: "Font sizes",
      type: "object",
      options: {
        collapsible: true
      },
      fields: [
        {
          name: "medium",
          title: "Display",
          type: "object",
          fields: [
            {
              name: "fontSize",
              title: "Font size",
              type: "string"
            },
            {
              name: "letterSpacing",
              title: "Letter spacing",
              type: "string"
            }
          ]
        }
      ]
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Some frontend will require a slug to be set to be able to show the post",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        maxLength: 96
      }
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
      name: "template",
      title: "Template",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Contact", value: "contact" },
          { title: "News", value: "news" }
        ]
      }
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
  ]
};
