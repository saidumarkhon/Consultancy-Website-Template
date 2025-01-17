import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Trade from "./pages/Trade";
import About from "./pages/about";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import ContactForm from "./pages/Contact";
import BlogGrid from "./pages/Blog";
import Detail from "./pages/Detail"
import Feature from "./pages/Feature";
import QuotePage from "./pages/Quote";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blog" element={<BlogGrid />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
