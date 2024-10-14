import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogSkeleton } from "@/contentful/types/contentful.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

type RichTextProps = {
    document: RichTextDocument | undefined;
};
  
export const ParseRichText = ({ document }: RichTextProps) => {
    if (!document) return null;
    return <>{documentToReactComponents(document)}</>
}
  
export const getBlogsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogSkeleton>();
        return data.items.filter((item) => item.sys.contentType.sys.id == "blog");
    } catch(err) {
        console.log(err);
    }
}
  
