import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import OwnerSection from "./OwnerSection";


function Home(){
    return(
        <>
      <Header />
      <Nav />
      <main>
        <HeroSection />
        <Featured />
        <Testimonials />
        <OwnerSection />
     </main>
      <Footer />
        </>

    )
}
export default Home;