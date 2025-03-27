import Herosection from "../Components/Herosection/Herosection";
import AboutSection from "../Components/AboutSection/AboutSection";
import WelcomeSection from "../Components/WelcomeSection/WelcomeSection";
import ClientPortel from "../Components/ClientPortel/ClientPortel";
import Disclaimer from "../Components/Disclaimer/Disclaimer";
import FAQDropdown from "../Components/fAskedQuestion/FAQDropdown";

export default function Home() {
  return (
    <>
      <Herosection />
      <WelcomeSection />
      <AboutSection />
      <ClientPortel />
      <Disclaimer />
      <FAQDropdown />
    </>
  );
}
