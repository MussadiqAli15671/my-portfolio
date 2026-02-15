import { Helmet } from "react-helmet-async";
import About from "../components/About/About";

export default function AboutPage() {
  return (
    <>
    <Helmet>
  <title>
    About | AI & Full Stack Developer Serving New Zealand, Website Developer UAE & Global Clients
  </title>

  <meta
    name="description"
    content="Professional AI & Full Stack Developer, Website & Custom Software Developer working with startups and businesses in New Zealand, UAE, Dubai, Saudi Arabia and worldwide. Specializing in AI systems, scalable web applications and cloud architecture."
  />

  <meta
    name="keywords"
    content="About AI Developer NZ, Website & Custom Software, Full Stack Developer UAE, AI Engineer Dubai, Software Developer Saudi Arabia, Global AI Consultant"
  />

  <link
    rel="canonical"
    href="https://my-portfolio-mu-liard-vgt5886y18.vercel.app/about"
  />
    </Helmet>
    
    <main className="main">
      <About />
    </main>
    </>
  );
}
