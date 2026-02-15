import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Resume from "../components/Resume/Resume";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <>
     <Helmet>
      <title>
        AI & Full Stack Developer | Software, Web & AI Solutions in New Zealand,
        UAE, Dubai & Saudi Arabia
      </title>

      <meta
        name="description"
        content="AI & Full Stack Developer providing AI development, Website, SaaS platforms, web applications and cloud solutions in New Zealand, UAE, Dubai, Saudi Arabia and globally. Building scalable AI-powered software for startups and enterprises."
      />

      <meta
        name="keywords"
        content="Website, AI Developer New Zealand, AI Developer UAE, Dubai AI Developer, Saudi Arabia AI Solutions, Full Stack Developer NZ, SaaS Development UAE, Web Development Dubai, Machine Learning Engineer, NLP Developer, Cloud DevOps Engineer"
      />

      <link
        rel="canonical"
        href="https://my-portfolio-mu-liard-vgt5886y18.vercel.app/"
      />
    </Helmet>
    
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}
