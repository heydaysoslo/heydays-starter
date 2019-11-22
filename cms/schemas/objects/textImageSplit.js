import TextImageSplitPreview from "../../custom/components/preview/TextImageSplitPreview";

export default {
  name: "textImageSplit",
  title: "Text Image Split",
  type: "object",
  fieldsets: [
    { name: "image", title: "Image" },
    { name: "content", title: "Content" }
  ],
  fields: [
    {
      name: "textOnTheRight",
      title: "Text On The Right",
      type: "boolean"
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "content"
    },
    {
      name: "content",
      title: "Content",
      type: "editorMinimal",
      fieldset: "content"
    },
    {
      name: "button",
      title: "Button",
      type: "button"
    },
    {
      name: "image",
      title: "Image",
      type: "mainImage",
      fieldset: "image"
    },
    {
      name: "aspect",
      title: "Aspect Ratio",
      type: "aspect",
      fieldset: "image"
    }
  ],
  preview: {
    select: {
      title: "title",
      content: "content",
      imageUrl: "image.asset.url",
      textOnTheRight: "textOnTheRight"
    },
    prepare({ imageUrl, title, content, textOnTheRight }) {
      return {
        textOnTheRight,
        title,
        content,
        imageUrl,
        subtitle: "Text Image Split"
      };
    },
    component: TextImageSplitPreview
  }
};
