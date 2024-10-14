import { getBlogsContentful, ParseRichText } from "@/contentful/functions/contentful.functions";
import { IAsset } from "@/contentful/types/contentful.types";
import "./style.css";

export default async function ArticlesView() {
    const blogs = await getBlogsContentful();

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 m-6" id="articlescontainerdiv">
                {blogs &&
                    blogs.map((j, idx) => (
                        <div key={idx}>
                            <div>
                                <img src={`https:${(j.fields.image as IAsset)?.fields.file.url}`} className="rounded-t-xl" />
                            </div>
                            <div className="text-left mx-auto w-[97%] flex flex-col">
                                <p className="text-left">{j.fields.title}</p>
                                <ParseRichText document={j.fields.body}/>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};