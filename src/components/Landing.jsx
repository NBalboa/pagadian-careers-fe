import recruitment from "../assets/recruitment.jpg";
function Landing() {
    return (
        <div className="flex flex-col items-center p-12">
            <div>
                <h2 className="text-center text-2xl text-bold my-2">
                    Find your Dream Job in Pagadian Careers
                </h2>
                <p className="text-center text-lg text-normal mb-4">
                    Discover your next career move with Pagadian Careers! We
                    connect job seekers with top-notch opportunities in Pagadian
                    City and beyond. Find your dream job today and take the next
                    step towards success!
                </p>
            </div>
            <div>
                <img
                    src={recruitment}
                    alt="recruitment image"
                    className="w-full my-4"
                />
            </div>
            <ul className="flex flex-row items-center justify-between gap-5">
                <li>
                    <a
                        href="#"
                        className="text-lg text-white bg-[#891652] px-6 py-2 text-bold hover:bg-white hover:text-[#891652]"
                    >
                        Hire
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="bg-white text-[#891652] px-6 py-2 text-lg text-bold border-2 border-solid border-[#891652] hover:border-none"
                    >
                        Work
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Landing;
