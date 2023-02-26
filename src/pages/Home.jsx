import Header from "../components/moleculas/Header";
import SectionOneHome from "../components/moleculas/SectionOneHome";
import SectionTwoHome from "../components/moleculas/SectionTwoHome";
import SectionThreeHome from "../components/moleculas/SectionThreeHome";
import Footer from "../components/moleculas/Footer";

function Home() {
    return ( 
        <>
            <Header/>
            <SectionOneHome/>
            <SectionTwoHome/>
            <SectionThreeHome/>
            <Footer/>
        </>
     );
}

export default Home;