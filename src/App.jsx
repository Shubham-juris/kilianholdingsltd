import "./App.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import WelcomeSection from "./Components/WelcomeSection/WelcomeSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Footer from "./Components/Footer/Footer";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import Account_Book from "./Components/account_And_Book_Keeping/Account_Book";
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
      <Disclaimer />
      <Account_Book />
      <AboutUs />
      <ContactUs />
      <Footer />
      
      {/* <Sitemaintenance/> */}
    </>
  );
}

export default App;
