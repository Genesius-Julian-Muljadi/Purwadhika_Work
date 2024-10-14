"use client";

import Link from "next/link";
import "./style.css";

export default function NavBar() {
    return (
        <div>
            <div className="flex" id="navbarcontainerdiv">
                <div className="flex flex-row gap-x-6 ml-4 my-auto px-3">
                    <Link href="/" className="mx-auto">Home</Link>
                    <Link href="/articles" className="mx-auto">Articles</Link>
                </div>
            </div>
        </div>
    );
};