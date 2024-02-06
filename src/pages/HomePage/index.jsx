import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Search from "./components/Search/Search";
import Subscriber from "./components/Subscribers/Subscribers";
import Support from "./components/Support/Support";
import Travelers from "./components/Travelers/Travelers";

const HomePage = () => {
    return (
        <>
            <Home/>
            <Search/>
            <Support/>
            <Info/>
            <Search/>
            <Travelers/>
            <Subscriber/>
        </>
    )
}

export default HomePage;