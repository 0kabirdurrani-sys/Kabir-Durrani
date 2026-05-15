import Hero from '../components/Hero';
import Services from '../components/Services';
import IrresistibleOffer from '../components/IrresistibleOffer';
import Pricing from '../components/Pricing';
import Tools from '../components/Tools';
import About, { SocialProof } from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Tools />
      <Services />
      <IrresistibleOffer />
      <About />
      <Pricing />
      <SocialProof />
      <Contact />
    </>
  );
}
