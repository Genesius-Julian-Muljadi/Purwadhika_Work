import Link from "next/link";
import "../index.css";

export default function HomeView() {
    return (
        <div className="mt-6 grid">
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 grid-rows-1 gap-2 mx-auto h-[35rem] w-[86rem]">
                    <div className="col-start-1 row-start-1 rounded-3xl shadow-md shadow-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </div>
                    <div className="col-start-2 row-start-1 rounded-3xl shadow-md shadow-slate-600">
                        insert img here
                    </div>
                </div>
                <Link className="rounded-lg shadow-md shadow-slate-600 px-12 m-auto bg-sky-200" href="/articles">
                    Articles
                </Link>
            </div>
        </div>
    );
};