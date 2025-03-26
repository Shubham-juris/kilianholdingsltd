import "./App.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import WelcomeSection from "./Components/WelcomeSection/WelcomeSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";

// import Sitemaintenance from './Components/Sitemaintenance/Sitemaintenance'

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Herosection />
      <WelcomeSection />
      <AboutSection />
  

      <ContactUs />
      <AboutUs />

      <Footer />
      
      {/* <Sitemaintenance/> */}
    </>
  );
}

export default App;
