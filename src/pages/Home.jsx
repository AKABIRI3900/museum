import { useBooking } from "../booking";
import Hero from "../components/Hero";
import OtherArts from "../components/OtherArts";
import Exhibitions from "../components/Exhibitions";
import About from "../components/About";
import OnView from "../components/OnView";
import Collections from "../components/Collections";
import Faq from "../components/Faq";

export default function Home() {
  const { open } = useBooking();
  return (
    <>
      <Hero onBook={() => open()} />
      <OtherArts heading="سه هنر، سه صفحه" id="arts" />
      <Exhibitions />
      <About />
      <OnView />
      <Collections />
      <Faq />
    </>
  );
}
