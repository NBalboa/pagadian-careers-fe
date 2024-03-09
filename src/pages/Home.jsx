import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Jobs from "../components/Jobs";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
function Home() {
    return (
        <div>
            <NavBar />
            <Landing />
            <Jobs />
            <Contacts />
            <Footer />
        </div>
    );
}

export default Home;
