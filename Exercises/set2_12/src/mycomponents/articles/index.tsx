import { getBlogsContentful, ParseRichText } from "@/contentful/functions/contentful.functions";
import { IAsset } from "@/contentful/types/contentful.types";
import "./style.css";

export default async function ArticlesView() {
    const blogs = await getBlogsContentful();

    return (
        <div>
            <div className="grid grid-cols-5 gap-4 m-6" id="articlescontainerdiv">
                {blogs &&
                    blogs.map((j, idx) => (
                        <div key={idx}>
                            <div className="articlesimagecontainerdivs">
                                <img src={j.fields.image ? `https:${(j.fields.image as IAsset)?.fields.file.url}` : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}
                                    className="rounded-t-xl h-[100%] w-[100%]" />
                            </div>
                            <div className="text-left mx-auto w-[97%] flex flex-col">
                            <p className="text-left text-lg font-bold">{j.fields.title}</p>
                                <div className="grid grid-cols-2 grid-rows-1">
                                    <p className="col-start-1 row-start-1 text-left font-bold">{j.fields.author}</p>
                                    <p className="col-start-2 row-start-1 text-right text-sm text-gray-500">{j.fields.postDate}</p>
                                </div>
                                <ParseRichText document={j.fields.body}/>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};