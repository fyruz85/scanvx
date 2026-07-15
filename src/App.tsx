import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
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
        <Approach />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
      <BackToTop />
    </div>
  );
}

export default App;
