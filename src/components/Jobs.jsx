import Job from "./Job";

function Jobs() {
    return (
        <div>
            <h2 className="mx-4 my-10 text-2xl text-[#891652]">Recent Jobs</h2>
            <div className="flex flex-col">
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
            </div>
        </div>
    );
}

export default Jobs;
