// import { useEffect } from "react";

export default function NavBar() {
    return (
        <div className="h-16 bg-teal-400 grid grid-cols-10">
            <div className="col-start-1 row-start-1 col-span-2 text-lg font-bold bg-white m-auto"> Network Call Practice</div>
            <div className="col-start-3 row-start-1 m-auto font-bold">
                <a href="/">Users</a>
            </div>
            <div className="col-start-4 row-start-1 m-auto font-bold">
                <a href="/register">Register</a>
            </div>
            <div className="col-start-8 row-start-1 m-auto font-bold"></div>
        </div>
    );
};