import Head from "next/head";
import About from "../components/about/About";
import Community from "../components/community/Community";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Lottery from "../components/lottery/Lottery";
import NavBar from "../components/NavBar";
import Rarity from "../components/rarity/Rarity";
import Roadmap from "../components/roadmap/Roadmap";
import Team from "../components/team/Team";
import Utility from "../components/utility/Utility";

const Home = () => (
  <div>
    <Head>
      <title>
        NftLotty - React NFT Project Landing Page + NextJS + TailwindCSS
      </title>
      <meta name="description" content="Createdted by Softivus" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <NavBar />
      <Hero />
      <About />
      <Lottery />
      <Utility />
      <Rarity />
      <Roadmap />
      <Team />
      <Faq />
      <Community />
      <Footer />
    </main>
  </div>
);

export default Home;
