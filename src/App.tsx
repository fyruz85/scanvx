import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Approach } from './components/Approach';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LiveChat } from './components/LiveChat';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Approach />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
      <BackToTop />
    </div>
  );
}

export default App;
