import Herosection from "../Components/Herosection/Herosection";
import AboutSection from "../Components/AboutSection/AboutSection";
import WelcomeSection from "../Components/WelcomeSection/WelcomeSection";
import ClientPortel from "../Components/ClientPortel/ClientPortel";

export default function Home() {
  return (
    <>
      <Herosection />
      <WelcomeSection />
      <AboutSection />
      <ClientPortel/>
    </>
  );
}
