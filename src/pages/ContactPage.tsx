import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact/Contact";

export default function ContactPage() {
  return (
    <>
    <Helmet>
  <title>
    Contact | AI & Software Development Services – NZ, UAE & Global
  </title>

  <meta
    name="description"
    content="Get in touch for AI development, Website & Custom Software, SaaS platforms, web applications and cloud solutions in New Zealand, UAE, Dubai, Saudi Arabia and worldwide."
  />

  <meta
    name="keywords"
    content="Hire AI Developer NZ, Website & Custom Software, Hire Full Stack Developer UAE, AI Consultant Dubai, Software Developer Saudi Arabia"
  />

  <link
    rel="canonical"
    href="https://my-portfolio-mu-liard-vgt5886y18.vercel.app/contact"
  />
</Helmet>

    <main className="main">
      <Contact />
    </main>
    </>
  );
}
