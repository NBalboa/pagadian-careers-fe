import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-white shadow ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col items-center">
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <Link
                                to="/"
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Contacts
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Hiring
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center ">
                    © 2024{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Pagadian Careers
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
