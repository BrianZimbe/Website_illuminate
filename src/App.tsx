import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/dates/styles.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";


import { AppShell, Container } from "@mantine/core";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HowToJoin from "./pages/HowToJoin";
import Benefits from "./pages/Benefits";
import Testimonials from "./pages/Testimonials";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton"; 


function App() {
  return (
    <Router>
      <AppShell
        header={{ height: 70 }}
        padding="md"
        navbar={{ width: 260, breakpoint: "sm", collapsed: { mobile: true } }}
      >
        <Navbar />

        <Container size="lg" mt="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-to-join" element={<HowToJoin />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        {/* WhatsApp Floating Button - Appears on all pages */}
          <WhatsAppFloatingButton />
      </AppShell>
    </Router>
  );
}

export default App;
