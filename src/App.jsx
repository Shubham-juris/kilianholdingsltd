import "./App.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Sitemaintenance from './Components/Sitemaintenance/Sitemaintenance'
// react router

import AppRouter from "./Router/AppRouter";
import Account_Book from "./Components/account_And_Book_Keeping/Account_Book";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />

      {/* app routes */}
      <AppRouter />

      <Footer />
    </>
  );
}

export default App;
