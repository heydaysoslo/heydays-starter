import SectionPreview from "../../custom/components/preview/SectionPreview";
export default {
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "content",
      title: "Content",
      type: "editorMinimal"
    },
    {
      name: "button",
      title: "Button",
      type: "button"
    }
  ],
  preview: {
    select: {
      title: "title",
      content: "content",
      button: "button"
    },
    prepare({ title, button, content }) {
      return {
        title,
        button,
        content,
        subtitle: "Section"
      };
    },
    component: SectionPreview
  }
};
