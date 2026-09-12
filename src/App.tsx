import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import Hero from "./Hero";
import TechSection from "./TechSection";
import Footer from "./footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TechSection />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;