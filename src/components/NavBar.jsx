import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <div>
            <nav className="flex justify-between items-center p-5 bg-[#240A34]">
                <h1 className="text-[#EABE6C] font-black text-xl sm:text-2xl">
                    Pagadian Careers
                </h1>
                <ul className="flex items-center justify-between gap-5">
                    <li>
                        <Link
                            to="/"
                            className="hidden md:inline-block text-[#FFEDD8] text-normal md:text-md font-semibold hover:text-[#EABE6C]"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hidden md:inline-block text-[#FFEDD8] text-normal md:text-md font-semibold hover:text-[#EABE6C]"
                        >
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hidden md:inline-block text-[#FFEDD8] text-normal md:text-md font-semibold hover:text-[#EABE6C]"
                        >
                            Hiring
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            href="#"
                            className="hidden sm:inline-block text-[#FFEDD8] uppercase text-normal md:text-md font-semibold hover:bg-[#EABE6C] bg-[#891652] px-4 py-1  rounded-full"
                        >
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hidden sm:inline-block text-[#FFEDD8] uppercase text-normal md:text-md font-semibold hover:bg-[#EABE6C] bg-[#891652] px-4 py-1  rounded-full"
                        >
                            Sign In
                        </a>
                    </li>
                    <div>
                        <button
                            onClick={handleShowMenu}
                            className="inline-block md:hidden text-[#FFEDD8] text-normal md:text-lg font-semibold hover:text-[#EABE6C]"
                        >
                            {showMenu ? "Close" : "Menu"}
                        </button>
                    </div>
                </ul>
            </nav>

            {showMenu ? (
                <ul className="flex flex-col ps-6 pt-6 pb-6 bg-[#240A34] w-full  md:hidden gap-3 transition-all ease-linear ">
                    <Link
                        to="/"
                        className="md:inline-block text-[#FFEDD8] text-normal md:text-md font-semibold hover:text-[#EABE6C]"
                    >
                        Home
                    </Link>
                    <li>
                        <a
                            href="#"
                            className=" md:inline-block text-[#FFEDD8] text-normal md:text-lg font-semibold hover:text-[#EABE6C]"
                        >
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" md:inline-block text-[#FFEDD8] text-normal md:text-lg font-semibold hover:text-[#EABE6C]"
                        >
                            Hiring
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            href="#"
                            className="hidden sm:inline-block text-[#FFEDD8] uppercase text-normal md:text-md font-semibold hover:bg-[#EABE6C] bg-[#891652] px-4 py-1  rounded-full"
                        >
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="sm:hidden md:inline-block text-[#FFEDD8] uppercase text-normal md:text-lg font-semibold hover:bg-[#EABE6C] bg-[#891652] px-4 py-1  rounded-full"
                        >
                            Sign In
                        </a>
                    </li>
                </ul>
            ) : (
                ""
            )}
        </div>
    );
}

export default NavBar;
