import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogFields {
    title: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    author?: EntryFieldTypes.Symbol;
    postDate?: EntryFieldTypes.Symbol;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export interface IAsset {
    sys: { id: string };
    fields: {
        file: {
            url: string;
            details?: any;
            fileName?: string;
            contentType?: string;
        }
    }
}