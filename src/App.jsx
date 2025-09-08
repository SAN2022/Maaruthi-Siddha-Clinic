import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialMediaStats from "./components/Social Media Stats";
import BookAppointment from "./components/Book Appointment";
import Diseases from "./components/Diseases";
import Aathichudi from "./components/Aathichudi";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      <Diseases />
      <Aathichudi />
      <Testimonials />
      {/* <SocialMediaStats /> */}
      <Contact />
      <BookAppointment/>
      <Footer />
    </>
  );
}

export default App;